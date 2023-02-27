<template >
    <v-main style="min-height:100vh">
            <v-container  class="container">
                <v-row
                    align="start"
                    no-gutters
                >
                    <v-col
                        v-for="n in 7"
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
<script setup lang="ts">
 import OrderBox from '@/layouts/default/OrderBox.vue';
</script>
<style scoped>
    .container{
        margin-top: 50px;
    }

</style>
