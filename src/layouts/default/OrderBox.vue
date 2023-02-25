<template >
    <v-card class="container">
        <v-card class="order-content">
            <div class="top-content">
                 <!-- Comment -->
                <!-- left content คือ รับอาหารจากที่ไหน ไปที่ไหน -->
                <div class="left-content">

                </div>
                <!-- Comment -->
                <!-- right content คือ ค่าอาหาร และจำนวนอาหาร -->
                <div class="right-content">
                    
                </div>
            </div>
            <!-- Comment -->
            <!-- bottom content area ที่เอาไว้เก็บปุ้ม -->
            <div class="bottom-content">
                <v-btn
                    class="btn"
                    variant="outlined"

                >
                    รับงาน
                </v-btn>
            </div>
        </v-card>
    </v-card>
</template>
<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        width: 350px;
        height: 250px;
        border-radius: 20px;
        background-color:rgb(34,85,164);
    }
    .order-content{
        border-radius: 20px;
        width: 310px;
        height: 220px;
    }
    .top-content{
        display: flex;
        width: 310px;
        height: 170px;
        
    }
    .left-content{
        width: 155px;
        height: 170px;
       
    }
    .right-content{
        width: 155px;
        height: 170px;
       
    }
    .bottom-content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 310px;
        height: 50px;
        background-color: white;
    }
    .btn{
        font-size: 14px;
        font-weight: lighter;
        width: 100px;
        border-radius: 20px;
        color: white;
        background-color: rgb(254,102,18);
    }
</style>