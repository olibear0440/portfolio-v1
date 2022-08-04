<template>
  <div class="fifthBloc">
    <div class="projetBloc">
      <div class="projetBlocTxt">
        <img class="imgOne" src="../assets/img/orinoccoLogo.png" alt="logo orinoco" />
        <p class="projetTechno">{{ techno }}</p>
        <p class="projetPitch">{{ pitch }}</p>
        <img class="imgTwo" src="../assets/img/orinoco2.png" alt="photo orinoco desktop" />
      </div>
      <div class="projetBlocOne">
        <img class="imgThree" src="../assets/img/orinoco1.png" alt="photo orinoco desktop" />
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
      pitch: "Site e-commerce spécialisé dans les ours en peluche."
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.fifthBloc {
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
  width: 250px;
  padding: 0px 20px;
}
.projetTechno{
  color: #dddddd;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: bold;
  margin: 20px 0px 10px 0px;
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
  margin-left: 40px;
}

.imgThree{
  /*margin-top: 107px;*/
  margin-top: 70px;
  margin-right: 80px;
  width: 550px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  height: 600px;
}



@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>