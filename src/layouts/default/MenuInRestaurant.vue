<script lang="ts">
     export default {
        data: () => ({
            Menus: [
              {
                 "ข้าว" : [
                    {
                        "title" : "กะเพรา",
                        "price" : "50"
                    },
                    {
                        "title" : "กะเพรา",
                        "price" : "50"
                    },
                    {
                        "title" : "กะเพรา",
                        "price" : "50"
                    },
                    {
                        "title" : "กะเพรา",
                        "price" : "50"
                    },  {
                        "title" : "กะเพรา",
                        "price" : "50"
                    }
                    
                    
                ],
                "เส้น" :[
                    {
                        "title" : "ราดหน้า",
                        "price" : "50"
                    },
                    {
                        "title" : "ราดตัว",
                        "price" : "50"
                    },
                ]
              }
            ],
    }),
    }
</script>
<template >
    <v-container v-for="type in Menus" class="">
        <v-row class="catagory" v-for="menu in type">
            <v-col class="food-show"
                cols="12"
            >
                <div class="title"><h2>catagorty</h2></div>
                    <v-row class="row-content">
                        <v-col class="menu" v-for="dish in menu"  lg="3" md="4" >
                                <v-card class="card-menu" >
                                        <v-img 
                                            class="align-end"
                                            :src="'https://cdn.discordapp.com/attachments/980445505677033542/1079019636949008424/E0B881E0B8B0E0B980E0B89EE0B8A3E0B8B2E0B984E0B881E0B988E0B984E0B882E0B988E0B894E0B8B2E0B8A7_header.png'"
                                            width="100%"
                                            >
                                        </v-img>
                                        <v-card-actions >
                                            <div class="detail-menu">
                                                <h3>ผัดกะเพรา</h3>
                                                <div class="detail-btn">
                                                    <h2>50</h2>
                                                    <v-btn><v-icon icon="mdi-plus-thick"></v-icon></v-btn>
                                                </div>
                                            </div>
                                        </v-card-actions>
                                </v-card>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background-color: aliceblue;
    }
    .catagory{
        width: 100%;
        height: 100%;
        
    }
    .row-content{
        
    
    }
    .card-menu{
        margin-left: 4vh;
        margin-right: 4vh;
        width: 220px;
        height: 250px;
        border-radius: 20px;
    }
   .title{
        margin: 50px;
   }
   .img-container{
        height: 200px;
   }
   .detail-menu{
        margin-top: 4vh;
   }
   .detail-btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
   }
</style>

