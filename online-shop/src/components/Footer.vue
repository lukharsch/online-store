<template>
    <v-footer
        class="pa-8"
        absolute
    >
        <v-row
            align="center"
            justify="center"
        >
            <span class="text-center">
                &copy; {{ new Date().getFullYear() }} - <strong>Ideen aus Stoff</strong>
            </span>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style>

</style>