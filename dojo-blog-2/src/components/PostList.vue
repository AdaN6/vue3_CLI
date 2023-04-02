<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
    
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost }, 
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