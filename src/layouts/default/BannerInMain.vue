<template >
    <div class="banner-Main">
        <v-card class="banner-card">
            <span style="position: absolute; z-index: -1; display: flex">
                <v-img
                  width="120"
                  src="@/assets/drink.svg"
                  style="transform: translate(1em, -2.5em)"
                />
                <v-img
                  width="150"
                  src="@/assets/noodle.svg"
                  style="transform: translate(11em, 5em)"
                />
                <v-img
                  width="105"
                  src="@/assets/cupcake.svg"
                  style="transform: translate(21em, -2.5em)"
                />
                <v-img
                  width="150"
                  src="@/assets/rice.svg"
                  style="transform: translate(33em, 0em)"
                />
              </span>
        </v-card>
    </div>

</template>

<style scoped>
    * {
        font-family: "Mitr", sans-serif !important;

    }
    .banner-Main{

        width: 1300px;
        height: 250px;
        padding-top: 50px;
        padding-left: 50px;
        padding-right: 50px;

    }
    .banner-card{
       height: 250px;
       border-radius: 50px;
    }
</style>