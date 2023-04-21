<template>
  <div class="homeBloc">
    <div class="mainBloc">
      <img src="../assets/img/IMG_0925.jpg" alt="photo de profil">
      <div class="nameBloc">
        <h1 class="preTitre">{{ nomPrenom }}</h1>
      </div>
      <div class="jobBloc">
        <h2 class="secTitre">{{ monMetier }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-Page",
  data: () => {
    return {
      nomPrenom: "Olivier Benoit",
      monMetier: "Developpeur web",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import "../assets/font/font-family.css";*/
@import "../assets/styles/homePage.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
</style>
