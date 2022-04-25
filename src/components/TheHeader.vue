<template>
  <header class="header">
    <a href="#" target="_blank">
      <img src="../assets/header.jpg" className="header__logo" alt="Логотип" />
    </a>
  </header>
</template>

<style scoped>
.header__logo {
  width: 100%;
  height: 65px;
  object-fit: cover;
  opacity: 0.6;
}

@media screen and (min-width: 620px) {
  .header__logo {
    max-height: 120px;
  }
}
</style>