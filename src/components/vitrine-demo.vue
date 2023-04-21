<template>
  <div class="vitrine-demo-home">
    <div class="vitrine-demo-site-desc">
      <h2 class="smcTitle">Site de démonstration - personnal seller</h2>
      <h4 class="smcTitle">VueJs</h4>
      <a href="#" target="_blank"><h4 class="smcTitle">Desktop - mobile</h4></a>
    </div>

    <div class="smc-pict1">
      <img
        class="smcPic1"
        src="../assets/img/smcDesktop.png"
        alt="accueil-part1"
      />
      <img
        class="smcPic2"
        src="../assets/img/smcMobile.png"
        alt="accueil-part2"
      />
    </div>
    <div class="vitrine-demo-site-desc">
      <h2 class="reserviaTitle">
        Site de démonstration - integration maquette reservation
      </h2>
      <h4 class="reserviaTitle">Html css</h4>
      <a href="#" target="_blank"
        ><h4 class="reserviaTitle">desktop - mobile</h4></a
      >
    </div>

    <div class="reservia-pict1">
      <img
        class="rsPic1"
        src="../assets/img/reserviaDesktop.png"
        alt="accueil-part1"
      />
      <img
        class="rsPic2"
        src="../assets/img/reserviaMobile.png"
        alt="accueil-part2"
      />
    </div>
    <div class="vitrine-demo-site-desc">
      <h2 class="foodTitle">Site de démonstration - restaurant commande</h2>
      <h4 class="foodTitle">Html - css</h4>
      <a href="#" target="_blank"><h4 class="foodTitle">Mobile only</h4></a>
    </div>

    <div class="food-pict1">
      <img
        class="fdPic1"
        src="../assets/img/foodMobile1.png"
        alt="accueil-part1"
      />
      <img
        class="fdPic2"
        src="../assets/img/foodMobile2.png"
        alt="accueil-part2"
      />
      <img
        class="fdPic3"
        src="../assets/img/foodMobile3.png"
        alt="accueil-part3"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "vitrine-demo",
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
.vitrine-demo-home {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.vitrine-demo-site-desc {
  width: 70%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.reserviaTitle {
  margin: 10px;
  color: #0065fc;
}

.foodTitle {
  margin: 10px;
  color: #9356dc;
}
.smcTitle {
  margin: 10px;
  color: #ca6344;
}
h4 {
  margin: 10px;
  text-align: left;
}

img {
  margin: 10px;
  width: 80%;
  height: auto;
  border-radius: 6px;
}
.reservia-pict1,
.food-pict1,
.smc-pict1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: auto;

  margin-bottom: 50px;
}
.reservia-pict1 {
  background: linear-gradient(0deg, #0065fc, #54dbf3);
}

.food-pict1 {
  background: linear-gradient(0deg, #9356dc, #ff79da);
}

.smc-pict1 {
  background: linear-gradient(0deg, #ca6344, #ecad4f);
}
.rsPic1 {
  width: 50%;
  height: auto;
  margin-right: 100px;
}
.rsPic2 {
  width: auto;
  height: 640px;
}
.fdPic1,
.fdPic2,
.fdPic3 {
  width: auto;
  height: 640px;
  margin-right: 100px;
}
.smcPic1 {
  width: 60%;
  height: auto;
  margin-right: 100px;
}
.smcPic2 {
  width: auto;
  height: 720px;
}
@media screen and (min-width: 375px) and (max-width: 1200px) {
  .vitrine-demo-site-desc {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0 15px;
  }
  h4 {
    line-height: 0.5em;
  }
  .reserviaTitle,
  .smcTitle,
  .foodTitle {
    margin-left: 0;
    margin-right: 0;
  }
  .reservia-pict1,
  .smc-pict1 {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  .food-pict1 {
    width: 100%;
    justify-content: space-between;
  }
  .smcPic1,
  .rsPic1 {
    width: 90%;
    height: auto;
    margin: 10px;
  }
  .smcPic2,
  .rsPic2 {
    height: 400px;
  }
  .fdPic1,
  .fdPic2,
  .fdPic3 {
    width: auto;
    height: 230px;
    margin: 10px;
  }
}
</style>
