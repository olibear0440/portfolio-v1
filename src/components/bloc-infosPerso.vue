<template>
  <div class="infosPerso">
    <div class="blocUn">
      <div class="mesInfos">
        <div class="mesInfosTitre">
          <h3>Infos Personnelles</h3>
        </div>
        <div class="mesInfosBloc">
          <div class="mesInfosList">
            <div class="list">
              <span class="titre">Nom</span> : <span class="nom">Benoit</span>
            </div>
            <div class="list">
              <span class="titre">Prénom</span> :
              <span class="prenom">Olivier</span>
            </div>
            <!--<div class="list">
              <span class="titre">Age</span> : <span class="age"> 44 ans</span>
            </div>-->

            <div class="list">
              <span class="titre">Nationalité</span> :
              <span class="nationalite"> Français</span>
            </div>
            <div class="list">
              <span class="titre">Freelance</span> :
              <span class="freelance"> Disponible</span>
            </div>
            <div class="list">
              <span class="titre">Adresse</span> :
              <span class="adresse"> 77700 Serris</span>
            </div>
            <div class="list">
              <span class="titre">Numéro</span> :
              <span class="numero"> +33623577682</span>
            </div>
            <div class="list">
              <span class="titre">Email</span> :
              <span class="email"> olivier.bent@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="blocFo reveal-qualites">
        <div class="blocSoftSkills">
          <div class="softSkillsTitre"><h3>Qualités</h3></div>
          <div class="softSkillsList">
            <div class="skills">
              <div class="skillsImg">
                <span class="fa fa-users" aria-hidden="true"></span>
              </div>
              <div class="skillsTitre"><h5>Travail en équipe</h5></div>
            </div>
            <div class="skills">
              <div class="skillsImg">
                <span class="fa fa-random" aria-hidden="true"></span>
              </div>
              <div class="skillsTitre"><h5>Adaptable</h5></div>
            </div>
            <div class="skills">
              <div class="skillsImg">
                <span class="fa fa-briefcase" aria-hidden="true"></span>
              </div>
              <div class="skillsTitre"><h5>Organisé</h5></div>
            </div>
            <div class="skills">
              <div class="skillsImg">
                <span class="fa fa-cogs" aria-hidden="true"></span>
              </div>
              <div class="skillsTitre"><h5>Créatif</h5></div>
            </div>
            <div class="skills">
              <div class="skillsImg">
                <span class="fa fa-compass" aria-hidden="true"></span>
              </div>
              <div class="skillsTitre"><h5>Autonome</h5></div>
            </div>
          </div>
        </div>
      </div>
      <div class="blocCapacite reveal-competences">
        <div class="capaciteTitre"><h3>Compétences</h3></div>
        <div class="blocCapaciteList">
          <div class="capaciteList">
            <p class="capacite">
              Developper l'interface d'un site web avec JavaScript et le
              framework VueJs
            </p>
            <p class="capacite">
              Implémenter des stockages de données sécurisées avec MySQL et
              MongoDB
            </p>
            <p class="capacite">
              Creer l'authentification d'un utilisateur de manière sécurisé
            </p>
            <p class="capacite">Interagir avec une API</p>
            <p class="capacite">Mettre en oeuvre des opérations CRUD</p>
            <p class="capacite">Utiliser le framework de test Jest</p>

            <p class="capacite">Réaliser un rapport d'analyse SEO</p>
            <p class="capacite">Implémenter une interface responsive</p>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="btnInfosPerso">
      <div class="btnBloc">
        <div class="btnCv">
          <a
            @click="downloadCV"
            href="../assets/img/CvOlivierBenoit_DevWeb.pdf"
            download="OlivierBenoitCv.pdf"
            class="btnCvLink"
          >
            <span class="fa fa-download fa-2x" aria-hidden="true"></span>
            <h3 class="btnCvTxt">TELECHARGER CV</h3>
          </a>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Infos-Perso",
  data: () => {
    return {};
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
          entry.target.classList.add("reveal-visible-qualites");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector(".reveal-qualites"));

    const handleIntersectC = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible-competences");
          observer.unobserve(entry.target);
        }
      });
    };
    const observerC = new IntersectionObserver(handleIntersectC, options);
    observerC.observe(document.querySelector(".reveal-competences"));
  },
  methods: {
    downloadCV() {
      const url = "../assets/img/CvOlivierBenoit_DevWeb.pdf"; // Replace with the path to your CV PDF file
      const link = document.createElement("a");
      link.href = url;
      link.download = "CvOlivierBenoit_DevWeb.pdf"; // Replace with the filename of your file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/font/font-family.css";
@import "../assets/styles/blocInfosPerso.css";
</style>
