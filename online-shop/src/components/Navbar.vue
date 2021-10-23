<template>
    <div>
        <v-app-bar style="z-index: 1">
            <v-toolbar-title>
                {{ this.$store.state.storeInfo.storeName }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-sm-and-up">
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

            <v-toolbar-items class="hidden-xs-only">
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
                <v-btn
                    v-if="this.$store.getters.getTotalItemsInCart > 0"
                    to="/cart"
                    text
                >
                    <v-badge
                        color="success"
                        :content="this.$store.getters.getTotalItemsInCart"
                    >
                        <v-icon
                            small
                            left
                        >
                            fa-shopping-cart
                        </v-icon>
                        Warenkorb
                    </v-badge>
                </v-btn>
                <v-btn
                    v-else
                    to="/cart"
                    text
                >
                    <v-icon
                        small
                        left
                    >
                        fa-shopping-cart
                    </v-icon>
                    Warenkorb
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
                <v-list-item
                    to="/cart"
                    link
                >
                    <v-list-item-icon>
                        <v-icon
                            small
                            left
                        >
                            fa-shopping-cart
                        </v-icon>
                    </v-list-item-icon>
                    Warenkorb
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
                    { title: 'Über', link: '/about', icon: 'fa-user' },
                    { title: 'Store', link: '/store', icon: 'fa-shopping-basket' }
                ]
            }
        }
    }
</script>

<style>

</style>