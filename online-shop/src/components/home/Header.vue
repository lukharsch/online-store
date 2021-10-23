<template>
    <v-parallax
        :height="sheetHeight"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
        <v-container>
            <v-row
                align="center"
                justify="center"
            >
                <h1 class="text-center display-3 hidden-xs-only">
                    {{ this.$store.state.storeInfo.storeName }}
                </h1>
                <h1 class="text-center display-1 hidden-sm-and-up">
                    {{ this.$store.state.storeInfo.storeName }}
                </h1>
            </v-row>
            <v-row
                align="center"
                justify="center"
            >
                <h1 class="text-center font-italic subtitle-3 hidden-xs-only">
                    Von {{ this.$store.state.storeInfo.merchant }}
                </h1>
                <h3 class="text-center font-italic subtitle-3 hidden-sm-and-up">
                    Von {{ this.$store.state.storeInfo.merchant }}
                </h3>
            </v-row>
        </v-container>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            sheetHeight() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '200'
                    case 'sm': return '300'
                    case 'md': return '300'
                    case 'lg': return '300'
                    case 'xl': return '350'
                }
                return '300px'
            }
        }
    }
</script>

<style>

</style>