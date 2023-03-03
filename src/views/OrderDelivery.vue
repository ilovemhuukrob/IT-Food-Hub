<template >
    <v-main style="min-height:100vh">
            <v-container  class="container">
                <v-row
                    align="start"
                    no-gutters
                >
                    <v-col
                        v-for="n in cart"
                        :key="n"
                        cols="4"
                        class="d-flex justify-center py-5"
                    >
                        <OrderBox></OrderBox>
                    </v-col>
                </v-row>

            </v-container>
    </v-main>
</template>
<script lang="ts">
    import OrderBox from '@/layouts/default/OrderBox.vue';
    export default {
    data: () => ({
        cart: []
    }),
    // เริ่มมาให้โหลด ข้อมูลที่สั้งซื้อ
    created() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
        console.log(this.cart);
    },
    // หลังจากนั้นก็อัพเดท ตลอด
    mounted() {
        this.cart = JSON.parse(localStorage.getItem("Cart"));
    },
    components: { OrderBox }
};


</script>
<style scoped>

    .container{
        margin-top: 50px;
    }
    

</style>
