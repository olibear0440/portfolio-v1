<template>
  <div class="thirdBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <h1>{{ titre }}</h1>
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
import reserviaDesk from "../assets/img/reserviaDesk.png";
import reserviaMob from "../assets/img/reservia_mob.jpg";
export default {
  name: "BlocReservia",
  data: () => {
    return {
      titre: "Reservia",
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
@import "../assets/font/font-family.css";
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
  margin-bottom: 0px;
  font-family: "RobotoMedium";
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
  margin-left: 60px;
}

.imgThree {
  width: 400px;
  border: 2px solid #3c4043;
  border-radius: 20px;
  height: auto;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .projetBloc {
    flex-wrap: wrap;
    height: 560px;
    margin-bottom: 0px;
  }
  .projetBlocTxt {
    width: 100%;
    margin-bottom: 0;
    height: 410px;
  }
  h1 {
    padding: 0 5px;
    font-size: 40px;
  }
  .projetTechno {
    font-size: 30px;
    padding: 0 5px;
  }
  .projetPitch {
    font-size: 20px;
    padding: 0 5px;
    margin-bottom: 50px;
  }
  .imgTwo {
    width: 50%;
    height: auto;
    margin-left: 20px;
    border-radius: 10px;
  }
  .projetBlocOne {
    width: auto;
    position: relative;
    left: 230px;
    top: -180px;
    padding: 0;
  }
  .imgThree {
    width: 30%;
    height: auto;
    width: 100px;
  }
}
</style>
