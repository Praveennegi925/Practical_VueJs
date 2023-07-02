<template>
  <div class="container" id="show-register" style="display:block">
    <form @submit.prevent="Register()">
      <div class="register-heading">
        <h2>Registration Form</h2>
      </div>

      <div class="form-group">
        <label for="username">User Name *</label>
        <input type="text" v-model="userName"  class="form-control" id="exampleInputusername" name="username" />
        <span class="error" v-if="errorUserName">enter the required field</span>
      </div>

      <div class="form-group">
        <label for="phoneno">Phone Number</label>
        <input type="number" v-model="phoneNumber" class="form-control" id="exampleInputphoneno" name="phoneno" />
         <span  class="error" v-if="errorPhoneNumber">enter the required field</span>
      </div>
      <div class="form-group">
        <label for="Email">Email address *</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          name="email"
        />
         <span class="error" v-if="errorEmail">enter the required field</span>
      </div>
      <div class="form-group">
        <label for="Password">Password *</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword" name="password" />
         <span class="error" v-if="errorPassword">enter the required field</span>
      </div>
      <div class="form-group">
        <label for="ConfirmPassword">Confirm Password *</label>
        <input
          type="password"
          v-model="confirmPassword"
          class="form-control"
          id="exampleInputConfirmPassword"
          name="ConfirmPassword"
        />
         <span  class="error" v-if="errorConfirmPassword">enter the required field</span>
         <span class="error" v-if="errorPassMatch">Password entered are not matched</span>
          <span class="error" v-if="error">{{errorText}}</span>
      </div>
      <button type="submit" class="btn btn-primary" name="create">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
        userName:'',
        email:'',
        phoneNumber:'',
        password:'',
        confirmPassword:'',
        errorUserName:false,
        errorPhoneNumber:false,
        errorEmail:false,
        errorPassword:false,
        errorConfirmPassword:false,
        errorPassMatch:false,
        errorText:'',
        error:false,
        userId:''
        }
    },
    methods:{
        Register(){
          this.verifyFields();
          if(this.errorUserName || this.errorEmail || this.errorPhoneNumber || this.errorPassword || this.errorConfirmPassword || this.errorPassMatch){
            return;
          }else{
            let request={};
            request['email']=this.email;
            request['password']=this.password;
            let url="https://reqres.in/api/register";
            this.$axios.post(url,request).then((response)=>{
                  let payload={};
                  payload[response.data.token]=response.data.id;
                  this.userId=response.data.id;
                  this.$store.commit('setUserData',payload);
                  this.getUserProfile();
            }).catch((error)=>{
                this.error=true;
                this.errorText=error;
            });
          }
        },

        verifyFields(){
            this.errorUserName=false;
            this.errorPhoneNumber=false;
            this.errorEmail=false;
            this.errorPassword=false;
            this.errorConfirmPassword=false;
            this.error=false;

            if(!this.userName){
                this.errorUserName=true;
            }
              if(this.email==""){
                this.errorEmail=true;
            }
              if(this.phoneNumber==""){
                this.errorPhoneNumber=true;
            }
              if(this.password==""){
                this.errorPassword=true;
            }
              if(this.confirmPassword==""){
                this.errorConfirmPassword=true;
            } 
            if(this.password!=this.confirmPassword){
                this.errorPassMatch=true;
            }
        },

        getUserProfile(){
           this.$store.commit('setUserProfileData',[]);
            let id=this.userId;
            let url=`https://reqres.in/api/users/${id}`;
            this.$axios.get(url).then((response)=>{
                  this.$store.commit('setUserProfileData',response.data.data);
                  this.$router.push('/user-profile');   
            });
        }
    }
};
</script>

<style scoped>
    .container form{
        margin-top: 20%;
        margin-left: 28%;
        width: 400px;
        border: ridge 1.5px white;
        padding: 20px;
        border-radius: 30px;
        color: white;
        background-color:#13274F;
        padding-top: 30px;
        padding-right: 25px;
        padding-bottom: 25px;
        padding-left: 20px;
    }
</style>