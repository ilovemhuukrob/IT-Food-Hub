<template>
    <div class=" test-overlay overflow-y-auto"
    
          location="top center"
          v-scroll.self="onScroll"
      >
        <div class="top">
        <div class="top-img">
            <v-img
            cover
            aspect-ratio="1"
            class="img"
            src="https://cf.shopee.co.th/file/5160e1eb7f9b68c33e15e06780dac2ca"
          >
          </v-img>
        </div>
        <div class="detail-overlay "
           
        >
            <div class="name-menu">
              ผัดกะเพราะ
            </div>
            <div class="price">
              50
            </div>
        </div>
        </div>
        <div class="form">
          <div class="option-title">
            เนื้อสัตว์
          </div>
          <div class="check-box">
            <v-checkbox
            v-model="หมู"
            label="หมู"
            color="success"
            value="หมู"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
            v-model="ไก่"
            label="ไก่"
            color="success"
            value="ไก่"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
            v-model="กุ้ง"
            label="กุ้ง"
            color="success"
            value="กุ้ง"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div >
          <div class="check-box">
            <v-checkbox
            v-model="หมึก"
            label="หมึก"
            color="success"
            value="หมึก"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="option-title-two">
            เครื่องเคียง
          </div>
          <div class="check-box">
            <v-checkbox
            v-model="ไข่ดาว"
            label="ไข่ดาว"
            color="success"
            value="ไข่ดาว"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
              v-model="ไข่เจียว"
            label="ไข่เจียว"
            color="success"
            value="ไข่เจียว"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
        </div>
        <div class="in-put-form">
          หมายเหตุถึงร้านอาหาร
          <v-text-field
            label="บอกกูหน่อย"
            required
            mt-03
        ></v-text-field>
        </div>
        <div class="button-submit" >
            <v-btn>+</v-btn>
            <v-btn>1</v-btn>
            <v-btn>-</v-btn>
            <v-btn
              width="320px"
              color="success"
              @click = "AddTocart()"
            >เพิ่มสิ้นค้าไปยังตะกร้า</v-btn>
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
  .detail-overlay{
    width: 100%;
    padding-top: 3vh;
    display: flex;
    justify-content: space-between;
  }
  .top{
    width: 100%;
    height: 200px;
    display: flex;
  }
  .top-img{
    padding-top: 2vh;
    padding-left: 4vh;
    width: 250px;
  }
  .top .img{
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
  .check-box{
    margin-left: 2vw;
    margin-right: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  .name-menu{
    padding-left: 2vw;
  }
  .price{
    padding-right: 2vw;
  }
  .form{
    margin-top: 2vw;
  }
  .option-title{
    margin-left: 2vw;
  }
  .option-title-two{
    margin-top: 2vw;
    margin-left: 2vw;
  }
  .in-put-form{
    margin: 4vh;
  }
  .button-submit{
    margin-left: 3vh;
    margin-right: 3vh;
    margin-bottom: 5vh;
  }
</style>
<script lang="ts" >
  export default {
    data: () => ({
      scrollInvoked: 0,
      หมู : "",
      ไก่ : "",
      กุ้ง : "",
      หมึก : "",
      ไข่ดาว: "",
      ไข่เจียว : "",
      menu :{},
      setOfmenu : [{}]
    }),
    methods: {
      onScroll () {
        this.scrollInvoked++
      },
      AddTocart(){
          let  Menu  = {
            "name" : "กะเพรา",
            "เนื้อสัตว์" : this.หมู + this.ไก่ + this.หมึก + this.กุ้ง,
            "เครื่องเคียง"  : this.ไข่เจียว + this.ไข่ดาว
          }
          this.menu = Menu
          // ส่ง ข้อมูล meu ที่ส้ั้งแล้วไป ยัง parent component คือ MenuRestaurant.vue
          this.$emit('Menu-method', this.menu)
      }
    },
  }
</script>