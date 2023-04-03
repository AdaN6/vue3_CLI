<template>
    <div class="post">
      <router-link :to="{ name: 'Details', params: {id: post2.id}}">
        <h3>{{ post2.title }}</h3>
      </router-link>
      <p>{{ snippet }}</p>
      <span v-for="tag in post2.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  
  export default {
    props: ['post2'],
    setup(props) {
      const snippet = computed(() => {
        return props.post2.body.substring(0, 100) + '...'
      })
  
      return { snippet }
    }
  }
  </script>
  
  <style>
  
  </style>