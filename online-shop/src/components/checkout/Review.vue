<template>
    <v-stepper-content
        step="3"
    >
        <v-list disabled dense>
            <v-subheader class="title">
                Zusammenfassung
            </v-subheader>
            <v-list-item-group
                color="primary"
            >
                <v-list-item
                    v-for="(value, name) in data"
                    :key="name"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ name }}: {{ value }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-btn
            color="success"
            @click="submitOrder"
        >
            Bestellen
        </v-btn>
        <v-btn
            text
            @click="previous"
        >
            Zurück
        </v-btn>
    </v-stepper-content>
</template>

<script>

    export default {
        name: 'Review',
        components: {

        },
        props: {
            data: Object,
            submitOrder: Function,
            previous: Function
        },
        created () {
            document.title = "Checkout";
        }
    }
</script>
