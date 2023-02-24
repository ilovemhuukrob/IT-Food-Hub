<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="Restaurant in 10"
                cols="3"
            >
                <v-card class="sheet">
                    <div class="restaurant-img">

                    </div>
                    <div class="restaurant-info">

                    </div>
                </v-card>
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
        border-radius: 20px;
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
    }
    .restaurant-info{
        border-radius: 30px;
        top: 100px;
        position: absolute;
        width: 250px;
        height: 150px;
        background-color: rgb(34,85,164);
    }
</style>