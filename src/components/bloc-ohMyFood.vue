<template>
  <div class="fourthBloc">
    
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img class="imgOne" src="../assets/img/ohmyfood@2x.svg" alt="logo ohMyFood" />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" src="../assets/img/ohmyfood1mob.png" alt="photo ohMyFood mobile" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" src="../assets/img/ohmyfood2mob.png" alt="photo ohMyFood mobile" />
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
      pitch: "Finis le temps d'attente, trouvez votre restaurant gastronomique, composez votre menu et réservez !"
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.fourthBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
  padding: 20px 0px 20px 0px;
  margin-bottom: 250px;
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
  width: 300px;
  padding: 0px 20px;
}
.projetTechno{
  color: #3c4043;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 20px 0px 10px 0px;
  padding: 10px 20px;
}
.projetPitch{
  color: #3c4043;
  font-family: "Roboto";
  font-size: 25px;
  padding: 5px 20px;
  margin: 30px 0px 80px 0px;
  text-align: start;
}
span{
  width: 50px;
}
.projetBlocOne{
  width: 50%;
  padding-top: 22px;
}

.imgThree{
  /*margin-top: 80px;*/
  
  width: 400px;
  border: 3px solid #3c4043;
  border-radius: 20px;
  height: auto;

}
.imgTwo{
  width: auto;
  height: auto;
  border: 3px solid #3c4043;
  border-radius: 20px;
  margin-left: 200px;
}


@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>
