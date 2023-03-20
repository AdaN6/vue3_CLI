<template>
 <h1> {{title}} </h1>
 <p> Welcome! </p>
 <!-- <input type="text" ref="name">
 <button @click="handleClick">Click me</button> -->
 <div v-if="showModal">
  <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <h1>Hot Giveaway!</h1>
    <p>Grab your schawarma for half price!</p>

  </Modal> 
</div>
<button @click="toggleModal"> Open Modal </button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  components: { Modal },
  name: 'App',
  data() {
    return {
      title: ' Hey Ho World Vue App :)',
      header: 'Sign up for more NEWS!',
      text: 'Grab a kimbab for free!',
      showModal: false
    }
  },
  methods: {
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$refs.name.classList.add('active')
    //   this.$refs.name.focus()
    // },
      toggleModal() {
        this.showModal = !this.showModal
      }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
