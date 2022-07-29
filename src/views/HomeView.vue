<template>
  <div class="home">
    <BlocName />
    <BlocAboutMe />
    <BlocReservia />
    <BlocOhMyFood />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BlocName from '@/components/bloc-name.vue'
import BlocAboutMe from '@/components/bloc-aboutMe.vue'
import BlocReservia from '@/components/bloc-reservia.vue'
import BlocOhMyFood from '@/components/bloc-ohMyFood.vue'

export default {
  name: 'HomeView',
  /*components: {
    HelloWorld
  }
  */
 components: {
    BlocName,
    BlocAboutMe,
    BlocReservia,
    BlocOhMyFood
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
