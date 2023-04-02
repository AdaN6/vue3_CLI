<template>
  <div class="post-list">
    <div v-for="post2 in postsVTwo" :key="post2.id">
      <SinglePost2 :post2="post2" />
    </div>
    
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost2 from './SinglePost2.vue'

export default {
  props: ['postsVTwo'],
  components: { SinglePost2 }, 
  setup(props) {
  
    // lifecycle hook in setup function
    onMounted(() => {
      console.log('component mounted')
    })
    onUnmounted(() => {
      console.log('component unmouted')
    })
    onUpdated(() => {
      console.log('component updated')
    })
  },
  // --> mounted that use outside of setup function
  // mounted() {
  //   console.log('mounted using options api')
  // }
}
</script>

<style>

</style>