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
            label="หมู"
            color="success"
            value="success"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
            label="หมู"
            color="success"
            value="success"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
            label="หมู"
            color="success"
            value="success"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div >
          <div class="check-box">
            <v-checkbox
            label="หมู"
            color="success"
            value="success"
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
            label="หมู"
            color="success"
            value="success"
            hide-details
            ></v-checkbox>
            <div>
              0
            </div>
          </div>
          <div class="check-box">
            <v-checkbox
            label="หมู"
            color="success"
            value="success"
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
        <div class="button-submit">
            <v-btn>+</v-btn>
            <v-btn>1</v-btn>
            <v-btn>-</v-btn>
            <v-btn
              width="320px"
              color="success"
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
    }),
    methods: {
      onScroll () {
        this.scrollInvoked++
      },
    },
  }
</script>