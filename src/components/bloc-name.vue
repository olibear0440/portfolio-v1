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
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.nameBloc {
  font-family: "Dafoe";
  font-size: 110px;
  width: 100%;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myName {
  margin-bottom: 20px;
  padding-left: 70px;
  padding-right: 70px;
  color: black;
  animation: slideUpName 1.5s ease-in-out forwards;
  width: 100%;
}
@keyframes slideUpName {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.jobBloc {
  font-family: "Roboto";
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.myJob {
  width: 100%;
  padding-left: 70px;
  padding-right: 70px;
  margin: 0;
  font-size: 50px;
  color: #3c4043;
  transition: color 0.5s;
  animation: slideUpJob 1s 1s ease-in-out forwards;
  opacity: 0;
}
@keyframes slideUpJob {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.myJob:hover{
  color: blue;
}



@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>
