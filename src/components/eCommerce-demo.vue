<template>
  <div class="eCom-demo-home">
    <div class="eCom-demo-site-desc">
      <h2 class="eComTitle">
        Site de démonstration - Vente de VTT - Projet en cours de réalisation
      </h2>
      <h4 class="eComTitle">VueJs - NodeJs - MongoDB</h4>
      <a href="#" target="_blank"><h4 class="eComTitle">Desktop</h4></a>
    </div>

    <div class="eCom-pict1">
      <img
        class="eComPic1"
        src="../assets/img/ecomVttdesk.png"
        alt="accueil-part1"
      />
      <img
        class="eComPic2"
        src="../assets/img/ecomVttdesk2.png"
        alt="accueil-part2"
      />
    </div>
    <div class="eCom-demo-site-desc">
      <h2 class="tBTitle">
        Site de démonstration - Vente de peluche Teddy Bear
      </h2>
      <h4 class="tBTitle">Javascript - HTML - CSS</h4>
      <a href="#" target="_blank"><h4 class="tBTitle">desktop</h4></a>
    </div>

    <div class="tB-pict1">
      <img
        class="tBPic1"
        src="../assets/img/orinoco2.webp"
        alt="accueil-part1"
      />
      <img
        class="tBPic2"
        src="../assets/img/orinoco1.webp"
        alt="accueil-part2"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "commerce-demo",
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
.eCom-demo-home {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eCom-demo-site-desc {
  width: 70%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.eComTitle {
  margin: 10px;
  color: #1f8b18;
}
h4 {
  margin: 10px;
  text-align: left;
}

img {
  margin: 10px;
  width: auto;
  height: auto;
  border-radius: 6px;
}

.eComPic1 {
  width: 70%;
  height: auto;
  margin-bottom: 20px;
}
.eComPic2 {
  width: 70%;
  height: auto;
}
.tB-pict1,
.eCom-pict1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: auto;
  margin-bottom: 50px;
  background: linear-gradient(0deg, #81e988, #1f8b18);
}
.tBTitle {
  margin: 10px;
  color: #bc7bb0;
}
.tB-pict1 {
  background: linear-gradient(0deg, #f4e9f2, #bc7bb0);
}

.tBPic1 {
  width: 70%;
  height: auto;
  margin-bottom: 20px;
}
.tBPic2 {
  width: 70%;
  height: auto;
}
@media screen and (min-width: 375px) and (max-width: 768px) {
  .eCom-demo-site-desc {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0 15px;
  }
  .eComTitle,
  .tBTitle {
    margin-left: 0;
    margin-right: 0;
  }
  h4 {
    line-height: 0.5em;
  }
  .eCom-pict1,
  .tB-pict1 {
    width: 100%;
    margin-bottom: 30px;
  }

  .eComPic1,
  .eComPic2,
  .tBPic1,
  .tBPic2 {
    width: 90%;
  }
}
</style>
