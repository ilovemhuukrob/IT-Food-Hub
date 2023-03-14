<template >
     <!-- Comment -->
    <!-- อันนี้เป็นกล่อง ที่ข้างในระบุ order ที่ delivery เห็น ในหน้า Order -->
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
                    <div class="text">
                        ค่าอาหาร
                    </div>
                    <div class="text">
                        150
                    </div>
                    <div class="text">
                        จำนวน
                    </div>
                    <div class="text">
                        3 รายการ
                    </div>
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
        padding-top: 1vw;
        display: flex;
        width: 310px;
        height: 170px;
        padding-bottom: 1vw;
    }
    .left-content{
        width: 155px;
        height: 150px;
        border-right: 1px solid black;
       
    }
    .right-content{
        padding-left: 4vh;
        width: 155px;
        height: 150px;
       
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