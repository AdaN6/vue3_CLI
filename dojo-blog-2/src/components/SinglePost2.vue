<template>
    <div class="post">
      <h3>{{ post2.title }}</h3>
      <p>{{ snippet }}</p>
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