<template>
  <div class="restaurant-home">
    <div class="restaurant-site-desc">
      <h2>Site de démonstration restaurant pizzeria</h2>
      <h4>VueJs</h4>
      <h4>Desktop</h4>
      <!-- <a href="#"><h4 class="linkToGit">Acces au site</h4></a>-->
    </div>

    <div class="restaurant-pict">
      <img
        src="../assets/img/accueil1-demo-restaurant.png"
        alt="accueil-part1"
      />
      <img
        src="../assets/img/accueil2-demo-restaurant.png"
        alt="accueil-part2"
      />
      <img src="../assets/img/menu-demo-restaurant.png" alt="menu" />
      <img
        src="../assets/img/reservation-demo-restaurant.png"
        alt="reservation"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Restaurant-accueil",
  /*loading d'une animation keyframes depuis javascript fonctionnel*/
  /*
  mounted() {
    window.addEventListener("load", function () {
      const imgContain = document.querySelector(".imgContain");
      imgContain.animate([{ height: "0px" }, { height: "400px" }], {
        duration: 1300,
        iterations: 1,
        easing: "ease",
        delay: 400
      });
    });
  },
  */
};
</script>
<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
.restaurant-home {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.restaurant-pict {
  width: 80%;
  height: auto;
}
h2 {
  margin: 10px;
  color: #9a7b5e;
}
h4 {
  margin: 10px;
  text-align: left;
  color: #9a7b5e;
}

.restaurant-site-desc {
  width: 80%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #9a7b5e;
}
img {
  margin: 10px;
  width: 90%;
  height: auto;
  border-radius: 6px;
}
@media screen and (min-width: 375px) and (max-width: 768px) {
  .restaurant-home {
    padding: 0 15px;
    justify-content: flex-start;
  }
  .restaurant-site-desc {
    width: 100%;
    margin: 15px 0 0 0;
  }
  h2,
  h4 {
    margin-left: 0;
    margin-right: 0;
  }
  h4 {
    line-height: 0.5em;
  }

  .restaurant-pict {
    width: 100%;
    padding-bottom: 20px;
  }
  img {
    margin: 5px 0;
    width: 100%;
    min-height: 230px;
    object-fit: cover;
  }
}
</style>
