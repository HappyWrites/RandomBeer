<template>
  <main class="content">
    <section class="profile">
      <img
        class="profile__image"
        src="../assets/avatarDefolt.png"
        alt="avatar"
      />
      <div class="profile__data">
        <h2 class="profile__info">{{ profile.name }}</h2>
        <p class="profile__info">{{ profile.job }}</p>
        <p class="profile__info">{{ profile.age }} years old</p>
      </div>
    </section>

    <section class="beer">
      <h2 class="beer__title">Today we offer you to try:</h2>
      <p class="beer__info">title: {{ beer.name }}</p>
      <p class="beer__info">style: {{ beer.style }}</p>
      <p class="beer__info">brand: {{ beer.brand }}</p>
      <p class="beer__info">alcohol: {{ beer.alcohol }}</p>
      <button
        class="beer__button"
        v-on:click="$emit('change-beer')"
        type="button"
      >
        more options
      </button>
      <img class="beer__image" src="../assets/beer.png" />
    </section>
  </main>
</template>


<script>
export default {
  props: ["profile", "beer"],
};
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .content {
    flex-direction: row;
    justify-content: space-around;
    font-size: 18px;
    line-height: 22px;
  }
}

.profile {
  border: 1px solid grey;
  color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transition: 0.8s;
}

.profile:hover {
  transform: scale(1.03);
}

@media screen and (min-width: 768px) {
  .profile {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.profile__data {
  padding: 0 0 0 25px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

@media screen and (min-width: 768px) {
  .profile__data {
    padding: 15px 0 0;
  }
}

.profile__info {
  padding: 0 0 10px 0;
  margin: 0;
  max-width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.profile__image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px 0;
  display: flex;
  align-self: center;
}

.beer {
  border: 1px solid grey;
  padding: 10px;
  margin: 10px 10px 0;
  border-radius: 25px;
  position: relative;
  transition: 0.8s;
}

.beer:hover {
  transform: scale(1.03);
}

.beer__button {
  background-color: rgb(251, 217, 25);
  min-height: 46px;
  border: 2px solid rgb(240, 236, 236);
  border-radius: 15px;
  color: black;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
}

.beer__button:hover {
  opacity: 0.6;
}

.beer__image {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 100px;
  left: -40px;
}

@media screen and (min-width: 768px) {
  .beer__image {
    top: 145px;
  }
}

.beer__info {
  padding: 0 0 16px;
  margin: 0;
  text-align: right;
}
</style>