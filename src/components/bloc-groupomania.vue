<template>
  <div class="sixthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img class="imgOne" src="../assets/img/groupomaniaLogo2.png" alt="logo groupomania" />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" src="../assets/img/groupomania1.png" alt="photo groupomania desktop" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" src="../assets/img/groupomaniaMobile.png" alt="photo groupomania mobile" />
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
      pitch: "Communiquez plus facilement chez Groupomania avec le réseaux social d'entreprise."
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.sixthdBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  height: auto;
  width: 100%;
  margin-bottom: 250px;
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
.imgOne{
  width: 500px;
  margin-bottom: 5px;
}
.projetTechno{
  color: #dddddd;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 20px;
}
.projetPitch{
  color: #dddddd;
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

}
.imgTwo{
  /*width: 100%;*/
  width: auto;
  height: 590px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  margin-left: 60px;
}

.imgThree{
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