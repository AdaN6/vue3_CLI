<template>
  <div class="home">
    <h1>home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
    <hr/>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-if="posts2.length" class="layout">
      <PostList2 v-if="showPosts" :postsVTwo="posts2" />
      <TagCloud :posts2="posts2"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
</div>
</template>

<script>
import PostList from '../components/PostList.vue'
import PostList2 from '../components/PostList2.vue'
import getPosts from '../composables/getPosts'
import Spinner from '@/components/Spinner.vue'
import TagCloud from '@/components/TagCloud.vue'


import { ref } from 'vue'


export default {
  name: 'Home',
  components: {PostList, PostList2, Spinner, TagCloud},
  setup() {  
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ]) 

    const showPosts = ref(true)
    
   const {posts2, error, load} = getPosts()

   load()
  
    return { posts, posts2, showPosts, error}
  },
}
</script>

<style >
 .home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

 }

 .layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px
 }


</style>