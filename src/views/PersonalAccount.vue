<template>
  <div>
    <router-link to="/RandomBeer/" class="link">Home</router-link>
    <TheMain
      v-bind:profile="profile"
      v-bind:beer="beer"
      @change-beer="changeBeer"
    />
  </div>
</template>

<script>
import TheMain from "../components/TheMain.vue";

export default {
  data() {
    return {
      profile: {},
      beer: {},
    };
  },
  mounted() {
    this.getInitDataProfile();
    this.getDataBeer();
  },

  methods: {
    getInitDataProfile() {
      fetch("https://random-data-api.com/api/users/random_user")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Ошибка: ${res.status}`);
          }
        })
        .then((res) => {
          this.profile.name = `${res.first_name} ${res.last_name}`;
          this.profile.job = res.employment.title;
          this.profile.age = this.getAge(res.date_of_birth);
          this.profile.avatar = res.avatar;
        });
    },

    getDataBeer() {
      fetch("https://random-data-api.com/api/beer/random_beer")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Ошибка: ${res.status}`);
          }
        })
        .then((res) => {
          this.beer.brand = res.brand;
          this.beer.name = res.name;
          this.beer.style = res.style;
          this.beer.alcohol = res.alcohol;
        });
    },

    getAge(dateBirth) {
      const dateNowMs = new Date();
      const dateYearNow = dateNowMs.getFullYear();
      const dateMonth = dateNowMs.getMonth() + 1;
      let age = dateYearNow - Number(dateBirth.slice(0, 4));

      if (Number(dateBirth.slice(5, 7)) > dateMonth) {
        age += 1;
      }

      return age;
    },

    changeBeer() {
      this.getDataBeer();
    },
  },
  components: {
    TheMain,
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: rgb(180, 168, 168);
  font-style: italic;
  padding-right: 20px;
  text-align: right;
}
</style>



