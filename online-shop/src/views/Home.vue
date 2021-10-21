<template>
    <div>
        <Header/>
        <v-container>
            <PopularProducts/>
        </v-container>
    </div>
    
</template>

<script>
    import Header from '../components/home/Header.vue'
    import PopularProducts from '../components/home/PopularProducts.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            PopularProducts
        }
    }
</script>
