<template>

        <form @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input type="email"  v-model="email" required placeholder="Enter your email">

            <label>Password:</label>
            <input type="password" v-model="password" required >
            <div v-if="passwordError" class="error"> {{passwordError}} </div>

            <label>Role:</label>
            <select v-model="role">
                <option value="Web Developer">Web Developer</option>
                <option value="Web Designer">Web Designer</option>
            </select>

            <!-- keybords event: keyup -->
            <label>Skills:</label>
            <input type="text" v-model="tempSkill" @keyup="addSkill">
            <div v-for="skill in skills" :key="skill" class="pill">
                <span @click="deleteSkill(skill)">
                    {{ skill.replace(',', '') }}
                </span>
            </div>

            <!-- checkbox -->
            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label>Accept terms and conditions</label>
            </div>

            <!-- Submit button -->
            <div class="submit">
                <button>
                    Create an Account
                </button>
            </div>

            <!-- example of using multiple same v-model  -->

                <!-- <div>
                    <input type="checkbox" value="Mike" v-model="names">
                    <label>Mike</label>
                </div>
                <div>
                    <input type="checkbox" value="Eddie" v-model="names">
                    <label>Eddie</label>
                </div>
                <div>
                    <input type="checkbox" value="Tom" v-model="names">
                    <label>Tom</label>
                </div> -->

            <!--  -->

        </form>

        <p> email: {{email}} </p>
        <p> password: {{password}} </p>
        <p>role: {{role}} </p>
        <p> Terms accepted: {{terms}}</p>
        <!-- <p> Names checked: {{names}} </p> -->


</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'Web Developer',
            terms: false,
            // names: [],
            tempSkill: '',
            skills: [],
            passwordError: '',
        }
    },

    methods: {
        addSkill(e) {

            if(e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
        
                this.tempSkill = ''
            }
        },

    

        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            } )
        },

        handleSubmit() {
            //validate password
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'

            if(!this.passwordError) {
                console.log('email:', this.email)
                console.log('password:', this.password)
                console.log('role:', this.role)
                console.log('skills:', this.skills)
                console.log('terms accepted:', this.terms)
            }
        }
    }



}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    width: 100%;
    height: 46px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }

  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  
</style>