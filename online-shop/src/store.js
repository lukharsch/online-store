import products from "./components/products";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products,
        snackbar: {
            show: false,
            variant: "success",
            message: ""
        },
        cart: [] // { itemId, quantity }
    },
    mutations: {
        addItemToCart(state, payload) {
            const { itemId, quantity } = payload
            const idx = state.cart.findIndex((product) => {
                return product.itemId === itemId
            })
            if(idx === -1) {
                state.cart.push({ itemId, quantity })
            } else {
                state.cart[idx].quantity += 1
            }
        },
        updateSnackbar(state, payload) {
            const { message, show } = payload
            state.snackbar.message = message
            state.snackbar.show = show
        }
    }
})