<template>
    <div class="text-center">
        <v-overlay
            :value="overlay"
            class="flex-column"
        >
            <p>Bestellung wird verarbeitet</p>
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
        <v-container 
            v-if="!overlay"
        >
            <v-row>
                <v-col
                    sm="6"
                    offset-sm="3"
                    xl="4"
                    offset-xl="4"
                >
                    <h1>
                        Danke für Ihre Bestellung!
                    </h1>
                    <h3>
                        Wir werden uns schnellstmöglichst darum kümmern
                    </h3>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

    export default {
        name: 'ThankYou',
        components: {

        },
        data() {
            return {
                overlay: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.overlay = false
            }, 3000);
        },
        beforeMount() {
            this.overlay = true
        },
        props: {

        },
        created () {
            document.title = "Danke für Ihre Bestellung";
        }
    }
</script>
