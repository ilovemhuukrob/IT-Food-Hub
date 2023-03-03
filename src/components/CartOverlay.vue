<template>
  <!--  overlay menu component      เป็น over lay ใน ร้านค้า -->
    <div class=" test-overlay overflow-y-auto"
    
          location="top center"
          v-scroll.self="onScroll"
      >
      <div class="food-inside" v-for="n in cart">
        <div class="name">
          พี่ช้าง
      </div>
      <div class="detail">
        <div>
          <v-btn>+</v-btn>
          <v-btn>1</v-btn>
          <v-btn>+</v-btn>
          {{ n.name }}
        </div>
      </div>
      </div>
      <div>
        <v-btn
        width="600px"
        @click="AddtoOrder"
        >สั้งซื้ออาหาร</v-btn>
      </div>
      </div>
</template>
<style scoped>
.test-overlay{
    border-radius: 20px;
    width: 600px;
    height: 800px;
    background-color: white;
  }
  
</style>
<script lang="js" >
  export default {
    data: () => ({
      scrollInvoked: 0,
      cart :[]
    }),
    methods: {
      onScroll () {
        this.scrollInvoked++
      },
      AddtoOrder(){
        localStorage.setItem("Order",JSON.stringify(this.cart))
      }
    },
    created() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
        console.log(this.cart);
    },
    // หลังจากนั้นก็อัพเดท ตลอด
    mounted() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
    },
  }
</script>