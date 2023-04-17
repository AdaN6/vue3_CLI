<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts2.length" class="layout">
      <PostList2 :postsVTwo="postWithTag"/>
      <TagCloud :posts2="posts2" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import PostList2 from '@/components/PostList2.vue';
import getPosts from '@/composables/getPosts';
import TagCloud from '@/components/TagCloud.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue'

export default {
  components: { PostList2, Spinner, TagCloud},
  setup() {
    const route = useRoute()
    const { posts2, error, load} = getPosts()

    load()

    //  computed property

    const postWithTag = computed(() => {
      return posts2.value.filter((post) => post.tags.includes(route.params.tag))
    })

    return {posts2, error, postWithTag}
    }
  }
</script>

<style>

</style>