<template>
    <v-stepper-content
        step="1"
    >
        <v-text-field
            v-model="data.Name"
            :rules="[rules.required]"
            label="Name"
            required
        />
        <v-text-field
            v-model="data.Mail"
            :rules="[rules.required, rules.email]"
            label="E-Mail"
            required
        />
        <v-text-field
            v-model="data.Telefonnummer"
            :rules="[rules.required, rules.phone]"
            label="Telefonnummer"
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
            @click="$router.replace({ name: 'Cart' })"
        >
            Abbrechen
        </v-btn>
    </v-stepper-content>
</template>

<script>

    export default {
        name: 'ContactInfo',
        components: {

        },
        props: {
            data: Object,
            rules: Object,
            next: Function
        },
        created () {
            document.title = "Checkout";
        }
    }
</script>
