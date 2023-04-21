<template>
  <NavPage />
</template>

<script>
import NavPage from "./components/nav.vue";

export default {
  name: "App",
  components: {
    NavPage,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: auto;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  #app{
    width: 100%;
}
}
</style>
