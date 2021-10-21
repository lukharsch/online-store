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
                <v-card
                    elevation="6"
                >
                    <v-row class="pa-4 pb-1">
                        <v-col class="py-0 mb-0">
                            <h2>
                                Ideen aus Stoff
                                <v-btn
                                    to="/about"
                                    color="primary"
                                    small
                                    text
                                >
                                    Mehr Info
                                </v-btn>
                            </h2>
                        </v-col>
                    </v-row>
                    <v-row class="px-4 py-0 my-0">
                        <v-col class="py-0 my-0">
                            <h4 class="subtitle-1">
                                Von {{ this.$store.state.storeInfo.merchant }}
                            </h4>
                        </v-col>
                    </v-row>
                    <v-row class="px-4 my-0">
                        <v-col>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <l-map style="height: 300px" :zoom="zoom" :center="location">
                                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                                        <l-marker :lat-lng="location"></l-marker>
                                    </l-map>
                                </v-col>
                                <v-col
                                    col="12"
                                    md="6"
                                >
                                    <v-list two-line>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-phone
                                                </v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ this.$store.state.storeInfo.contact.phone2 }}</v-list-item-title>
                                                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-action></v-list-item-action>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ this.$store.state.storeInfo.contact.phone }}</v-list-item-title>
                                                <v-list-item-subtitle>Festnetz</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-divider inset></v-divider>

                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-email
                                                </v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ this.$store.state.storeInfo.contact.mail }}</v-list-item-title>
                                                <v-list-item-subtitle>Geschäftlich</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-divider inset></v-divider>

                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-map-marker
                                                </v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ this.$store.state.storeInfo.address.street }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ this.$store.state.storeInfo.address.zip }} {{ this.$store.state.storeInfo.address.city }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'

    export default {
        name: 'Location',
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        methods: {
            
        },
        data () {
            return {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                zoom: 15,
                //center: [48.09914, 9.78721],
                //markerLatLng: [48.09914, 9.78721]
            };
        },
        computed: {
            location() {
                var loc = []
                loc.push(this.$store.state.storeInfo.location.lat)
                loc.push(this.$store.state.storeInfo.location.lon)
                return loc
            }
        }
    }
</script>

<style>

</style>