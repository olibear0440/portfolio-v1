<template>
    <div class="experienceTitleBloc">
      <p class="experienceTitle">{{ sectionTitre }}</p>
    </div>
</template>

<script>

export default {
  name: "BlocThemeExp",
  data: () => {
    return {
      sectionTitre: "EXPERIENCE"
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}


.experienceTitleBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.experienceTitle {
  font-size: 100px;
  font-weight: bold;
  color: #3c4043;
  margin-top: 0;
  margin-left: 25px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
  font-family: "Roboto";
  animation: slideRightTitle 1.5s ease-in-out forwards;
}
@keyframes slideRightTitle {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>