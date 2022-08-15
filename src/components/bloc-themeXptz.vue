<template>
  <div class="them">
    <h1 class="revealXptz">{{ sectionTitre }}</h1>
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
  mounted() {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("revealXptz-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".revealXptz"));
  },
};
</script>

<style scoped>
@import "../assets/font/font-family.css";
.them {
  background-color: white;
  width: 100%;
  height: auto;
}
h1 {
  font-size: 80px;
  font-weight: bold;
  color: #919191;
  margin-top: 0;
  margin-bottom: 0px;
  padding-right: 50px;
  padding-left: 20px;
  width: 100%;
  text-align: left;
}

.revealXptz {
  opacity: 0;
  transform: translateX(-200px);
}
.revealXptz-visible {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 1.5s;
}
@media screen and (min-width: 375px) and (max-width: 768px) {
  h1 {
    font-size: 50px;
    width: 100%;
    padding: 0;
    margin: 0 0 30px 0;
    text-align: center;
  }
  .revealXptz {
    transform: translateX(-50px);
  }
  .revealXptz-visible {
    transform: translateX(0);
    color: #cccccc;
  }
}
</style>
