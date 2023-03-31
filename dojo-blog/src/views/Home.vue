<template>
  <div class="home">

    <h2>Dojo blog</h2>
    <h3 ref="p">{{ name }} {{ age }}</h3>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from 'vue'

export default {
  name: 'Home',

// setup function will run before anything else
// inside setup can write any normal js or create a computed property
setup() {
  console.log('setup')
  // ref will be using differently in setup function as it cant use this.$ref as we always do in other life cycle hook like mounted or method... 
  //it has to import ref from vue when using ref

  const p = ref(null)

 let name = 'mario'
 let age = 30

 // create function
 const handleClick = () => {
  console.log(p, p.value)
  p.value.classList.add('test')
  p.value.textContent = 'Hello, hey'
 }

 return {name, age, handleClick, p}
},

}
</script>
