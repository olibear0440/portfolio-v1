<template>
  <div class="resSocial-home">
    <div class="resSocial-site-desc">
      <h2>Site de démonstration reseau-social d'entreprise</h2>
      <h4>Vuejs - NodeJs - mySql</h4>
      <a href="#"><h4>desktop - mobile</h4></a>
    </div>

    <div class="resSocial-pict1">
      <img
        class="rsPic1"
        src="../assets/img/accueilPic.png"
        alt="accueil-part1"
      />
    </div>
    <div class="resSocial-pict1">
      <img
        class="rsPic2"
        src="../assets/img/postsPage.png"
        alt="accueil-part2"
      />
    </div>

    <div class="resSocial-pict1">
      <img
        class="rsPic3"
        src="../assets/img/createPostPage.png"
        alt="accueil-part1"
      />
    </div>
    <div class="resSocial-pict1 mobV">
      <img
        class="rsPic5"
        src="../assets/img/postsPageMob.png"
        alt="accueil-part1"
      />
      <img
        class="rsPic6"
        src="../assets/img/commentManageMob.png"
        alt="accueil-part2"
      />
      <img
        class="rsPic7"
        src="../assets/img/userManageMob.png"
        alt="accueil-part2"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Reseau-social",
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
.resSocial-home {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.resSocial-pict1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  background: rgb(76, 91, 107);
  background: linear-gradient(
    90deg,
    rgba(76, 91, 107, 1) 23%,
    rgba(44, 62, 80, 1) 50%,
    rgba(110, 121, 134, 1) 75%
  );
  /*background-color: rgb(44, 62, 80);*/
  margin-bottom: 10px;
}
.rsPic1 {
  width: auto;
}
.rsPic2 {
  width: 40%;
  height: auto;
}
.rsPic3 {
  width: 40%;
}

.rsPic7 {
  width: 21%;
}
.rsPic5 {
  width: 17%;
  margin-left: 50px;
  margin-right: 120px;
}
.rsPic6 {
  width: 18%;
  margin-right: 120px;
}
h2 {
  margin: 10px;
  color: #678fb9;
}
h4 {
  margin: 10px;
  text-align: left;
  color: #678fb9;
}
.resSocial-site-desc {
  width: 70%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
img {
  margin: 10px;
  width: auto;
  height: auto;
  border-radius: 6px;
}
@media screen and (min-width: 375px) and (max-width: 768px) {
  .resSocial-home {
  }
  .resSocial-site-desc {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0 15px;
  }
  h2,
  h4 {
    margin-left: 0;
    margin-right: 0;
  }
  h4 {
    line-height: 0.5em;
  }
  .resSocial-pict1 {
    width: 100%;
    margin-bottom: 0;
    padding-bottom: 20px;
  }
  .mobV {
    justify-content: space-around;
  }
  .rsPic1,
  .rsPic2,
  .rsPic3 {
    width: 90%;
    height: auto;
  }
  .rsPic5,
  .rsPic6 {
    width: auto;
    height: 330px;
    margin: 0;
    padding: 5px;
  }
  .rsPic7 {
    display: none;
  }
}
</style>
