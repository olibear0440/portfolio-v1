<template>
  <div class="monPortfolio">
    <TitrePortfolio />
    <div class="monPfolio">
      <div class="pfolio-items1">
        <div class="restaurant pfolio-item reveal">
          <router-link class="pfolio-infos" to="/restaurantItalizza">
            <h2 class="title">Restaurant</h2>
            <p class="description">Site web et commande à emporter</p>
          </router-link>
        </div>
        <div class="eCommerce pfolio-item reveal1">
          <router-link class="pfolio-infos" to="/ecommerce">
            <h2 class="title">E-Commerce</h2>
            <p class="description">Site web d'achat en ligne</p>
          </router-link>
        </div>
      </div>

      <div class="pfolio-items2">
        <div class="rSocial pfolio-item reveal2">
          <router-link class="pfolio-infos" to="/reseauSocialDev_o">
            <h2 class="title">Reseaux Social</h2>
            <p class="description">
              Site web de communication et partage de contenus
            </p>
          </router-link>
        </div>
        <div class="siteStatic pfolio-item reveal3">
          <router-link class="pfolio-infos" to="/vitrine">
            <h2 class="title">Vitrine</h2>
            <p class="description">Site web personnel</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import TitrePortfolio from "@/components/titre-portfolio.vue";

export default {
  name: "Mon-portfolio",
  components: {
    TitrePortfolio,
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
          entry.target.classList.add("reveal-visible-restaurant");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".reveal"));

    const handleIntersectC = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible-commerce");
          observer.unobserve(entry.target);
        }
      });
    };
    const observerC = new IntersectionObserver(handleIntersectC, options);
    observerC.observe(document.querySelector(".reveal1"));

    const handleIntersectS = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible-social");
          observer.unobserve(entry.target);
        }
      });
    };
    const observerS = new IntersectionObserver(handleIntersectS, options);
    observerS.observe(document.querySelector(".reveal2"));

    const handleIntersectV = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible-vitrine");
          observer.unobserve(entry.target);
        }
      });
    };
    const observerV = new IntersectionObserver(handleIntersectV, options);
    observerV.observe(document.querySelector(".reveal3"));
  },
};
</script>

<style scoped>
@import "../assets/font/font-family.css";
.monPortfolio {
  width: 70%;
  margin: 0 auto;
}

.monPfolio {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.pfolio-items2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  margin-left: 200px;
}
.pfolio-items1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 200px;
  margin-top: 50px;
}
.pfolio-item {
  width: 450px;
  height: 30vh;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
 
}
.restaurant{
  animation: cartAppear 0.8s ease-in-out forwards;
}
.eCommerce{
  animation: cartAppear 0.8s 0.4s ease-in-out forwards;
}
.rSocial{
  animation: cartAppear 0.8s 0.8s ease-in-out forwards;
}
.siteStatic{
  animation: cartAppear 0.8s 1.2s ease-in-out forwards;
}

@keyframes cartAppear {
  from { opacity: 0; scale: 0; }
  to { opacity: 1; scale: 1}
}

.pfolio-item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.eCommerce,
.siteStatic {
  margin-left: 50px;
}
.restaurant {
  background-image: url("../assets/img/foodPic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.eCommerce {
  background-image: url("../assets/img/oriPic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}
.rSocial {
  background-image: url("../assets/img/accueilPic.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.siteStatic {
  background-image: url("../assets/img/resPic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.pfolio-infos {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 15px;
}
.rSocial > .pfolio-infos {
  background-color: rgb(0, 0, 0, 0.6);
}

.title {
  width: auto;
  height: 10%;
  font-size: 53px;
  font-family: "RobotoMedium";
  color: white;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}

.description {
  height: 20%;
  width: auto;
  font-size: 1.8rem;
  color: orange;
  padding: 0 45px;
  text-align: center;
}
@media screen and (min-width: 375px) and (max-width: 1600px) {
  /***********************************************************animation style************************ */
  .reveal,
  .reveal1,
  .reveal2,
  .reveal3 {
    opacity: 0;
    transform: scale(0);
  }
  .reveal-visible-restaurant {
    opacity: 1;
    transform: scale(1);
    transition-duration: 1.5s;
  }
  .reveal-visible-commerce {
    opacity: 1;
    transform: scale(1);
    transition-duration: 1.5s;
    transition-delay: 0.5;
  }
  .reveal-visible-social {
    opacity: 1;
    transform: scale(1);
    transition-duration: 1.5s;
    transition-delay: 0.8s;
  }
  .reveal-visible-vitrine {
    opacity: 1;
    transform: scale(1);
    transition-duration: 1.5s;
    transition-delay: 1s;
  }

  /****************************************************************************************** */
  .monPortfolio {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .monPfolio {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  .pfolio-items1,
  .pfolio-items2 {
    flex-direction: column;
    margin: 0;
  }

  .pfolio-item {
    width: 95%;
    height: 270px;
  }
  .eCommerce,
  .restaurant,
  .siteStatic,
  .rSocial {
    margin: 0;
    margin-bottom: 10px;
  }

  .title {
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .description {
    width: 95%;
    font-size: 1.3rem;
    padding: 0;
  }
}
</style>
