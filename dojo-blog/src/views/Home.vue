<template>
  <div class="home">

    <h2>Dojo blog</h2>
    <h3>{{ name }} {{ age }}</h3>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

// setup function will run before anything else
// inside setup can write any normal js or create a computed property
 setup() {
 console.log('setup')

 let name = 'mario'
 let age = 30

 // create function
 const handleClick = () => {
  console.log('clicked!')
 }

 return {name, age, handleClick}
},

}
</script>
