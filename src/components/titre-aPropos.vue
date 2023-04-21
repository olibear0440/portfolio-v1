<template>
  <!--
    <div class="them">
    <h1 class="revealAp">{{ sectionTitre }}</h1>
  </div>
  -->
  <div class="grosTitre">
    <h1 class="titreAPropos">
      {{ titrePage }}
      <span class="titreAProposSuite">{{ titrePageSuite }}</span>
    </h1>
    <p class="titreFond">{{ titreFond }}</p>
  </div>
</template>

<script>
export default {
  name: "Titre-aPropos",
  data: () => {
    return {
      titrePage: "A",
      titrePageSuite: "propos",
      titreFond: "Resume",
      //sectionTitre: "A PROPOS",
    };
  },
  /*
  mounted() {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("revealAp-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".revealAp"));
  },
  */
};
</script>

<style scoped>
@import "../assets/font/font-family.css";
@import "../assets/styles/titre-aPropos.css"; 

</style>
