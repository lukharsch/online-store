<template>
    <v-app>
        <Navbar/>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-snackbar
            v-model="$store.state.snackbar.show"
            elevation="8"
            :multi-line="true"
            :right="true"
            :top="true"
            :timeout="3000"
            :color="$store.state.snackbar.variant"
        >
            {{ $store.state.snackbar.message }}
            <v-btn
                dark
                text
                @click="$store.commit('updateSnackbar', { show: false })"
            >
                &#10005;
            </v-btn>
        </v-snackbar>
        <div class="mt-16">
            <Footer/>
        </div>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Footer from './components/Footer.vue'
    
    export default {
        name: 'app',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style lang="scss">

</style>
