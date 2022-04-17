<template>
  <div class="home">
    <h1 class="home__title">
      Welcome to RandomBeer! Please follow the link below to enter your account
      <router-link class="home__link" to="/main">here</router-link>
    </h1>
  </div>
</template>

<style scoped>
.home {
  margin: 20px auto;
  text-align: center;
  color: rgb(180, 168, 168);
}

.home__title {
  padding: 0 20px;
}

.home__link {
  text-decoration: none;
  color: rgb(180, 168, 168);
  font-style: italic;
}
</style>