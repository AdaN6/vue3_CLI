import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try{

            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })
            
            const res = await projectFirestore.collection('posts')
            .orderBy('createAt', 'desc')
            // .get()           
            // console.log(res.docs)
            .onSnapshot((snap) => {
                // console.log(snap)
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id}

                })
                posts.value = docs

            // posts.value = res.docs.map(doc => {
            //     // console.log(doc.data())

            //     // as the id is on the data not in the data and we needed the document id. ...doc.data() = grab all the properties into "doc.data()" object. and then add 2nd property to include the id
            //     return { ...doc.data(), id: doc.id}
            })
            
        } catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load}
}

export default getPosts