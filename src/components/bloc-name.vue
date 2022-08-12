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
@import "../assets/font/font-family.css";
.mainBloc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: auto;
}

.nameBloc {
  font-family: "Dafoe";
  font-size: 110px;
  width: auto;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myName {
  margin-bottom: 20px;
  color: #3c4043;
  animation: slideUpName 1.5s ease-in-out forwards;
  width: auto;
  margin-top: 0px;
}
@keyframes slideUpName {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.jobBloc {
  font-family: "Roboto";
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 15px;
}
.myJob {
  width: auto;
  margin: 0;
  font-size: 50px;
  color: #3c4043;
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

@media screen and (min-width: 375px) and (max-width: 768px) {
  .mainBloc {
    height: 600px;
    margin-bottom: 50px;
  }
  .nameBloc {
    margin-top: 0px;
  }
  .myName {
    color: #3c4043;
    font-size: 50px;
    margin-bottom: 0px;
    animation: none;
  }
  .myJob {
    font-size: 25px;
    animation: none;
    opacity: 1;
  }
}
</style>
