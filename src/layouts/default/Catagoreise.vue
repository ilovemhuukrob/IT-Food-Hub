<template >
    <div class="catagory-main">
        <div class="text"><h1>Catagory</h1></div>
        <div class="Catagorys-row">
            <div class="catagory" v-for="catagory in Catagorys" >
                <div class="img-catagory"></div>
                <p>{{catagory.text}}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        data: () => ({
            Catagorys: [
                //change icon directory
            { text: "ข้าวแกง", icon: "mdi-home-outline"},
            { text: "อาหารตามสั่ง", icon: "mdi-shopping-outline" },
            { text: "ก๊วยเตี๊ยว", icon: "mdi-chat-processing-outline" },
            { text: "เครื่องดื่ม", icon: "mdi-chat-processing-outline" },
            { text: "ของทานเล่น", icon: "mdi-chat-processing-outline" },
            ],
    }),
};
</script>
<style scoped>
    .catagory-main{
        margin-top: 50px;
        padding-right: 20px;
        padding-left: 20px;
        width: 100%;
        height: 200px;
    }
    .text{
        margin-bottom: 20px;
    }
    .Catagorys-row{
        display: flex;
        justify-content: space-between;
    }
    .catagory{
        display: flex;
        width:200px;
        border-radius: 50px;
        background-color: white;
        height: 80px;
        align-items: center;
    }
    .img-catagory{
        margin-left: 10px;
        border-radius: 100px;
        background-color: darkgray;
        width: 65px;
        height: 65px;
    }
    .catagory p{
        margin-left: 20px;
        color: black;
    }
</style>