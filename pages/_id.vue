<template>
  <div class="app_container">
    <MainPage to="/:id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app_container {
  background: #e5e5e5;
  min-height: 100vh;
}
</style>
