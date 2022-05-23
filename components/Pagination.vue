<template>
  <div class="pagination_container">
    <div class="pages">
      <p class="number" v-if="$route.params.id > 2" @click="$router.push(`/1`)">
        1
      </p>
      <p class="dots" v-if="$route.params.id > 2">...</p>
      <p
        class="number"
        v-if="$route.params.id > 1"
        @click="$router.push(`/${$route.params.id - 1}`)"
      >
        {{ $route.params.id - 1 }}
      </p>
      <p class="active_page">{{ $route.params.id }}</p>
      <p
        class="number"
        v-if="$route.params.id < lastPage"
        @click="$router.push(`/${$route.params.id - 0 + 1}`)"
      >
        {{ $route.params.id - 0 + 1 }}
      </p>
      <p class="dots" v-if="$route.params.id - 0 < lastPage - 1">...</p>
      <p
        class="number"
        @click="$router.push(`/${lastPage}`)"
        v-if="$route.params.id < lastPage - 1"
      >
        {{ lastPage }}
      </p>
    </div>
    <div class="basket">
      <span>{{ totalPrice }} руб.</span
      ><img src="https://i.imgur.com/bGGE7AI.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    totalPrice: Number,
    lastPage: Number,
  },
});
</script>

<style scoped>
.pagination_container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 660px;
  height: 60px;
  background: rgb(0, 0, 0);
  opacity: 0.9;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.pages {
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 210px;
}
.number {
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
.active_page {
  font-size: 18px;
  font-weight: 700;
  margin: 0 5px;
}
.dots {
  font-size: 14px;
  font-weight: 400;
  margin: 0 4px;
}
.basket {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.basket span {
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
}
.basket img {
  width: 24px;
  height: 24px;
}

@media (max-width: 1000px) {
}
@media (max-width: 768px) {
  .pagination_container {
    width: 440px;
  }
}
@media (max-width: 480px) {
  .pagination_container {
    width: 320px;
    justify-content: flex-start;
  }
}
@media (max-width: 320px) {
}
</style>