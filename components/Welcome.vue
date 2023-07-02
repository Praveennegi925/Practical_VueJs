<template>
  <div >

   <Header />
   <Register />
   <Footer />
 </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Register from '@/components/Registration.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{Header,Register,Footer},

  data(){
    return{
    
    }
  },
  methods: {

    getUrlParams(key){
           const params = new URLSearchParams(window.location.search);
           return params.get(key);
       },
   
  },
}
</script>