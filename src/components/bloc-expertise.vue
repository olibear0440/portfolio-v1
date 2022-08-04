<template>
  <div class="seventhBloc">
    <div class="skillsBloc">
      <div class="skillsBlocOne">
        <ul>
          <li v-for="item in items" :key="item.skill"> {{item.skill}} </li>
        </ul>
      </div>
      <div class="skillsBlocTwo">
        <ul>
          <li v-for="thing in things" :key="thing.techno"> {{thing.techno}} </li>
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
        { skill: 'Versionner avec GitHub'},
        { skill: 'Implémenter une interface responsive'},
        { skill: 'Optimiser le référencement sur le web'}
      ],
      things: [
        { techno: 'VueJs'},
        { techno: 'JavaScript'},
        { techno: 'Html Css'},
        { techno: 'Bootstrap'},
        { techno: 'NodeJs'},
        { techno: 'Express'},
        { techno: 'Sql'},
        { techno: 'MongoDB'}
      ]
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url(../assets/font/Roboto-Regular.ttf) format("truetype");
}
.seventhBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  height: auto;
  width: 100%;
  margin-bottom: 200px;
}

.skillsBloc{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
  width: 100%;
  margin-top: 40px;
  
}
.skillsBlocOne, .skillsBlocTwo{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  width: auto;
  color: #dddddd;
  font-family: "Roboto";
}

ul{
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
}
li{
  padding: 5px 0px 5px 0px;
}



@media screen and (min-width: 375px) and (max-width: 768px) {
}
</style>
