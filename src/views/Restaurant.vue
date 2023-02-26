<template >
    <v-main style="min-height:100vh">
        <v-img
            src="https://cdn.discordapp.com/attachments/812749326543487058/1074303855329816586/image_1.png"
            height="350"
            cover
        ></v-img>
        <div class="box-banner">
            <BannerInMain></BannerInMain>
              <!-- Comment -->
             <!-- Content ใน banner -->
            <div class="content-in">
                
            </div>
        </div>
    </v-main>
</template>

<script lang="ts">
    import BannerInMain from '@/layouts/default/BannerInMain.vue'
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
<style scoped>
    .box-banner{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .test{
        position: absolute;
    }
    .content-in{
        position: absolute;
    }
</style>