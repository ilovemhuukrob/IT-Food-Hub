<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="Restaurant in 10"
                class="d-flex justify-center py-5"
                cols="3"
            >   
               <!-- router to /test -->
                <router-link to="/inRestaurant">
                    <v-card class="sheet">
                    
                        <v-img
                            class="restaurant-img"
                            cover
                            aspect-ratio="1"
                            src="https://cf.shopee.co.th/file/5160e1eb7f9b68c33e15e06780dac2ca"
                            >
                        </v-img>
                        <div class="restaurant-info">
                            <div class="title">
                                <div>
                                    พี่ช้าง
                                </div>
                                <div class="status">
                                    เปิด
                                </div>
                            </div>
                            <div class="detail">
                                ข้าวแกง อาหารตามสั้ง
                            </div>
                        </div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
     export default {
        data: () => ({
            Restaurants: [
                //change icon directory
                {
                    "name": "พี่ช้าง",
                    "status" : "เปิด",

                },
                {
                    "name": "พี่ช้าง",
                    "status" : "เปิด",

                },
                {
                    "name": "พี่ช้าง",
                    "status" : "เปิด",

                },
                {
                    "name": "พี่ช้าง",
                    "status" : "เปิด",

                }
            ],
    }),
    }
</script>
<style scoped>
    .sheet{
        border-radius: 30px;
        width: 250px;
        height: 250px;
        position: relative;
        background-color: #D7E1F1;
        
    }
    .restaurant-img{
        z-index: 1;
        width: 220px;
        height: 150px;
        background-color: white;
        position: absolute;
        left: 15px;
        border-radius: 40px;
        border: 10px solid white;
    }
    
    .restaurant-info{
        border-radius: 30px;
        top: 100px;
        position: absolute;
        width: 250px;
        height: 150px;
        background-color: rgb(34,85,164);
    }
    .title{
        font: 'Poppins';
        font-size: 30px;
        font-weight: 600;
        color:#E3B54C;
        padding-left: 1vw;
        padding-right: 1vw;
        padding-top: 5vh;
        width: 100%;
        height: 6vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title > .status{
        padding-left: 0.7vw;
        font: 'Poppins';
        font-size: 15px;
        color: white;
        width: 50px;
        height: 20px;
        border-radius: 10px;
        background-color: #36C144;
        z-index: 2;
    }
    .detail{
        padding-left: 1vw;
        color: white;
        font: 'Poppins';
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

    }
</style>