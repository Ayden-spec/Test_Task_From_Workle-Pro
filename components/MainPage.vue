<template>
  <div class="container">
    <div class="columns">
      <div class="container_cards_list">
        <Card
          :item_data="item"
          v-for="item in data.filter((el, index) => index % 2 === 0)"
          :key="item.id"
          :count="GetBasketCount(item.id)"
          @BasketPlus="ActionPlus($event)"
          @BasketMinus="ActionMinus($event)"
        />
      </div>
      <div class="container_cards_list">
        <Card
          :item_data="item"
          v-for="item in data.filter((el, index) => index % 2 !== 0)"
          :key="item.id"
          :count="GetBasketCount(item.id)"
          @BasketPlus="ActionPlus($event)"
          @BasketMinus="ActionMinus($event)"
        />
      </div>
    </div>
    <div class="pagination_block">
      <Pagination :totalPrice="GetTotalPrice()" :lastPage="lastPage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import Card from "./Card.vue";
import Pagination from "./Pagination.vue";

import UseBasket from "@/composables/UseBasket";
import UseData from "@/composables/UseData";

export default defineComponent({
  components: {
    Card,
    Pagination,
  },
  setup() {
    const { ActionPlus, ActionMinus, GetBasketCount, GetTotalPrice } =
      UseBasket();

    const { data, lastPage } = UseData();

    return {
      data,
      lastPage,
      ActionPlus,
      ActionMinus,
      GetBasketCount,
      GetTotalPrice,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.columns {
  display: flex;
  padding: 0 0 60px 0;
}
.columns .container_cards_list:first-child {
  margin-right: 20px;
}
.container_cards_list {
  width: 320px;
}
.pagination_block {
  position: fixed;
  display: flex;
  justify-content: center;
  background: #000;
  opacity: 0.9;
  bottom: 0;
  width: 100%;
}
@media (max-width: 1000px) {
}
@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
  .columns .container_cards_list:first-child {
    margin-right: 0;
  }
  .container_cards_list {
    width: 440px;
  }
}
@media (max-width: 480px) {
  .container_cards_list {
    width: 320px;
  }
}
@media (max-width: 320px) {
}
</style>
