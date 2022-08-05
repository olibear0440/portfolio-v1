<template>
  <div class="seventhBloc">
    <div class="skillsBloc">
      <div class="skillsBlocOne">
        <ul>
          <li v-for="item in items" :key="item.skill">{{ item.skill }}</li>
        </ul>
      </div>
      <div class="skillsBlocTwo">
        <ul>
          <li v-for="thing in things" :key="thing.techno">
            {{ thing.techno }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocExpertise",
  data: () => {
    return {
      items: [
        { skill: "Versionner avec GitHub" },
        { skill: "Rendre une interface responsive" },
        { skill: "Optimiser le référencement sur le web" },
      ],
      things: [
        { techno: "VueJs" },
        { techno: "JavaScript" },
        { techno: "Html Css" },
        { techno: "Bootstrap" },
        { techno: "NodeJs" },
        { techno: "Express" },
        { techno: "Sql" },
        { techno: "MongoDB" },
      ],
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "RobotoLight";
  src: url(../assets/font/Roboto-Light.ttf) format("truetype");
}

.skillsBloc {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
  width: 100%;
  height: 100vh;
  margin-top: 50px;
}
.skillsBlocOne,
.skillsBlocTwo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  width: auto;
  color: #3c4043;
  font-family: "RobotoLight";
}
.skillsBlocOne {
  margin-top: 100px;
}

ul {
  width: auto;
  list-style-type: none;
  margin: 0px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
}
li {
  padding: 15px 0px 15px 0px;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .skillsBloc {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 0;
    height: 570px;
  }
  .skillsBlocOne {
    font-size: 20px;
    height: auto;
    margin-top: 0;
    font-family: "Roboto";
  }
  .skillsBlocTwo {
    font-size: 20px;
    height: auto;
    margin-top: 50px;
    font-family: "Roboto";
  }
  ul {
    padding-left: 0;
    margin-right: 0;
  }
  .skillsBlocOne ul li {
    padding-bottom: 10px;
  }
  .skillsBlocTwo ul li {
    padding-top: 0px;
  }
}
</style>
