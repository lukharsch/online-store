<template>
    <div>
        <Header/>
        <v-container>
            <PopularProducts/>
            <Location/>
        </v-container>
    </div>
    
</template>

<script>
    import Header from '../components/home/Header.vue'
    import PopularProducts from '../components/home/PopularProducts.vue'
    import Location from '../components/about/Location.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            PopularProducts,
            Location
        }
    }
</script>
