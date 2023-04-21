<template>
    <div class="demo-reseauSocial">
      <ResSocial />
    </div>
  </template>
  
  <script>
  import ResSocial from "../components/reseau-Social-accueil.vue";
  export default {
    name: "Demo-reseauSocial",
    components: {
      ResSocial,
    },
  };
  </script>
  
  <style scoped>
  .demo-reseauSocial {
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
  