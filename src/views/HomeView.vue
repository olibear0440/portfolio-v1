<template>
  <div class="home">
    <BlocName />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BlocName from '@/components/bloc-name.vue'

export default {
  name: 'HomeView',
  /*components: {
    HelloWorld
  }
  */
 components: {
    BlocName
  }
  
}
</script>
