<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postWithTag"/>
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts';
import TagCloud from '@/components/TagCloud.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue'

export default {
  components: { PostList, Spinner, TagCloud},
  setup() {
    const route = useRoute()
    const { posts, error, load} = getPosts()

    load()

    //  computed property

    const postWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })

    return {posts, error, postWithTag}
    }
  }
</script>

<style>

  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

</style>