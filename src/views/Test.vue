<script lang="ts">
    import BannerInMain from '@/layouts/default/HomeBanner.vue';
    import MenuInRestaurant from '@/layouts/default/MenuInRestaurant.vue';
    import DynamicRestaurantBanner from '@/components/DynamicRestaurantBanner.vue'
        export default {
        data: () => ({
            items: [
                {
                    text: "เวลาเปิดให้บริการ",
                    subtext: "วันนี้ 07:00-15:00",
                    icon: "mdi-calendar-range",
                },
                { text: "เวลาทำอาหาร", subtext: "25 นาที", icon: "mdi-alarm" },
            ],
        }),
    };
</script>
<template>
        <v-main style="min-height:100vh">
            <DynamicRestaurantBanner></DynamicRestaurantBanner>
            <MenuInRestaurant></MenuInRestaurant>
        </v-main>
</template>
<style scoped>
    .name-Restaurant{
        width: 1100px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .container{
        width: 100%;
        height: 550px;
       
        margin-bottom: 50px;
    }
    .box-banner{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Banner{
        position: absolute;
    }
     /*content in จะ มีขนาดเท่ากับ banner และวางใน positionเดียวกัน ทับกันนั้นเอง*/
    .content-in{
        top:280px;
        padding-top: 30px;
        padding-left: 50px;
        padding-right: 50px;
        width: 1200px;
        height: 250px;
        border-radius: 40px;
        position: absolute;
    }
</style>