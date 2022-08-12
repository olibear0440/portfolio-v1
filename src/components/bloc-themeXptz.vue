<template>
  <div class="experienceTitleBloc">
    <p class="experienceTitle">{{ sectionTitre }}</p>
  </div>
</template>

<script>
export default {
  name: "BlocThemeXptz",
  data: () => {
    return {
      sectionTitre: "SAVOIR FAIRE",
    };
  },
};
</script>

<style scoped>
@import "../assets/font/font-family.css";
.experienceTitleBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
}
.experienceTitle {
  font-size: 100px;
  font-weight: bold;
  color: #eeeeee;
  margin-top: 0;
  margin-left: 25px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
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
  .experienceTitleBloc {
    margin-bottom: 30px;
  }
  .experienceTitle {
    font-size: 50px;
    width: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>
