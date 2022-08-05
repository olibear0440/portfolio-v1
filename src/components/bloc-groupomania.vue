<template>
  <div class="sixthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img
          class="imgOne"
          src="../assets/img/groupomaniaLogo2.png"
          alt="logo groupomania"
        />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img
          class="imgTwo"
          src="../assets/img/groupomania1.png"
          alt="photo groupomania desktop"
        />
      </div>
      <div class="projetBlocOne">
        <img
          class="imgThree"
          src="../assets/img/groupomaniaMobile.png"
          alt="photo groupomania mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocGroupomania",
  data: () => {
    return {
      techno: "Full Stack - Sql node VueJs",
      pitch:
        "Réseaux social d'entreprise. Connectez vous, postez des messages et commentez ceux des autres employés!",
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "RobotoLight";
  src: url(../assets/font/Roboto-Light.ttf) format("truetype");
}

.projetBloc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 200px;
}
.projetBlocTxt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
}
.imgOne {
  width: 350px;
  margin-bottom: 10px;
}
.projetTechno {
  color: #3c4043;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 20px 0px 10px 0px;
  padding: 10px 20px;
  width: auto;
}
.projetPitch {
  color: #3c4043;
  font-family: "RobotoLight";
  font-size: 25px;
  padding: 5px 20px;
  margin: 30px 0px 80px 0px;
  text-align: start;
  width: auto;
}
span {
  width: 50px;
}
.projetBlocOne {
  width: 50%;
}
.imgTwo {
  width: auto;
  height: 590px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  margin-left: 60px;
}

.imgThree {
  width: 100px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  height: auto;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .projetBloc {
    flex-wrap: wrap;
    height: 600px;
    margin-bottom: 20px;
  }
  .projetBlocTxt {
    width: 100%;
    height: 410px;
    margin-bottom: 0px;
  }
  .imgOne {
    width: 250px;
    padding: 0px;
  }
  .projetTechno {
    font-size: 30px;
    padding: 0px;
    text-align: left;
  }
  .projetPitch {
    font-size: 20px;
    padding: 0px;
    margin-bottom: 50px;
  }
  .imgTwo {
    width: 50%;
    height: auto;
    margin-left: 20px;
    border-radius: 10px;
    margin-top: 30px;
  }
  .projetBlocOne {
    width: auto;
    position: relative;
    left: 230px;
    top: -100px;
    padding: 0;
  }
  .imgThree {
    width: 100px;
    height: auto;
  }
}
</style>
