<template>
    <div>
        <div class="offerAccept">
        <h1>Offer Accept</h1>
    </div>
    <div class="offerAccept1">
        <h2>Your Accepted price :- <b>Rs.{{offeredPrice}} </b></h2>
    </div>
    <div class="offerAccept1">
        <button type="button" class="btn btn-warning" @click="addToCart()">Add to Cart</button>
    </div>
   
    </div>
 
    
</template>
<script>
export default{
  data(){
    return{
        offeredPrice:'',
        shopifyUrl:''
    }
  },
  mounted() {
     this.offeredPrice=this.$store.getters.getShopifyDetail.offered_price;
     this.shopifyUrl=this.$store.getters.getShopifyDetail.shop;
  },
  methods:{
    addToCart(){
        let request={
            id:this.$store.getters.getShopifyDetail.productID,
            quantity:this.$store.getters.getShopifyDetail.quantity,
            price:this.offeredPrice,
            properties: {
            'Discounted Price': this.offeredPrice
            }
        };
        let route=`https://${this.shopifyUrl}/cart/add.js`;
        this.$axios.post(route,request,{
            headers:{
          "Access-Control-Allow-Origin":"*"}
         }).then((response)=>{
          console.log(response.data);
        });
    }
  }
}
</script>
    