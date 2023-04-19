# vue3_CLI

# Basic vue 
- Modal Proejct
- Web-form (options API)

# Basic router learning
- ninja-jobs

# Composition API projects (similar concept to react hook)
- dojo-blog (simple basic composition API)
- dojo-blog2 (with async code and composables)
    - using local json data
    - using json server to show json data
    - able to create new post
    - redirect to homepage after creating new post
    - newly created post will be saved in db base and will be automatically synced between local data and db base
    - created loading spinner
    - filter posts by click hashtag

* composition API doesnt have access to $router eg: this.$router.push({name: 'Home'}) or this.$router.go(-1) or this.$router.go(1) (in methods: {}). Hence, **useRouter** function inside the setup hook.

# Firebase projects 
- dojo-blog_firebase (with composition API)
    - firebase config
    - fetching datas from firebase
    - showing posts with the descending order of timestamp
    - live data automatic update on the homepage