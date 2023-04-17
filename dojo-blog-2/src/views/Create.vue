<template>
  <div class="create">
    <form>
        <label>Title: </label>
        <input type="text" required v-model="title">
        <label>Content: </label>
        <textarea required v-model="body"></textarea>
        <label>Tags (hit enter to add a tag)</label>
        <input type="text" v-model="tag">
        <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {

    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        return { title, body, tag, tags}
    }

}
</script>

<style>
    form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
    }
    input, textarea {
        display: block;
        margin: 10px 0;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #eee;
    }
    textarea {
        height: 160px;
    }
    label {
        display: inline-block;
        margin-top: 30px;
        position: relative;
        font-size: 20px;
        color: white;
        margin-bottom: 10px;
    }
    label::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #08768b;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1.5deg);
    }
    button {
        display: block;
        margin-top: 30px;
        background: #034769;
        color: white;
        border: none;
        padding: 8px 16px;
        font-size: 18px;
        border-radius: 6px;
    }

    

</style>