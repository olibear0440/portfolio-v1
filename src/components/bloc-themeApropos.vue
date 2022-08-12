<template>
  <div class="experienceTitleBloc">
    <p class="experienceTitle revealAp">{{ sectionTitre }}</p>
  </div>
</template>

<script>
export default {
  name: "BlocThemeApropos",
  data: () => {
    return {
      sectionTitre: "A PROPOS",
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
          entry.target.classList.add("revealAp-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".revealAp"));
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
}

.revealAp {
  opacity: 0;
  transform: translateX(-300px);
}
.revealAp-visible {
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
  .revealAp {
    transform: translateX(-50px);
  }
  .revealAp-visible {
    transform: translateX(0);
    color: #cccccc;
  }
}
</style>
