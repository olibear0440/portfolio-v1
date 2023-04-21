<template>
  <nav>
    <ul>
      <li>
        <router-link to="/"
          ><span class="fa fa-home fa-2x active" aria-hidden="true"></span>
          <h3 class="menu">{{ premierMenu }}</h3>
        </router-link>
      </li>
      <li>
        <router-link to="/monPortfolio"
          ><span class="fa fa-suitcase fa-2x" aria-hidden="true"></span>
          <h3 class="menu">{{ troisiemeMenu }}</h3>
        </router-link>
      </li>
      <li>
        <router-link to="/aPropos"
          ><span class="fa fa-user fa-2x" aria-hidden="true"></span>
          <h3 class="menu">{{ deuxiemeMenu }}</h3>
        </router-link>
      </li>

      <li>
        <router-link to="/contact"
          ><span class="fa fa-envelope-open fa-2x" aria-hidden="true"></span>
          <h3 class="menu">{{ quatrimeMenu }}</h3>
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Nav-page",
  data: () => {
    return {
      premierMenu: "ACCUEIL",
      deuxiemeMenu: "A PROPOS",
      troisiemeMenu: "PORTFOLIO",
      quatrimeMenu: "CONTACT",
    };
  },
};
</script>

<style>
@import "../assets/styles/blocNav.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
</style>
