<template>
  <div >
    
    <select style="height: 45px; width: 210px; margin-left: 2px;" @click="changelanguage($event)">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
    </select>
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
            <input type="number" class="form-control" id="price" name="price">
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
           return params.get(key)
       },

    negotiate(){
      
      var shop =this.getUrlParams('shop') ;
      var prod_id =this.getUrlParams('prodID') ;
      var quantity = this.getUrlParams('quantity') ;
      var customerId = this.getUrlParams('customerID') ;
      var currency=this.getUrlParams('currency');

      var payload={
        shop: shop,
        product: prod_id,
        offered_price:offered_price,
        customerId:customerId,
        currency:currency,
        quantity:quantity
      }
      

    }
  },
}
</script>