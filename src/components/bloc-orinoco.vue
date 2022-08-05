<template>
  <div class="fifthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <h1>Orinoco</h1>
        <!--<img class="imgOne" src="../assets/img/orinoccoLogo.png" alt="logo orinoco" />-->
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img
          class="imgTwo"
          src="../assets/img/orinoco2.png"
          alt="photo orinoco desktop"
        />
      </div>
      <div class="projetBlocOne">
        <img
          class="imgThree"
          src="../assets/img/orinoco1.png"
          alt="photo orinoco desktop"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocOrinoco",
  data: () => {
    return {
      techno: "Front-end - html css javascript",
      pitch: "Site e-commerce spécialisé dans la vente d'ours en peluche.",
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
  margin-bottom: 150px;
}
.projetBlocTxt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
}
h1 {
  color: #3c4043;
  width: auto;
  height: auto;
  padding: 0 20px;
  font-size: 50px;
  margin-bottom: 15px;
  font-family: "Roboto";
}
.projetTechno {
  color: #3c4043;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 10px 0;
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
  /*width: 100%;*/
  width: auto;
  height: 590px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  margin-left: 40px;
}

.imgThree {
  /*margin-top: 107px;*/
  margin-top: 70px;
  width: 550px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  height: auto;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .projetBloc {
    flex-wrap: wrap;
    height: 600px;
  }
  h1 {
    font-size: 40px;
    padding-left: 0;
  }
  .projetBlocTxt {
    width: 100%;
    height: 510px;
    margin-bottom: 0px;
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
    width: 209px;
    height: 170px;
    border-radius: 10px;
    margin-left: 10px;
  }
  .projetBlocOne {
    width: auto;
  }
  .imgThree {
    width: 209px;
    height: 170px;
    border-radius: 10px;
    margin-top: 0px;
    margin-left: 130px;
  }
}
</style>
