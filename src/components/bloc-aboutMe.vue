<template>
  <div class="secondBloc">
    <div class="aboutMeTitleBloc">
      <p class="aboutMeTitle">A PROPOS</p>
      <p class="aboutMeTxt">Une méthode de travail autour de 3 thématiques</p>
    </div>
    <div class="aboutMeIconBloc">
      <div class="iconOne">
        <span class="fa fa-mobile fa-3x" aria-hidden="true"></span>
        <p class="aboutMeIconTxt">Responsivité</p>
      </div>
      <!--<p class="aboutMeText">En tant que développeur, j'ai à coeur de concevoir des applications adaptées à vos besoins tout en apportant un soin particulier à l'expérience utilisateur.  </p>-->
      <div class="iconTwo">
        <span class="fa fa-check-square-o fa-3x" aria-hidden="true"></span>
        <p class="aboutMeIconTxt">Besoins client</p>
      </div>
      <div class="iconThree">
        <span class="fa fa-heart fa-3x" aria-hidden="true"></span>
        <p class="aboutMeIconTxt">Expérience utilisateur</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blocAboutMe",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}

.secondBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.aboutMeTitleBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.aboutMeTitle {
  font-size: 100px;
  font-weight: bold;
  font-family: "Roboto";
  color: rgb(238, 238, 238);
  margin-top: 0;
  margin-left: 25px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
}

.aboutMeTxt{
  font-family: "Roboto";
  font-size: 50px;
  
  color: #3c4043;
  margin-left: 20%;
  padding: 10px;
}
.aboutMeIconBloc {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
  
}
span{
  padding: 10px;
}
.iconOne, .iconTwo, .iconThree {
  margin: 10px 10px;
  padding: 10px;
  font-size: 20px;
  color: #3c4043;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 400px;
  border-radius: 30px;
}
.iconOne{
  background-color: #e8f0fe;
  color: #669df6;
}
.iconTwo{
background-color: #fef7e0;
color: #fcc934;
}
.iconThree{
  background-color:#e6f4ea;
  color: #81c995;
}
.aboutMeIconTxt {
  font-size: 30px;
  font-family: "Roboto";
  font-weight: bold;
  
  
  
}
</style>
