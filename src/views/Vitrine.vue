<template>
  <div class="demo-vitrine">
    <VitDemo />
  </div>
</template>

<script>
import VitDemo from "../components/vitrine-demo.vue";
export default {
  name: "Demo-vitrine",
  components: {
    VitDemo,
  },
};
</script>

<style scoped>
.demo-vitrine {
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
    .demo-reseauSocial {
      flex-direction: column;
      justify-content: start;
      align-items: center;
    }
    */
}
</style>
