<template>
  <div class="home">
    <BlocName />
    <BlocThemeExp />
    <BlocReservia />
    <BlocGroupomania />
    <BlocOhMyFood />
    <BlocOrinoco />
    <BlocThemeXptz />
    <BlocExpertise />
    <BlocThemeApropos />
    <BlocAboutMe />
  </div>
</template>

<script>
import BlocName from "@/components/bloc-name.vue";
import BlocThemeExp from "@/components/bloc-themeExp.vue";
import BlocReservia from "@/components/bloc-reservia.vue";
import BlocGroupomania from "@/components/bloc-groupomania.vue";
import BlocOhMyFood from "@/components/bloc-ohMyFood.vue";
import BlocOrinoco from "@/components/bloc-orinoco.vue";
import BlocThemeXptz from "@/components/bloc-themeXptz.vue";
import BlocExpertise from "@/components/bloc-expertise.vue";
import BlocThemeApropos from "@/components/bloc-themeApropos.vue";
import BlocAboutMe from "@/components/bloc-aboutMe.vue";

export default {
  name: "HomeView",

  components: {
    BlocName,
    BlocThemeExp,
    BlocReservia,
    BlocGroupomania,
    BlocOhMyFood,
    BlocOrinoco,
    BlocThemeXptz,
    BlocExpertise,
    BlocThemeApropos,
    BlocAboutMe,
  },
};
</script>
<style scoped>
.home {
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
}
@media screen and (min-width: 375px) and (max-width: 720px) {
}
</style>
