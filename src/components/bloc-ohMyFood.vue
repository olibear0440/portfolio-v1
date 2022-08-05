<template>
  <div class="fourthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <h1>ohmyfood</h1>
        <!--<img class="imgOne" src="../assets/img/ohmyfood@2x.svg" alt="logo ohMyFood" />-->
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img
          class="imgTwo"
          src="../assets/img/ohmyfood1mob.png"
          alt="photo ohMyFood mobile"
        />
      </div>
      <div class="projetBlocOne">
        <img
          class="imgThree"
          src="../assets/img/ohmyfood2mob.png"
          alt="photo ohMyFood mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocOhMyFood",
  data: () => {
    return {
      techno: "Front-end - html css - 100% mobile",
      pitch:
        "Votre restaurant gastronomique à portée de main, composez votre menu et réservez !",
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
@font-face {
  font-family: "shrikhandregular";
  src: url("../assets/font/shrikhand-regular-webfont.woff2") format("woff2"),
    url("../assets/font/shrikhand-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
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
/*.imgOne{
  width: 300px;
  padding: 0px 20px;
}
*/
h1 {
  font-family: "shrikhandregular";
  color: #3c4043;
  width: auto;
  height: auto;
  padding: 0 20px;
  font-size: 50px;
  margin-bottom: 15px;
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
  width: auto;
  height: 590px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  margin-left: 250px;
}
.imgThree {
  /*margin-top: 80px;*/
  width: 400px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  height: auto;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .projetBloc {
    height: 650px;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
  .projetBlocTxt {
    width: 100%;
    margin-bottom: 30px;
  }
  /*.imgOne{
    width: 150px;
    padding: 0px;
  }
  */
  h1 {
    font-size: 40px;
    padding-left: 0;
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
    width: 100px;
    height: auto;
    margin-left: 55px;
  }
  .projetBlocOne {
    position: relative;
    left: 170px;
    top: -251px;
    padding: 0;
  }
  .imgThree {
    width: 100px;
    height: auto;
  }
}
</style>
