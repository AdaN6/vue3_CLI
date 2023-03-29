<template>
    <h1>Job Title</h1>
    <p> The Job is {{ id }} </p>
</template>

<script>
export default {

    data() {
        return {
            id: this.$route.params.id
        }
    }

}
</script>

<style>

</style>