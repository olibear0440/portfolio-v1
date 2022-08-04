<template>
  <div class="thirdBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img class="imgOne" :src="logo" alt="logo site reservia" />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" :src="imgTw" alt="photo reservia desktop" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" :src="imgTh" alt="photo reservia mobile" />
      </div>
    </div>
  </div>
</template>

<script>
import reserviaLogo from "../assets/img/Reservia.svg";
import reserviaDesk from "../assets/img/reserviaDesk.png";
import reserviaMob from "../assets/img/reservia_mob.jpg";
export default {
  name: "BlocReservia",
  data: () => {
    return {
      logo: reserviaLogo,
      imgTw: reserviaDesk,
      imgTh: reserviaMob,
      techno: "Front-end - html css",
      pitch:
        "Site de réservation. Trouvez des hébergements et des activités dans la ville de votre choix.",
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
.thirdBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  height: auto;
  width: 100%;
  margin-bottom: 150px;
  padding-bottom: 50px;
}

.projetBloc {
  display: flex;
  width: 100%;
  height: auto;
}
.projetBlocTxt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 600px;
}
.imgOne {
  width: 250px;
  padding: 0px 20px;
}
.projetTechno {
  color: #dddddd;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 20px;
}
.projetPitch {
  color: #dddddd;
  font-family: "RobotoLight";
  font-size: 25px;
  padding: 5px 20px;
  margin: 30px 0px 80px 0px;
  text-align: start;
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
  border: 1px solid #dddddd;
  border-radius: 20px;
  margin-left: 60px;
}

.imgThree {
  /*margin-top: 107px;*/
  margin-top: 50px;
  width: 400px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  height: auto;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>
