<template>
  <div>
    <h1 class="revealAp">{{ sectionTitre }}</h1>
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
    const ratio = 0.1;
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

h1 {
  font-size: 100px;
  font-weight: bold;
  color: #919191;
  margin-top: 0;
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;
  text-align: left;
}

.revealAp {
  opacity: 0;
  transform: translateX(-200px);
}
.revealAp-visible {
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
  .revealAp {
    transform: translateX(-50px);
  }
  .revealAp-visible {
    transform: translateX(0);
    color: #cccccc;
  }
}
</style>
