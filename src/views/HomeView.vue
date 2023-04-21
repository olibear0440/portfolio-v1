<template>
  <div class="home">
    <HomePage />
  </div>
  <div class="displayMobileViews">
    <Portfolio />
    <Apropos />
    <Contact />
  </div>
</template>

<script>
import HomePage from "@/components/homePage.vue";
import Portfolio from "../views/MonPortfolio.vue";
import Apropos from "../views/Apropos.vue";
import Contact from "../views/Contact.vue";
export default {
  name: "HomeView",
  components: {
    HomePage,
    Portfolio,
    Apropos,
    Contact,
  },
};
</script>
<style scoped>
.home {
  width: 70%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.displayMobileViews {
  display: none;
}
@media screen and (min-width: 375px) and (max-width: 1200px) {
  .home {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
  .displayMobileViews {
    display: block;
  }
}
</style>
