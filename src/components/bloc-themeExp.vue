<template>
  <div class="experienceTitleBloc">
    <p class="experienceTitle revealExp">{{ sectionTitre }}</p>
  </div>
</template>

<script>
export default {
  name: "BlocThemeExp",
  data: () => {
    return {
      sectionTitre: "EXPERIENCE",
    };
  },
  mounted() {
    const ratio = 0.3;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("revealExp-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".revealExp"));
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
  margin-bottom: 0px;
  padding-right: 50px;
  padding-left: 50px;
  width: auto;
}

.revealExp {
  opacity: 0;
  transform: translateX(-300px);
}
.revealExp-visible {
  opacity: 1;
  transform: translateX(0);
  transition: 2s;
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
  .revealExp {
    transform: translateX(-50px);
  }
  .revealExp-visible {
    transform: translateX(0);
    color: #cccccc;
  }
}
</style>
