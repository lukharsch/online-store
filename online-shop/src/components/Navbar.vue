<template>
    <div>
        <v-app-bar style="z-index: 1">
            <v-toolbar-title>
                {{ this.$store.state.storeInfo.storeName }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-md-and-up">
                <v-btn
                    @click.stop="drawer = !drawer"
                >
                    <v-icon
                        small
                        left
                    >
                        fa-bars
                    </v-icon>
                </v-btn>
            </div>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    text
                >
                    <v-icon
                        small
                        left
                    >
                        {{ item.icon }}
                    </v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                >
                    <v-list-item-icon>
                        <v-icon
                            small
                            left
                        >
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',

        data() {
            return {
                drawer: false,
                items: [
                    { title: 'Home', link: '/', icon: 'fa-home' },
                    { title: 'Über mich', link: '/about', icon: 'fa-user' },
                    { title: 'Store', link: '/store', icon: 'fa-shopping-basket' },
                    { title: 'Warenkorb', link: '/cart', icon: 'fa-shopping-cart' },
                ]
            }
        }
    }
</script>

<style>

</style>