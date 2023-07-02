
<template>
  <div >
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div class="container">
    <a class="navbar-brand" @click="GoToHome()" href="javascript:void(0)">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" @click="GoToHome()" href="javascript:void(0)">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">About</a>
        </li>
         <li class="nav-item">
          <button type="button"  @click="openModal" class="btn btn-primary">Login</button>
        </li>
         <li class="nav-item">
          <button type="button" v-if="Login" @click="logout()" class="btn btn-danger">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

<login />
  </div>

</template>

<script>
import login from '@/components/Login.vue';

export default {
  components:{login},

  props:['isLogin'],

    data() {
      return {
      Login:this.isLogin
    };
  },

  methods:{
    openModal() {
          $('#myModal').modal('show');
          $('#show-register').hide();
    },
    GoToHome(){
      this.$router.push('/');
    },
    logout(){
      let req={};
      let url="https://reqres.in/api/logout";
      this.$axios.post(url,req).then((response)=>{
           this.$router.push('/');
      })
    }
    
  
  }
}
</script>


