<template>
    <v-container 
        class="mb-12"
    >
        <v-row>
            <v-col
                sm="10"
                offset-sm="1"
                lg="8"
                offset-lg="2"
            >
                <v-sheet>
                    <v-row 
                        class="px-4 my-0"
                    >
                        <v-col>
                            <v-row
                                justify="space-around"
                            >
                                <v-col
                                    cols="12"
                                    md="8"
                                    align-self="center"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ultricies nulla eget egestas. Aliquam sit amet nisl et dui feugiat sodales in non arcu. Vestibulum sagittis suscipit mauris vel feugiat. Phasellus volutpat pulvinar lectus, a scelerisque erat ullamcorper sed. Phasellus condimentum purus eget turpis scelerisque pretium. Ut vel sem est. Mauris mattis nunc auctor aliquet ornare. Proin viverra ante est, vitae gravida urna tempor ullamcorper. 
                                </v-col>
                                <v-col
                                    col="12"
                                    md="auto"
                                    align-self="center"
                                    order="first"
                                    order-md="last"
                                >
                                    <v-row
                                        justify="center"
                                    >
                                        <v-col
                                            class="text-center"   
                                        >
                                            <v-avatar
                                                size="200"
                                                class="hidden-xs-only"
                                            >
                                                <img
                                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                    alt="John"
                                                />
                                            </v-avatar>
                                            <v-avatar
                                                size="130"
                                                class="hidden-sm-and-up"
                                            >
                                                <img
                                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                    alt="John"
                                                />
                                            </v-avatar>
                                        </v-col>
                                       
                                    </v-row>  
                                    <v-row
                                        justify="center"
                                        class="mt-0"
                                    >
                                        <v-col
                                            class="text-center"   
                                        >
                                            Sieglinde Bannach
                                        </v-col>
                                    </v-row>             
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: 'Location',
        components: {

        },
        methods: {
            
        },
        data () {
            return {
                
            };
        },
        computed: {
            
        }
    }
</script>

<style>

</style>