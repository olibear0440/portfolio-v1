<template>
  <div class="aboutMeBlocText">
    <h2 class="title">{{ adj1 }}</h2>
    <p class="aboutMeTxt">
      {{ txt1 }}
    </p>
    <h2 class="title">{{ adj2 }}</h2>
    <p class="aboutMeTxt">
      {{ txt2 }}
    </p>
    <h2 class="title">{{ adj3 }}</h2>
    <p class="aboutMeTxt">
      {{ txt3 }}
    </p>
    <h2 class="title">{{ adj4 }}</h2>
    <p class="aboutMeTxt">
      {{ txt4 }}
    </p>
    <footer class="contactBloc">
      <a :href="url"
        >{{ contact }}<br /><span class="fa fa-envelope fa-4x"></span
      ></a>
    </footer>
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
  background-color: white;
}
.title {
  font-size: 35px;
  font-weight: bold;
  color: #3c4043;
  margin-bottom: 5px;
  font-family: "Roboto";
}

.aboutMeTxt {
  font-family: "RobotoLight";
  font-size: 35px;
  width: auto;
  color: #3c4043;
  margin: 0px 0px 40px 0px;
  padding: 10px 0px;
}

a {
  font-size: 35px;
  text-decoration: none;
  font-weight: bold;
  font-family: "Roboto";
  color: #3c4043;
  width: auto;
  margin-top: 0;
  margin-bottom: 15px;
}
.contactBloc {
  color: #3c4043;
  display: flex;
  flex-direction: column;
}

.fa-envelope {
  cursor: pointer;
  color: #3c4043;
  font-size: 2em;
  margin-top: 10px;
}
.fa-envelope:before {
  color: #919191;
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
  a {
    font-size: 25px;
    width: auto;
  }
}
</style>
