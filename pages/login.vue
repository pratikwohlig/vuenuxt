<template>
    <div  class="container-fluid loginbody">
    <section class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form name="loginform" class="form-signin" v-on:submit.prevent="login" >
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" v-model="username"  aria-describedby="emailHelp" name="email" placeholder="Enter email"   required>
                <!-- <div *ngIf="f.submitted && email.invalid" class="invalid-feedback">
                  <div *ngIf="email.errors.required">Email is required</div>
                  <div *ngIf="email.errors.email">Email must be a valid email address</div>
                </div> -->
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" name="password" placeholder="Password"   required>
                <!-- <div *ngIf="f.submitted && upassword.invalid" class="invalid-feedback">
                  <div *ngIf="upassword.errors?.required">Password is required</div>
                  <div *ngIf="upassword.errors && upassword.errors.pattern"> 
                    Minimum eight characters, at least one uppercase letter, one lowercase letter and one number {{model.upassword}}
                  </div> 
                </div> -->
              </div>
              <button type="submit"   class="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  
  
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  async fetch ({ store, params }) {
    // let { data } = await axios.get('http://my-api/stars')
    // console.log(store.commit('getAuth'))
  },
  layout: 'loginlayout',
  head () {
    return {
      title: "Vue Framework - Login",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data() {
     return {
       username:'',
       password:''
     }
   },
   methods: {
    login(){
      // console.log(this.username);
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }, 1000)
    },
    
  } 
}
</script>

<style>
.loginbody {
  /*background: #9CECFB;
  background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);
  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);*/
  background: url('/assets/img/login-bg.jpg') 50% 50%/cover no-repeat;
  /* display: table-cell; */
  height: 100%;
  padding: 1.375rem 0;
  vertical-align: middle;
  width: 100%;
  min-height: 100vh;
}
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
</style>

