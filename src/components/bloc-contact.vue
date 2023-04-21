<template>
  <div class="blocMonContact">
    <div class="monContactTxt">
      <div class="monContactTitre">
        <h3>Restons connectés</h3>
      </div>
      <div class="monTxt">
        <p class="msgTxt">
          Pour digitaliser une partie de votre travail.
        </p>
        <p class="msgTxt">
          Pour creer des sites internets à votre image.
        </p>
        <p class="msgTxt">
          Pour vous rendre visible en ligne.
        </p>
      </div>
      <div class="contactBlocList noHover">
        <div class="contactList">
          <div class="itemList">
            <div class="itemIco">
              <span class="fa fa-map-pin" aria-hidden="true"></span>
            </div>
            <div class="blocAdress">
              <span class="titreAdress">Adresse</span>
              <span class="adress">Cours de la garonne 77700 Serris</span>
            </div>
          </div>
          <div class="itemList">
            <div class="itemIco">
              <span class="fa fa-phone" aria-hidden="true"></span>
            </div>
            <div class="blocTel">
              <span class="titreTel">telephone</span>
              <span class="tel">+ 330623577682</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="monContactIco">
      <div class="mailContent">
        <div class="blocMail">
          <a class="contactLink" href="mailto:olivier.bent@gmail.com"
            ><span class="fa fa-envelope" aria-hidden="true"></span
          ></a>
        </div>
        <div class="monMail"><span>olivier.bent@gmail.com</span></div>
      </div>
      <div class="gitContent">
        <div class="blocGit">
          <a class="contactLink" href="https://github.com" target="_blank"
            ><span class="fa fa-github" aria-hidden="true"></span
          ></a>
        </div>
        <div class="monGit"><span>OlivierDev_O</span></div>
      </div>
      <div class="linkContent">
        <div class="blocLink">
          <a class="contactLink" href="https://www.linkedin.com/in/olivierbenoit-devweb/" target="_blank"
            ><span class="fa fa-linkedin" aria-hidden="true"></span
          ></a>
        </div>
        <div class="monLink"><span>Olivier Benoit</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bloc-contact",
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/font/font-family.css";
@import "../assets/styles/blocContact.css";
</style>
