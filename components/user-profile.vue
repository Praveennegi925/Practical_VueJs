<template>
  <div>
    <Header isLogin="true" />
    <div v-if="isUpdated" class="alert alert-success" role="alert" style="margin-top: 50px; background-color:#7FFF00 ;text-align:center">
       Profile is updated successfully at {{updatedAt}}.
    </div>
      <div v-if="isDeleted" class="alert alert-success" role="alert" style="margin-top: 50px; background-color:#e52c2f;text-align:center">
       Profile is Deleted successfully at {{updatedAt}}.
    </div>
    <div class="card" >
      <div class="cover-photo">
        <img :src="avatar" class="profile" />
      </div>
      <h3 class="profile-name">{{firstName}} {{lastName}}</h3>
      <p class="about">
        <b>Email</b> : {{email}}
        <br/><br />Front End Developer
      </p>
      <button  @click="updateAccount()" class="btn">Update Account</button>
      <button  @click="DeleteAccount()" class="delete-btn">Delete Account</button>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  data(){
    return{
       firstName:'',
       lastName:'',
       avatar:'',
       email:'',
       userProfileData:[],
       id:'',
       updatedAt:'',
       isUpdated:false,
       isDeleted:false

    }
    
  },
  beforeMount:function (){
        this.userProfileData=this.$store.getters.getUserProfileData;
        this.firstName=this.userProfileData.first_name;
        this.lastName=this.userProfileData.last_name;
        this.avatar=this.userProfileData.avatar;
        this.email=this.userProfileData.email;
        this.id=this.userProfileData.id;
    },
    methods:{
        updateAccount(){
           let id=this.id;
           let url=`https://reqres.in/api/users/${id}`;
           this.$axios.put(url).then((response)=>{
                this.updatedAt=response.data.updatedAt;
                this.isUpdated=true;
                setTimeout(() => {
                    this.isUpdated=false;
                }, 3000);
           })

        },
        deleteAccount(){
               let id=this.id;
           let url=`https://reqres.in/api/users/${id}`;
           this.$axios.delete(url).then((response)=>{
                this.isDeleted=true;
                setTimeout(() => {
                    this.isDeleted=false;
                    this.$router.push('/');
                }, 2000);
                
           })
        }
    }
};
</script>

<style scoped>
.card {
  background:#13274F;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  user-select: none;
  margin-top: 8%;
  margin-left: 800px;
  width: 400px;
  border: ridge 1.5px rgb(3, 18, 56);
  padding: 20px;
  padding-top: 30px;
  padding-right: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
}

.cover-photo {
  position: relative;
  background: url(https://i.imgur.com/jxyuizJ.jpeg);
  background-size: cover;
  height: 180px;
  border-radius: 5px 5px 0 0;
}

.profile {
  position: absolute;
  width: 120px;
  bottom: -60px;
  left: 15px;
  border-radius: 50%;
  border: 2px solid #222;
  background: #222;
  padding: 5px;
}

.profile-name {
  font-size: 20px;
  margin: 25px 0 0 120px;
  color: #fff;
}

.about {
  margin-top: 30px;
  line-height: 1.6;
  color: white;
}

.btn {
  margin: 30px 15px;
  background: #7ce3ff;
  padding: 10px 25px;
  border-radius: 3px;
  border: 1px solid #7ce3ff;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  color: #222;
  transition: 0.2s;
}
.delete-btn {
  margin: 30px 15px;
  background: #e52c2f;
  padding: 10px 25px;
  border-radius: 3px;
  border: 1px solid #ee251e;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  color: #222;
  transition: 0.2s;
}


.btn:last-of-type {
  background: transparent;
  border-color: #7ce3ff;
  color: #7ce3ff;
}

.btn:hover {
  background: #7ce3ff;
  color: #222;
}

.icons {
  width: 180px;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.icons i {
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
  transition: 0.2s;
}

.icons i:hover {
  color: #7ce3ff;
}
</style>