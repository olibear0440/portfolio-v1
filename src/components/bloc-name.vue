<template>
  <div class="mainBloc">
    <div class="nameBloc">
      <p class="myName">{{ nomPrenom }}</p>
    </div>
    <div class="jobBloc">
      <p class="myJob">{{ monMetier }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocName",
  data: () => {
    return {
      nomPrenom: "Olivier Benoit",
      monMetier: "Developpeur web",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
}
@font-face {
  font-family: "Dafoe";
  src: url(../assets/font/MrDafoe-Regular.ttf) format("truetype");
}
@font-face {
  font-family: Ibarra;
  src: url(../assets/font/IbarraRealNova-Regular.ttf) format("truetype");
}
.nameBloc {
  font-family: Dafoe;
  font-size: 150px;
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myName {
  margin: 0;
  padding-left: 70px;
  padding-right: 70px;
}
.jobBloc {
  font-family: Ibarra;
  font-size: 80px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.myJob {
  padding-left: 70px;
  padding-right: 70px;
  margin: 0;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .nameBloc {
    margin-top: 50px;
    font-size: 80px;
  }
  .myJob {
    font-size: 40px;
    margin-top: 80px;
  }
}
</style>
