<template>
  <!--  overlay menu component      เป็น over lay ใน ร้านค้า -->
    <div class=" test-overlay overflow-y-auto"
    
          location="top center"
          v-scroll.self="onScroll"
      >
        <div class="title">
          <div>ตะกร้า</div>
        </div>
        <div class="show-order">
          <div>
            พี่ช้าง
          </div>
           <div class="detail-order" v-for="i in cart">
            <v-btn>+</v-btn>
            <v-btn>1</v-btn>
            <v-btn>-</v-btn>
            {{ i.name }}
           </div>
        </div>
        <div class="bottom">
          <div class="top-inbottom">
            <div>รวมทั้งหมด</div>
            <div>50</div>
          </div>
            <div class="button">
              <div class="button-submit" >
                <v-btn
                  width="320px"
                  color="success"
                >สั้งซื้อสินค้า</v-btn>
            </div>
            </div>
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
  .title{
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom{
    position: relative;
    margin-top: 600px;
  }
  .top-inbottom{
    display: flex;
    justify-content: space-between;
  }
  .button-submit{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
</style>
<script lang="ts" >
  export default {
    data: () => ({
      scrollInvoked: 0,
      cart: [],
      order: []
    }),
    methods: {
      updateCart(menuFromChid :object){
          this.Carts.push(menuFromChid)
          console.log(this.Carts)
          // เก็บข้อมูลสิครับ
          localStorage.setItem("Cart",JSON.stringify(this.Carts))
      }
    },
    created() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
        console.log(this.cart);
      },
    // หลังจากนั้นก็อัพเดท ตลอด
    mounted() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
    }
  }
</script>