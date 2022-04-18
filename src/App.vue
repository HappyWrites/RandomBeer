<template>
  <div>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
div {
  background-color: rgb(35, 33, 33);
  height: 100vh;
  width: 100%;
  min-width: 320px;
  padding: 0 0 10px;
  margin: 0;
  text-rendering: optimizeLegibility;
  color: rgb(180, 168, 168);
  display: flex;
  flex-direction: column;
}
</style>
