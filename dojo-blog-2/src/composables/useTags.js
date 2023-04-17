// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a a single array of tags based on the set

import { ref } from "vue";

const useTags = (posts2) => {

    const tags = ref([])
    const tagSet = new Set()

    posts2.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag))
    })

    // [...] spread syntax in array take all the element and spread them out
    tags.value = [...tagSet]

    return { tags }
}

export default useTags