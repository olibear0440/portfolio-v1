<template>
  <div class="home">
    <BlocName />
    
    <BlocReservia />
    <BlocGroupomania />
    <BlocOhMyFood />
    <BlocOrinoco />
    <BlocExpertise />
    <BlocAboutMe />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BlocName from '@/components/bloc-name.vue'

import BlocReservia from '@/components/bloc-reservia.vue'
import BlocGroupomania from '@/components/bloc-groupomania.vue'
import BlocOhMyFood from '@/components/bloc-ohMyFood.vue'
import BlocOrinoco from '@/components/bloc-orinoco.vue'
import BlocExpertise from '@/components/bloc-expertise.vue'
import BlocAboutMe from '@/components/bloc-aboutMe.vue'

export default {
  name: 'HomeView',
  /*components: {
    HelloWorld
  }
  */
 components: {
    BlocName,
    BlocReservia,
    BlocGroupomania,
    BlocOhMyFood,
    BlocOrinoco,
    BlocExpertise,
    BlocAboutMe
  }
  
}
</script>
<style scoped>

.home{
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
}
@media screen and (min-width: 375px) and (max-width: 720px){
  
}

</style>
