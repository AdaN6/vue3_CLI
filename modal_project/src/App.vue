<template>
 <h1> {{title}} </h1>
 <p> Welcome! </p>
 <!-- <input type="text" ref="name">
 <button @click="handleClick">Click me</button> -->
 <teleport to=".modals" v-if="showModal">
  <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a class="link" href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <h1>Hot Giveaway!</h1>
    <p>Grab your schawarma for half price!</p>
  </Modal> 
</teleport>

<div v-if="showModal2">
  <Modal @close="toggleModal2">
    <h1>Hot Giveaway 2!</h1>
    <p>Grab your falafel for half price!</p>
  </Modal>
</div>

<button @click="toggleModal"> Open Modal </button>
<br>
<button @click="toggleModal2"> Open Modal 2 </button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  components: { Modal },
  name: 'App',
  data() {
    return {
      title: ' Hey Ho World Vue App :)',
      showModal: false,
      showModal2: false,
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
      },
      toggleModal2() {
        this.showModal2= !this.showModal2
      }
  }


}
</script>

<style>
#app, .modals{
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
