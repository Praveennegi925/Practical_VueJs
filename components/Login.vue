<template>
  <div >
  <div class="container">
  <div class="modal fade" id="myModal" role="dialog" >
    <div class="modal-dialog">
    

      <div class="modal-content" style="margin-top: 300px;">
        <div class="modal-header" style="padding:35px 50px;">
          <h4><span class="glyphicon glyphicon-lock" ></span> Login</h4>
          <button type="button" @click="closeModal()" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body" style="padding:40px 50px;">
          <form role="form">
            <div class="form-group">
              <label for="username"><span class="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter User name">
            </div>
            <div class="form-group">
              <label for="email"><span class="glyphicon glyphicon-eye-open"></span> Email</label>
              <input type="email" v-model="email" class="form-control" id="Email" placeholder="Enter Email">
            </div>
            <div class="form-group">
              <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
              <input type="password" v-model="password" class="form-control" id="psw" placeholder="Enter password">
            </div>
             <button @click.prevent="login()" id="submit-btn" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>
          </form>
        </div>  
      </div>
      
    </div>
  </div> 
</div>
 
  </div>
</template>


<script>

export default{
   data(){
      return{
        email:'',
        password:'',
        token:'',
        userData:'',
        id:''
      }
   },
    mounted:function (){
      let modal = document.getElementById("myModal");
      window.onclick = function (event) {
         if (event.target == modal) {
              modal.style.display = "none";
                $('#show-register').show();
      }
};

    },

  methods:{
    closeModal(){
       $('#myModal').modal('hide');
       $('#show-register').show();
    },
    login(){
       this.getUserToken().then(()=>{
              this.userData=this.$store.getters.getUserData;
              this.id=this.userData[this.token];
              let id=this.id;        
              this.$store.commit('setUserProfileData',[]);
           if(id){
                let url=`https://reqres.in/api/users/${id}`;
                this.$axios.get(url).then((response)=>{
                     this.$store.commit('setUserProfileData',response.data.data);
                     $('#myModal').modal('hide');
                     this.$router.push('/user-profile');  
                });
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
                });
           }
       
       });
     
    },
    getUserToken(){
      return new Promise((resolve) => {
           let request={};
         request['email']=this.email;
         request['password']=this.password;

         let url="https://reqres.in/api/login";
         this.$axios.post(url,request).then((response)=>{
                this.token=response.data.token;
                resolve();
         });
      })
       
    },
       getUserProfile(){
           this.$store.commit('setUserProfileData',[]);
            let id=this.userId;
            let url=`https://reqres.in/api/users/${id}`;
            this.$axios.get(url).then((response)=>{
                  this.$store.commit('setUserProfileData',response.data.data);
                  $('#myModal').modal('hide');
                  this.$router.push('/user-profile');   
            });
        }
  },

}
</script>

<style scoped>
 
  #submit-btn{
    background-color: #13274F;
  }

</style>

