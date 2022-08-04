<template>
  <div class="secondBloc">
    <div class="aboutMeTitleBloc">
      <p class="aboutMeTitle">A PROPOS DE MOI</p>
      <div class="aboutMeBlocText">
        <p class="aboutMeTxt">
          Passionné, j'aime me tenir au courant des dernieres technologies et
          concepts du web.
        </p>
        <p class="aboutMeTxt">
          Attentif, j'élabore chaque fonctionnalités selon vos priorités et vos
          besoins.
        </p>
        <p class="aboutMeTxt">
          Soucieux, j'accorde une attention particulière à l'expérience
          utilisateur.
        </p>

        <p class="aboutMeTxt">
          Expert, je développe chaque projet avec l'approche mobile first.
        </p>
        <p class="aboutMeContact">
          Me contacter
        </p>
        <span class="fa fa-envelope fa-4x" aria-hidden="true"></span>
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
@font-face {
  font-family: "RobotoLight";
  src: url(../assets/font/Roboto-Light.ttf) format("truetype");
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
  color: #3c4043;
  margin-top: 0;
  margin-left: 25px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
}

.aboutMeBlocText {
  width: 100%;
}
.aboutMeTxt {
  font-family: "RobotoLight";
  font-size: 30px;
  width: 100%;
  color: #dddddd;

  padding: 10px 0px;
}
.aboutMeContact{
    font-size: 30px;
    font-family: "Roboto";
    color: #dddddd;
}
span{
  color: #dddddd;
}
</style>
