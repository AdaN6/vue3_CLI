<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="post" class="post">
        <h3>
            {{ post.title }}
        </h3>
        <p class="pre">
            {{ post.body  }}
        </p>
    </div>
    <div v-else> 
        <Spinner />
     </div>
</template>

<script>
import getPost from '../composables/getPost.js'; 
import Spinner from '@/components/Spinner.vue';
import {useRoute} from 'vue-router'

export default {
    props: ['id'],
    components: {Spinner},
    setup(props) {

        const route = useRoute()
        console.log(route)

        // const {post, error, load} = getPost(props.id)
       const {post, error, load} = getPost(route.params.id)

        load()

        return {post, error}
    }

}
</script>

<style>

    .tags a {
        margin-right: 10px;
    }

    .post {
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }

    .pre {
        white-space: pre-wrap;
    }

</style>