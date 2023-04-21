<template>
  <div class="grosTitre">
    <h1 class="titreMonPortfolio">
      {{ titrePage }}
      <span class="titreMonPortfolioSuite">{{ titrePageSuite }}</span>
    </h1>
    <p class="titreFond">{{ titreFond }}</p>
  </div>
</template>

<script>
export default {
  name: "Titre-portfolio",
  data: () => {
    return {
      titrePage: "Mon",
      titrePageSuite: "portfolio",
      titreFond: "Experience",
    };
  },
};
</script>

<style scoped>
/*@import "../assets/font/font-family.css";*/
@import "../assets/styles/titre-portfolio.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
</style>
