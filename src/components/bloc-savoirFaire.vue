<template>
  <div class="blocSkills">
    <div class="savoirTitre softSkillsTitre formationTitre">
      <h3>Techniques</h3>
    </div>

    <div class="blocSavoir">
      <!--mode mobile-->
      <div class="contain">
        <div class="containSkills">
          <div class="skillName">html</div>
          <div class="skillBar">
            <div class="skillPourcentage skillHtml" per="75%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">css</div>
          <div class="skillBar">
            <div class="skillPourcentage skillCss" per="75%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">javascript</div>
          <div class="skillBar">
            <div class="skillPourcentage skillJava" per="70%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">vueJs</div>
          <div class="skillBar">
            <div class="skillPourcentage skillVue" per="70%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">nodejs</div>
          <div class="skillBar">
            <div class="skillPourcentage skillNode" per="70%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">mysql</div>
          <div class="skillBar">
            <div class="skillPourcentage skillMysql" per="60%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">mongodb</div>
          <div class="skillBar">
            <div class="skillPourcentage skillMongo" per="60%"></div>
          </div>
        </div>

        <div class="containSkills">
          <div class="skillName">responsive</div>
          <div class="skillBar">
            <div class="skillPourcentage skillResp" per="75%"></div>
          </div>
        </div>
      </div>

      <!--mode desktop-->
      <div class="savoirUn">
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleHtml" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">75%</span>
          </div>
          <h4>html</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleCss" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">75%</span>
          </div>
          <h4>css</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle
                class="circleJavascript"
                cx="70px"
                cy="70px"
                r="70px"
              ></circle>
            </svg>
            <span class="pourcentage">70%</span>
          </div>
          <h4>JavaScript</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleVuejs" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">70%</span>
          </div>
          <h4>VueJs</h4>
        </div>
      </div>
      <div class="savoirDeux">
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleNode" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">70%</span>
          </div>
          <h4>NodeJs</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleSql" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">60%</span>
          </div>
          <h4>Mysql</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleMongo" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">60%</span>
          </div>
          <h4>MongoDB</h4>
        </div>
        <div class="blocItem">
          <div class="blocCircle">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle class="circleResp" cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <span class="pourcentage">75%</span>
          </div>
          <h4>Responsive</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Savoir-faire",
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/font/font-family.css";
@import "../assets/styles/blocSavoirFaire.css";
</style>
