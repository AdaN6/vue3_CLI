<template>
  <h1>Real Time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>
        {{ post.title }}
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

export default {
    setup() {
        const posts = ref ([])

        projectFirestore.collection('posts')
            .orderBy('createAt', 'desc')
            // .get() it only fetches it once, need to refresh to see the update
            // .onSnapshot() is to set up real time listener
            .onSnapshot((snap) => {
                // console.log(snap)
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id}
                })
                // console.log('documents:', docs)
                posts.value = docs
            })

            return { posts }
    }

}
</script>

<style>

</style>