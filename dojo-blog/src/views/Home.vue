<template>
  <div class="home">

    <h2>Dojo blog</h2>
    <!-- RT -->
    <!-- <h3 ref="p">{{ name }} {{ age }}</h3> -->
    <h3> My name is {{ name }} and I am {{ age }} years old</h3>
    <button @click="handleClick">Click</button>
    <input type="text" v-model="name">
    <button @click="age++">Increase Age</button>
    <!-- info2 -->
    <h2>info2</h2>
    <p>info2 name: {{ info2.name }} - info2 age: {{ info2.age }}</p>
    <button @click="updateInfo2">Update info2</button>
    <!-- reactive  -->
    <h2>Reactive</h2>
    <p>{{ r2.name }} - {{ r2.age }}</p>
    <button @click="updateR2">Increase Age</button>
    <!-- computed -->
    <h1>Computed</h1>
    <p>{{ title }}</p>
    <h2>Computed 2 - The oldie YouTubers</h2>
    <h2> list of youtubers: </h2>
    <div v-for="youTuber in youTubers" :key="youTuber">
        <p> {{ youTuber }} </p>
    </div>
    <h2>Search for particular YouTuber(s)</h2>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="youTuberFilter in matchingYouTubers" :key="youTuberFilter">
        <p> {{ youTuberFilter }} </p>
    </div>
    <!-- stop watch & watchEffect -->
    <button @click="stopClick">Stop Watching</button>
    </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',

// setup function will run before anything else
// inside setup can write any normal js or create a computed property
setup() {
  console.log('setup')
  // ref will be using differently in setup function as it cant use this.$ref as we always do in other life cycle hook like mounted or method... 
  //it has to import ref from vue when using ref

  // --> Template ref (RT)
  //   const p = ref(null)

  //  let name = 'mario'
  //  let age = 30

  // --> refs for reactivity (RR)
  const name = ref('mario')
  const age = ref(30)

  const info2 = ref({name: 'Fleur', age: 33})
  // --> reactive
  const r2 = reactive({name: 'Mike', age: 37})


 // create function
 const handleClick = () => {
  // ---> RT
  // console.log(p, p.value)
  // p.value.classList.add('test')
  // p.value.textContent = 'Hello, hey'
  // ----> RR
  name.value = 'luigi'
  age.value = 40
 }

// --> info 2
 const updateInfo2 = () => {
  info2.value.age = 34
 }

// --> Reactive
const updateR2 = () => {
  r2.age= r2.age + 1
 }

// --> computed
const title = computed(() => {
  return 'shaun'
})

const search = ref('')
const youTubers = ref(['Fleur de force', 'Thatcher Joe', 'Zoe Sugg', 'Tati', 'Jamie and Megan', 'Casper Lee'])

const matchingYouTubers = computed(() => {
  return youTubers.value.filter((name) => name.includes(search.value))
})

// ---> watch hook
const stopWatch = watch(search, () => {
  console.log('watch function run')
})

// watch effect always run initially 
const stopWatchEffect = watchEffect(() => {
  console.log('watchEffect function run', search.value)
})

const stopClick = () => {
  stopWatch()
  stopWatchEffect()
}


 return {name, age, handleClick, info2, updateInfo2, r2, updateR2, title, search, youTubers, matchingYouTubers, stopClick}
}

}
</script>
