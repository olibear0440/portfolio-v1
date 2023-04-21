<template>
  <div class="aPropos">
    <TitreApropos />
    <InfosPerso />
    <SavoirFaire />
  </div>
</template>

<script>
import SavoirFaire from "@/components/bloc-savoirFaire.vue";
import InfosPerso from "@/components/bloc-infosPerso.vue";
import TitreApropos from "@/components/titre-aPropos.vue";

export default {
  name: "A-propos",
  components: {
    TitreApropos,
    InfosPerso,
    SavoirFaire,
  },

  data: () => {
    return {};
  },
};
</script>

<style scoped>
.aPropos {
  width: 70%;
  margin: 0 auto;
  /*
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  margin-left: 100px;
  flex-direction: column;
  */
}

@media screen and (min-width: 375px) and (max-width: 1200px) {
  .aPropos {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: auto;
  }
}
</style>
