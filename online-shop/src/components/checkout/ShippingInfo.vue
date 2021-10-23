<template>
    <v-stepper-content
        step="2"
    >
        <v-text-field
            v-model="data.Straße"
            :rules="[rules.required]"
            label="Straße und Hausnummer"
            required
        />
        <v-row>
            <v-col
                cols="4"
            >
                <v-text-field
                    v-model="data.PLZ"
                    :rules="[rules.required, rules.zip]"
                    label="PLZ"
                    required
                />
            </v-col>
            <v-col
                cols="8"
            >
                <v-text-field
                    v-model="data.Stadt"
                    :rules="[rules.required]"
                    label="Stadt"
                    required
                />
            </v-col>
        </v-row>
        <v-text-field
            v-model="data.Land"
            :rules="[rules.required]"
            label="Land"
            required
        />
        <v-btn
            color="primary"
            @click="next"
        >
            Weiter
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
        name: 'ShippingInfo',
        components: {

        },
        props: {
            data: Object,
            rules: Object,
            next: Function,
            previous: Function
        },
        created () {
            document.title = "Checkout";
        }
    }
</script>
