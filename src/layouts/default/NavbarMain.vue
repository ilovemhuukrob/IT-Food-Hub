<template>
    <div class="navbar">
        <div class="Name-inNav">
            <h2>Hi, Mr.GEAR!</h2>
            <p>Welcome to your dashboard</p>
        </div>
        <v-card
            min-width="250"
            max-height="50px"
            class="card"
         >
             <v-text-field
                density="compact"
                variant="solo"
                label="search"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                >
            </v-text-field>
        </v-card>
    </div>
</template>
<style scoped>
    .navbar{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        padding-left: 50px;
        padding-top: 50px;
        padding-right: 100px;
    }
    .Name-inNav{
        margin: 20px;
    }
    .card{
        margin-left: auto;
        border-radius: 50px;
    }
</style>
