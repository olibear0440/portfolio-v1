<template>
  <div class="fourthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <h1>{{ titre }}</h1>

        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" :src="imgTw" alt="photo ohMyFood mobile" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" :src="imgTh" alt="photo ohMyFood mobile" />
      </div>
    </div>
  </div>
</template>

<script>
import ohmyfood1mob from "../assets/img/ohmyfood1mob.png";
import ohmyfood2mob from "../assets/img/ohmyfood2mob.png";
export default {
  name: "BlocOhMyFood",
  data: () => {
    return {
      titre: "ohmyfood",
      techno: "Front-end - html css - 100% mobile",
      pitch:
        "Votre restaurant gastronomique à portée de main, composez votre menu et réservez !",
      imgTw: ohmyfood1mob,
      imgTh: ohmyfood2mob,
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

  h1 {
    font-size: 40px;
    padding-left: 5px;
  }
  .projetTechno {
    font-size: 30px;
    padding: 0 5px;
    text-align: left;
  }
  .projetPitch {
    font-size: 20px;
    padding: 0 5px;
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
