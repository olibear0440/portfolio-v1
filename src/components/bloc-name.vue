<template>
  <div class="mainBloc">
    <div class="nameBloc">
      <h1>{{ nomPrenom }}</h1>
    </div>
    <div class="jobBloc">
      <h2>{{ monMetier }}</h2>
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
  font-size: 90px;
  width: auto;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: lighter;
  margin-bottom: 20px;
  color: #3c4043;
  animation: slideUpName 1s ease-out forwards;
  width: auto;
  margin-top: 0px;
}
@keyframes slideUpName {
  from {
    transform: translateY(100px);
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
h2 {
  width: auto;
  margin: 0;
  font-weight: lighter;
  font-size: 70px;
  color: #3c4043;
  animation: slideUpJob 1.5s 0.7s ease-in-out forwards;
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
  h1 {
    font-size: 50px;
    margin-bottom: 0px;
    animation: none;
    width: 100%
  }
  h2 {
    font-size: 25px;
    width: 100%;
  }
}
</style>
