<template>
  <div>
    <TheHeader />
    <PersonalAccount />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import PersonalAccount from "./views/PersonalAccount.vue"

export default {
  name: "App",
  components: {
    TheHeader,
    PersonalAccount,
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
