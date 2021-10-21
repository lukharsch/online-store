<template>
    <v-container>
        <v-sheet
            v-if="$vuetify.breakpoint.mdAndUp"
            :elevation="4"
            class="px-8"
        >
            <h2 class="py-4">Filter</h2>
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
                checkbox: true
            }
        },
        components: {
            
        }
    }
</script>
