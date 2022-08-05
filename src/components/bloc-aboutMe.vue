<template>
  <div class="secondBloc">
    <div class="aboutMeBlocText">
      <p class="title">Passionné</p>
      <p class="aboutMeTxt">
        je me tiens au courant des dernieres technologies et concepts du web.
      </p>
      <p class="title">Attentif</p>
      <p class="aboutMeTxt">
        j'élabore chaque fonctionnalités selon vos priorités et vos besoins.
      </p>
      <p class="title">Soucieux</p>
      <p class="aboutMeTxt">
        j'accorde une attention particulière à l'expérience utilisateur.
      </p>
      <p class="title">Expert</p>
      <p class="aboutMeTxt">
        je développe chaque projet avec l'approche mobile first.
      </p>
      <div class="contactBloc">
        <p class="aboutMeContact">Me contacter</p>
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

.aboutMeBlocText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: #3c4043;
  margin-bottom: 5px;
  font-family: "Roboto";
}

.aboutMeTxt {
  font-family: "RobotoLight";
  font-size: 30px;
  width: auto;
  color: #3c4043;
  margin: 0px 0px 40px 0px;
  padding: 10px 0px;
}

.aboutMeContact {
  font-size: 40px;
  font-weight: bold;
  font-family: "Roboto";
  color: #3c4043;
  width: 500px;
  margin-top: 0;
  margin-bottom: 15px;
}
.contactBloc {
  color: #3c4043;
}
.fa-envelope {
  cursor: pointer;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .aboutMeBlocText {
    height: auto;
    width: auto;
    margin-top: 0px;
  }

  .title {
    margin-top: 0px;
  }
  .aboutMeTxt {
    font-size: 20px;
  }
  .contactBloc {
    width: auto;
  }
  .aboutMeContact {
    font-size: 30px;
    width: auto;
  }
}
</style>
