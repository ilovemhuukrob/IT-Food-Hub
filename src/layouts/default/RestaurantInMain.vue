<template>
    
            <v-row align="center">
                <v-col 
                    v-for="Restaurant in 10"
                    cols="3"
                    align-self="center"

                >
                    <v-card class="sheet">
                        <div class="restaurant-img"></div>
                        <div class="restaurant-info"></div>
                    </v-card>
                </v-col>
            </v-row>

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
        width: 25vh;
        height: 23vh;
        position: relative;
        background-color: #D7E1F1;
        
    }
    .restaurant-img{
        z-index: 1;
        width: 22vh;
        height: 13vh;
        background-color: white;
        position: absolute;
        left: 1.5vh;
        border-radius: 40px;
    }
    .restaurant-info{
        border-radius: 30px;
        top: 100px;
        position: absolute;
        width: 25vh;
        height: 15vh;
        background-color: rgb(34,85,164);
    }
</style>