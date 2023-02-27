<template >
  
  <!-- eslint-disable -->
  <v-container class="pa-2 ma-0 pb-16">
    <v-row v-for="(type, typeName) in Menus">
      <p class="typeName px-14 pa-5">{{ typeName }}</p>
      <div class="d-flex flex-wrap">
        <v-col v-for="menu in type" cols="3" class="d-flex justify-center py-5">
          <v-card class="w-75" rounded="xl"
            @click ="overlay = !overlay"
          >
            <v-img
              cover
              aspect-ratio="1"
              src="https://cf.shopee.co.th/file/5160e1eb7f9b68c33e15e06780dac2ca"
            >
            </v-img>
            <v-card-item>
              <v-card-title style="font-weight: 400">
                {{ menu.title }}
              </v-card-title>
              <v-card-title class="d-flex justify-space-between">
                <span>{{ menu.price }}</span>
                <span>
                  <v-btn
                    icon="mdi-plus-thick"
                    size="x-small"
                    variant="flat"
                  ></v-btn>
                </span>
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
  // over lay รายละเอียด อาหาร
  // test เฉยๆ เดียวน่าจะย้ายไป MenuOverlay
  <v-overlay v-model="overlay"
      class="align-center justify-center pt-5"
      >
      <div class=" test-overlay"
          location="top center"
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
        <div class="detail-overlay">
            <div>
              ผัดกะเพราะ
            </div>
            <div>
              50
            </div>
        </div>

        </div>
        <div class="form">
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
         
        </div>
      </div>
  </v-overlay>
</template>

<style scoped>
  .typeName {
    font-size: 2.25rem;
    font-weight: 400;
  }
  .v-row {
    display: flex;
    flex-flow: column;
  }
  .test-overlay{
    border-radius: 20px;
    width: 600px;
    height: 800px;
    background-color: white;
  }
  .detail-overlay{
    padding-top: 2vh;
    display: flex;
    justify-content: space-between
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
</style>

<script lang="ts">
export default {
  data: () => ({
    Menus: {
      ข้าว: [
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
      ],
      เส้น: [
        {
          title: "ราดหน้า",
          price: "50",
        },
        {
          title: "ราดตัว",
          price: "50",
        },
        {
          title: "ราดแขน",
          price: "50",
        },
        {
          title: "ราดขา",
          price: "50",
        },
      ],
    },
    overlay: false,
  }),
  watch:{
    
  }
};
</script>