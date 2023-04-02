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
    <div v-if="posts2.length">
      <PostList2 v-if="showPosts" :postsVTwo="posts2" />
    </div>
    <div v-else> loading ... </div>
</div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import PostList2 from '../components/PostList2.vue'

export default {
  name: 'Home',
  components: {PostList, PostList2},
  setup() {  
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ]) 

    const posts2 = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        console.log(data)
        if (!data.ok) {
          throw Error('no data available')
        }
        posts2.value = await data.json()
      } catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    load()
  
  const showPosts = ref(true)

    return { posts, posts2, showPosts, error}
  },
}
</script>
