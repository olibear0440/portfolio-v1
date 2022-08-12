<template>
  <div class="secondBloc">
    <div class="aboutMeBlocText">
      <p class="title">{{ adj1 }}</p>
      <p class="aboutMeTxt">
        {{ txt1 }}
      </p>
      <p class="title">{{ adj2 }}</p>
      <p class="aboutMeTxt">
        {{ txt2 }}
      </p>
      <p class="title">{{ adj23 }}</p>
      <p class="aboutMeTxt">
        {{ txt3 }}
      </p>
      <p class="title">{{ adj4 }}</p>
      <p class="aboutMeTxt">
         {{ txt4 }}
      </p>
      <div class="contactBloc">
        <p class="aboutMeContact">{{ contact }}</p>
        <a :href="url"
          ><span class="fa fa-envelope fa-4x" aria-hidden="true"></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blocAboutMe",
  data: () => {
    return {
      adj1: "Passionnée",
      adj2: "Attentif",
      adj3: "Soucieux",
      adj4: "Expert",
      txt1: "Je me tiens au courant des dernieres technologies et concepts du web.",
      txt2: "J'élabore chaque fonctionnalités selon vos priorités et vos besoins.",
      txt3: "J'accorde une attention particulière à l'expérience utilisateur.",
      txt4: "Je développe chaque projet avec l'approche mobile first.",
      url: "mailto:olivier.bent@gmail.com",
      contact: "Me contacter",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/font/font-family.css";

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
  font-size: 40px;
  font-weight: bold;
  color: #3c4043;
  margin-bottom: 5px;
  font-family: "Roboto";
}

.aboutMeTxt {
  font-family: "RobotoLight";
  font-size: 40px;
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
  color: #3c4043;
}
.fa-envelope:before {
  color: #3c4043;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .aboutMeBlocText {
    height: auto;
    width: auto;
    margin-top: 0px;
  }

  .title {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 20px;
  }
  .aboutMeTxt {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .contactBloc {
    width: auto;
    margin-bottom: 30px;
  }
  .aboutMeContact {
    font-size: 30px;
    width: auto;
  }
}
</style>
