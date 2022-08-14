<template>
  <div class="projetBloc">
    <div class="projetBlocTxt">
      <h1>{{ titre }}</h1>
      <h2 class="technoTwo">{{ techno }}</h2>
      <p class="projetPitch">{{ pitch }}</p>
      <img
        class="imgTwo"
        @click="openModal()"
        :src="imgTw"
        alt="photo groupomania desktop"
      />
    </div>

    <!--Modal agrandir l'image-->
    <div class="modal">
      <div class="modal-content">
        <img class="modal-imgTw" :src="imgTw" alt="photo reservia desktop" />
        <span
          @click="closeModal()"
          class="fa fa-times"
          aria-hidden="true"
        ></span>
      </div>
    </div>

    <!--bloc lié aubloc 2-->
    <div class="projetBlocOne">
      <img
        class="imgThree"
        @click="openModalBis()"
        :src="imgTh"
        alt="photo groupomania mobile"
      />
    </div>

    <!--Modal agrandir l'image bis-->
    <div class="modalBis">
      <div class="modal-contentBis">
        <img class="modal-imgTh" :src="imgTh" alt="photo groupomania mobile" />
        <span
          @click="closeModalBis()"
          class="fa fa-times"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import groupomania1 from "../assets/img/groupomania1.webp";
import groupomaniaMobile from "../assets/img/groupomaniaMobile.webp";
export default {
  name: "BlocGroupomania",
  data: () => {
    return {
      titre: "Groupomania",
      techno: "Full Stack - Sql node VueJs",
      pitch:
        "Réseaux social d'entreprise. Connectez vous, postez des messages et commentez les publications des autres employés!",
      imgTw: groupomania1,
      imgTh: groupomaniaMobile,
    };
  },
  methods: {
    openModal: function () {
      let modal = document.getElementsByClassName("modal");
      console.log(modal);
      modal[1].style.display = "block";
    },
    openModalBis: function () {
      let modalBis = document.getElementsByClassName("modalBis");
      console.log(modalBis);
      modalBis[1].style.display = "block";
    },
    closeModal: function () {
      let closeModal = document.getElementsByClassName("fa-times");
      let modal = document.getElementsByClassName("modal");
      console.log(closeModal);
      modal[1].style.display = "none";
    },
    closeModalBis: function () {
      let closeModalBis = document.getElementsByClassName("fa-times");
      let modalBis = document.getElementsByClassName("modalBis");
      console.log(closeModalBis);
      modalBis[1].style.display = "none";
    },
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
          entry.target.classList.add("technoTwo-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".technoTwo"));
  },
};
</script>

<style scoped>
@import "../assets/font/font-family.css";
.projetBloc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
}
.projetBlocTxt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
}
h1 {
  color: #3c4043;
  width: auto;
  height: auto;
  padding: 0 20px;
  font-size: 100px;
  margin-bottom: 0px;
  font-family: "RobotoMedium";
}
h2 {
  color: #3c4043;
  font-size: 60px;
  text-align: left;
  font-family: "Roboto";
  font-weight: lighter;
  margin: 20px 0px 10px 0px;
  padding: 10px 20px;
  width: auto;
}
.technoTwo {
  opacity: 0;
  transform: translateY(50px);
}
.technoTwo-visible {
  opacity: 1;
  transform: translateY(0);
  transition: 1s 0.5s;
}
.projetPitch {
  color: #3c4043;
  font-family: "RobotoLight";
  font-size: 40px;
  padding: 5px 20px;
  margin: 30px 0px 80px 0px;
  text-align: start;
  width: auto;
}
span {
  width: 50px;
}
.projetBlocOne {
  width: 50%;
}
.imgTwo {
  width: 720px;
  height: 594px;
  border: 3px solid #3c4043;
  border-radius: 20px;
  margin-left: 60px;
}

.modal,
.modalBis, .modal-content, .modal-contentBis {
  display: none;
}

.imgThree {
  width: 404px;
  border: 3px solid #3c4043;
  border-radius: 20px;
  height: 870px;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .projetBloc {
    flex-wrap: wrap;
    height: 600px;
    margin-bottom: 20px;
  }
  .projetBlocTxt {
    width: 100%;
    height: 410px;
    margin-bottom: 0px;
  }
  h1 {
    padding: 0 5px;
    font-size: 40px;
    margin-top: 0px;
  }
  h2 {
    font-size: 30px;
    padding: 0 5px;
    text-align: left;
    margin-top: 10px;
  }
  .projetPitch {
    font-size: 20px;
    padding: 0 5px;
    margin-bottom: 50px;
  }
  .imgTwo {
    width: 50%;
    height: auto;
    margin-left: 20px;
    border-radius: 10px;
    margin-top: 30px;
    border: solid 2px #3c4043;
  }
  .modal,
  .modalBis {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    display: block;
    width: 95%;
    height: auto;
    margin: 50% auto;
  }
  .modal-contentBis {
    display: block;
    width: 80%;
    height: auto;
    margin: 0px auto;
  }

  .modal-imgTw,
  .modal-imgTh {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .fa-times {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }

  .projetBlocOne {
    width: auto;
    position: relative;
    left: 230px;
    top: -100px;
    padding: 0;
  }
  .imgThree {
    width: 100px;
    height: auto;
    border: solid 2px #3c4043;
  }
  .technoTwo-visible {
  transition-duration: 1.5s;
}
}
</style>
