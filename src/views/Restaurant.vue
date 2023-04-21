<template>
  <div class="demo-restaurant">
    <RestoHome />
  </div>
</template>

<script>
import RestoHome from "../components/restaurant-accueil.vue";
export default {
  name: "Demo-restaurant",
  components: {
    RestoHome,
  },
};
</script>

<style scoped>
.demo-restaurant {
  width: 100%;
  /*margin: 0 auto;*/
  /*
    max-width: 1440px;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    margin-left: 100px;
    */
}

@media screen and (min-width: 375px) and (max-width: 1200px) {
  /*
  .demo-restaurant {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  */
}
</style>
