<template>
  <div class="grosTitre">
    <h1 class="titreContact">
      {{ titrePage }}
      <span class="titreContactSuite">{{ titrePageSuite }}</span>
    </h1>
    <p class="titreFond">{{ titreFond }}</p>
  </div>
</template>

<script>
export default {
  name: "Titre-contact",
  data: () => {
    return {
      titrePage: "Mon",
      titrePageSuite: "contact",
      titreFond: "GET IN TOUCH",
    };
  },
};
</script>

<style scoped>
/*@import "../assets/font/font-family.css";*/
@import "../assets/styles/titre-contact.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
</style>
