<template>
  <div class="card_container">
    <div class="author">
      <img :src="item_data.user.profile_image.small" />
      <div class="author_tag_name">
        <p class="author_name" @click="RedirectToAuthor">
          {{ item_data.user.name }}
        </p>
        <p class="author_tag" @click="RedirectToAuthor">
          @{{ item_data.user.username }}
        </p>
      </div>
    </div>

    <img class="photo" :src="item_data.urls.full" />

    <div class="actions_price">
      <div class="actions">
        <img
          src="https://i.imgur.com/yfLurMz.png"
          alt="+"
          class="action_plus"
          @click="$emit('BasketPlus', { price, id: item_data.id })"
        /><img
          src="https://i.imgur.com/MA3gGvH.png"
          alt="-"
          class="icon_minus"
          @click="$emit('BasketMinus', { price, id: item_data.id })"
        /><span>{{ count ? count : 0 }}</span>
      </div>
      <p class="price">{{ price }} руб.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import UseRandomPrice from "~/composables/UseRandomPrice";

export default defineComponent({
  props: {
    item_data: Object,
    count: Number,
  },
  setup(props) {
    const { price } = UseRandomPrice(1000, 60000);

    const RedirectToAuthor = () => {
      window.open(props.item_data!.user.links.html);
      console.log(props.item_data);
    };

    return { price, RedirectToAuthor };
  },
});
</script>


<style scoped>
.card_container {
  width: 100%;
  padding: 10px 0;
}
.author {
  display: flex;
  align-items: center;
  height: 30px;
  margin: 0 0 10px 10px;
}
.author img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 10px 0 0;
}
.author_name {
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
}
.author_tag {
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
}
.photo {
  width: 100%;
}
.actions {
  display: flex;
  align-items: center;
}
.actions_price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  margin: 10px 0 0 10px;
}
.actions img {
  width: 12px;
}
.actions span {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
}
.icon_minus {
  margin: 0 10px 0 2px;
}
.price {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
}
</style>