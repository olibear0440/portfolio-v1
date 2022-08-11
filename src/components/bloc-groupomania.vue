<template>
  <div class="sixthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <h1>{{ titre }}</h1>
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" :src="imgTw" alt="photo groupomania desktop" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" :src="imgTh" alt="photo groupomania mobile" />
      </div>
    </div>
  </div>
</template>

<script>
import groupomania1 from "../assets/img/groupomania1.png";
import groupomaniaMobile from "../assets/img/groupomaniaMobile.png";
export default {
  name: "BlocGroupomania",
  data: () => {
    return {
      titre: "Groupomania",
      techno: "Full Stack - Sql node VueJs",
      pitch:
        "Réseaux social d'entreprise. Connectez vous, postez des messages et commentez les publications des autres employés!",
      imgTw: groupomania1,
      imgTh: groupomaniaMobile,
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
  width: 400px;
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
  h1 {
    padding: 0 5px;
    font-size: 40px;
  }
  .projetTechno {
    font-size: 30px;
    padding: 0 5px;
    text-align: left;
    margin-top: 10px;
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
