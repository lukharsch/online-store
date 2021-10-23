<template>
    <div>
        <v-container class="mt-6">
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
        </v-container>
        <v-container>
            <AboutMe/>
            <Location/>
        </v-container>
    </div>
    
</template>

<script>
    //import Header from '../components/home/Header.vue'
    import AboutMe from '../components/about/AboutMe.vue'
    import Location from '../components/about/Location.vue'

    export default {
        name: 'Home',
        components: {
            //Header,
            AboutMe,
            Location
        },
        created () {
            document.title = "Über";
        }
    }
</script>
