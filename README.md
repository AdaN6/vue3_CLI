# vue3_CLI

# Basic vue 
- Modal Proejct
- Web-form (options API)

# Basic router learning
- ninja-jobs

# Composition API projects (similar concept to react hook)
- dojo-blog (simple basic composition API)
- dojo-blog2 (with async code and composables)

* composition API doesnt have access to $router eg: this.$router.push({name: 'Home'}) or this.$router.go(-1) or this.$router.go(1) (in methods: {}). Hence, use router function inside the setup hook.