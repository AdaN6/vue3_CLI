<template>
    <header>
        <router-link :to="{name: 'Home'}">
            <h1>The Dojo Blog</h1>
        </router-link>
        <nav>
            <router-link :to="{name: 'Home'}">Home</router-link>
            <router-link :to="{ name: 'Create' }">Create Post</router-link>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #06808b;
    font-size: 48px;
  }
  header a {
    color: #585656;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>