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
        shopifyUrl:'',
        productID:''
    }
  },
  mounted() {
     this.offeredPrice=this.$store.getters.getShopifyDetail.offered_price;
     this.shopifyUrl=this.$store.getters.getShopifyDetail.shop;
     this.productID=this.$store.getters.getShopifyDetail.productID
  },
  methods:{
    addToCart(){
        let request={
            shop:this.$store.getters.getShopifyDetail.shop,
            quantity:this.$store.getters.getShopifyDetail.quantity,
            price:this.offeredPrice,
            id:this.$store.getters.getShopifyDetail.productID
        };
        let route='/api/add-temp-cart';
        this.$axios.post(route,request,{
            headers:{
          "Access-Control-Allow-Origin":"*"}
         }).then((response)=>{
          if(response.data.token){
            // console.log(response.data)
            let token=response.data.token;
            let handle=response.data.handle;
               window.top.location=`https://${this.shopifyUrl}/products/${handle}?variant=${this.productID}&pvt_token=${token}`;
          }
             
        });
    }
  }
}
</script>
    