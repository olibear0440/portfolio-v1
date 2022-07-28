<template>
  <div class="thirdBloc">
    <div class="experienceTitleBloc">
      <p class="experienceTitle">{{ sectionTitre }}</p>
    </div>
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img class="imgOne" src="../assets/img/Reservia.svg" alt="logo reservia" />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" src="../assets/img/resrerviaDesk.png" alt="photo reservia desktop" />
      </div>
      <div class="reserviaBlocOne">
        <img class="imgThree" src="../assets/img/reservia_mob.jpg" alt="photo reservia mobile" />
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocReservia",
  data: () => {
    return {
      sectionTitre: "EXPERIENCES",
      techno: "Front-end - html css",
      pitch: "Outil de planification de vacances. L'application permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix."
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.thirdBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
}
.experienceTitleBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.experienceTitle {
  font-size: 100px;
  font-weight: bold;
  color: rgb(238, 238, 238);
  margin-top: 0;
  margin-left: 25px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
  font-family: "Roboto";
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
.imgOne{
  width: 250px;
  padding: 0px 20px;
}
.projetTechno{
  color: #3c4043;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 20px;
}
.projetPitch{
  color: #3c4043;
  font-family: "Roboto";
  font-size: 25px;
  padding: 5px 20px;
  margin: 10px 0px 20px 0px;
  text-align: start;
}
span{
  width: 50px;
}
.reserviaBlocOne{
  width: 50%;
}

.imgThree{
  margin-top: 25px;
  width: 400px;
  border: 3px solid #3c4043;
  border-radius: 20px;
  height: auto;
}
.imgTwo{
  width: 100%;
  height: 590px;
  border: 3px solid #3c4043;
  border-radius: 20px;
}


@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>
