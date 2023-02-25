<script lang="ts">
    import BannerInMain from '@/layouts/default/BannerInMain.vue';
    import MenuInRestaurant from '@/layouts/default/MenuInRestaurant.vue';
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
        components: { BannerInMain, MenuInRestaurant }
    };
</script>
<template>
        <v-main style="min-height:100vh">
            <!--ส่วนหัว-->
            <div class="container">
                <v-img
                    src="https://cdn.discordapp.com/attachments/812749326543487058/1074303855329816586/image_1.png"
                    height="350"
                    cover
                ></v-img>
                <div class="box-banner">
                    <BannerInMain class="Banner"></BannerInMain>
                    <!-- Comment -->
                    <!-- Content ใน banner -->
                    <div class="content-in">
                        <div class="name-Restaurant">
                            <p style="font-weight: 500" class="text-h3 pb-4">พี่ช้าง - คณะไอที</p>
                            <v-btn icon="mdi-heart-outline"></v-btn>
                          </div>
                        <div class="detail">
                            <p style="color: #4a4a4a">ข้าวแกง อาหารตามสั่ง</p>
                            <v-list style="background: none">
                            <v-list-item
                                style="color: #4a4a4a"
                                class="px-0 my-n2"
                                v-for="(item, i) in items"
                                :key="i"
                            >
                                <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                                <span class="px-1"></span>
                                <v-list-item-title
                                    v-text="item.text"
                                    style="font-weight: 500"
                                ></v-list-item-title>
                                <span class="px-2"></span>
                                <v-list-item-title v-text="item.subtext"></v-list-item-title>
                                </template>
                            </v-list-item>
                            </v-list>
                        </div>
                    </div>
                </div>
            </div>
            <!-- เมนูในร้าน -->
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