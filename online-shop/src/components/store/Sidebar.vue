<template>
    <v-container>
        <v-sheet
            v-if="$vuetify.breakpoint.mdAndUp"
            :elevation="4"
            class="px-8"
        >
            <h2 class="py-4">Filter</h2>
            <v-row>
                <v-col cols="12" class="pa-0">
                    <v-subheader class="pl-0">
                        Preis bis:
                    </v-subheader>
                    <v-slider
                        v-model="slider"
                        :max="maxPrice"
                        :min="minPrice"
                        thumb-color="red"
                        thumb-label="true"
                    >
                        <template v-slot:prepend>
                            <span class="pt-1">
                                1.99
                            </span>
                        </template>
                        <template v-slot:append>
                            <span class="pt-1">
                                200
                            </span>
                        </template>
                    </v-slider>
                </v-col>
            </v-row>
            <v-radio-group
                v-model="priceFilter"
                :mandatory="true"
            >
                <v-radio
                    v-for="(price, i) in prices"
                    :key="i"
                    :label="price"
                    :value="i"
                />
            </v-radio-group>
        </v-sheet>
        <v-expansion-panels v-else>
            <v-expansion-panel>
                <v-expansion-panel-header 
                    expand-icon="fa-angle-down"
                >
                    Filter
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group
                        v-model="priceFilter"
                        :mandatory="true"
                    >
                        <v-radio
                            v-for="(price, i) in prices"
                            :key="i"
                            :label="price"
                            :value="i"
                        />
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>

    export default {
        name: 'Sidebar',
        data() {
            return {
                prices: [
                    "Alle",
                    "Unter 25€",
                    "25€ bis 50€",
                    "50€ bis 100€",
                    "Über 100€",
                ],
                priceFilter: 0,
                checkbox: true,
                slider: 10
            }
        },
        computed: {
            minPrice() {
                return 0
            },
            maxPrice() {
                return 100
            }
        },
        components: {
            
        }
    }
</script>
