<template>
  <div class="formStyle">
    <div  id="langButton">
      <select  @click="changelanguage($event)">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
    </select>
    </div>
 
  <div>
      <div class="container mt-3">
        <form >
          <div class="mb-3">
              <label for="fname">{{$t('message.firstName')}}</label>
              <input type="text" class="form-control" id="fname" name="fname">
            </div>
            <div class="mb-3">
              <label for="lname">{{$t('message.lastName')}}</label>
              <input type="text" class="form-control" id="lname" name="lname">
            </div>
            <div class="mb-3 mt-3">
              <label for="email">{{$t('message.Email')}}</label>
              <input type="email" class="form-control" id="email" name="email">
            </div>
            <div class="mb-3 mt-3">
              <label for="price">{{$t('message.Price')}}</label>
              <input type="number" v-model="Price" class="form-control" id="price" name="price">
            </div>
            <button type="submit" class="btn btn-primary" @click="negotiate()">{{$t('message.Negotiate')}}</button>
      </form>
   </div>
    </div>
 
 </div>


</template>

<script>
export default {
  data(){
    return{
      Price:''
    }
  },
  mounted(){
  
  },
  methods: {
    changelanguage(event){
      let value=event.target.value;
      this.$i18n._vm.locale = value;
    },
    getUrlParams(key){
           const params = new URLSearchParams(window.location.search)
           return params.get(key);
       },

    negotiate(){
  
      var shop =this.getUrlParams('shop') ;
      var prod_id =this.getUrlParams('prodID') ;
      var quantity = this.getUrlParams('quantity') ;
      var customerId = this.getUrlParams('customerID') ;
      var currency=this.getUrlParams('currency');

      var payload={
        shop: shop,
        productID: prod_id,
        offered_price:this.Price,
        customerId:customerId,
        currency:currency,
        quantity:quantity
      }
      this.$store.commit("setShopifyDetail",payload);
      let data = {
              offer_status: 'accepted'
            };
       if(data.offer_status == 'accepted'){
              this.$router.push('/offerAccept');
            }
  
         let route ="/api/negotiate";
         this.$axios.post(route,payload).then((response)=>{
          console.log('hey')
      })

    }
  },
}
</script>