<template>
  <div class="monContact">
    <TitreContact />
    <BlocContact />
  </div>
</template>

<script>
import TitreContact from "@/components/titre-contact.vue";
import BlocContact from "@/components/bloc-contact.vue";

export default {
  name: "Mon-contact",
  components: {
    TitreContact,
    BlocContact,
  },
};
</script>

<style scoped>
.monContact {
  width: 70%;
  margin: 0 auto;

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
  .monContact {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: auto;
  }
}
</style>
