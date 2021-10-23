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
                    <v-row 
                        class="pa-4 pb-2"
                        justify="space-between"
                    >
                        <v-col 
                            class="py-0 mb-0"
                            cols="12"
                            md="6"
                            align-self="center"
                        >
                            <h2>
                                Ideen aus Stoff
                                <v-btn
                                    v-if="this.$route.name !== 'About'"
                                    to="/about"
                                    color="primary"
                                    small
                                    text
                                >
                                    Mehr Info
                                </v-btn>
                            </h2>
                            <h4 class="subtitle-1">
                                Von {{ this.$store.state.storeInfo.merchant }}
                            </h4>
                        </v-col>
                        <v-col 
                            class="py-0 mb-0"
                            cols="12"
                            md="6"
                            align-self="center"
                        >
                            <v-row>
                                <v-col
                                    cols="6"
                                    md="12"
                                    class="mt-2 pt-2 mb-1 pb-1 my-md-0 py-md-0"
                                >
                                    <p
                                        v-if="this.$store.getters.openedToday != ''"
                                        class="success--text mb-0 pb-0 float-left float-md-right"
                                    >
                                        Heute geöffnet: {{ this.$store.getters.openedToday }}
                                    </p>
                                    <p
                                        v-else
                                        class="error--text mb-0 pb-0 float-left float-md-right"
                                    >
                                        Heute geschlossen
                                    </p>
                                </v-col>
                                <v-col
                                    cols="6"
                                    md="12"
                                    align-self="center"
                                    class="text-right text-sm-left mt-2 pt-2 mb-1 pb-1 my-md-0 py-md-0"
                                >
                                    <v-menu
                                        rounded
                                        offset-y
                                    >
                                        <template v-slot:activator="{ attrs, on }">
                                            <p 
                                                class="float-right"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                Weitere Öffnungszeiten <i class="fas fa-chevron-down"></i>
                                            </p>
                                        </template>

                                        <v-list>
                                            <v-list-item
                                                v-for="(op, i) in this.$store.getters.openingHoursShifted"
                                                :key="i"
                                            >
                                                <v-list-item-title
                                                    v-if="op['hours'] != ''"
                                                >
                                                    {{ op["day"] }}: <span class="float-right">{{ op["hours"] }}</span>
                                                </v-list-item-title>
                                                <v-list-item-title
                                                    v-else
                                                >
                                                    {{ op["day"] }}: <span class="float-right">Geschlossen</span>
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="px-4 my-0">
                        <v-col>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <l-map style="height: 300px; z-index: 0" :zoom="zoom" :center="location">
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