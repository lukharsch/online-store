import products from "./components/products";
import storeInfo from "./components/storeInfo";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products,
        storeInfo,
        snackbar: {
            show: false,
            variant: "success",
            message: ""
        },
        cart: [] // { itemId, quantity }
    },
    getters: {
        totalAmountCart: state => {
            var total = 0;
            state.cart.forEach((element) => {
                total += element.quantity * state.products[element.itemId].price
            })
              
            return total.toFixed(2)
        },
        openedToday: state => {
            var dt = new Date();
            //var hm = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"]
            //var day = [dt.getDay()]
            return state.storeInfo.opening[dt.getDay()] != "" ? state.storeInfo.opening[dt.getDay()] : ""
        },
        openingHoursShifted: state => {
            var temp = state.storeInfo.opening.slice(0);
            var keys = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
            const firstElement = temp.shift();
            temp.push(firstElement)
            //const merged = keys.reduce((obj, key, index) => ({ ...obj, [key]: temp[index] }), {});
            var mapDays = []
            keys.forEach((element, i) => {
                mapDays.push({"day": element, "hours": temp[i]})
            });
            return mapDays
        },
        getTotalItemsInCart: state => {
            var total = 0
            state.cart.forEach(element => {
                total += parseInt(element.quantity)
            });
            return total
        }
        /*getMinPrice: state => {
            var temp = state.products.sort(function (a, b) {
                return a.price - b.price
            })
            return temp[0]
        },
        getMaxPrice: state => {
            var temp = state.products.sort(function (a, b) {
                return b.price - a.price
            })
            return temp[0]
        }*/
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
                console.log(state.cart[idx].quantity)
                state.cart[idx].quantity = parseInt(state.cart[idx].quantity) + parseInt(quantity)
            }
        },
        updateCart(state, payload) {
            const { id, quantity } = payload
            /*const idx = state.cart.findIndex((product) => {
                return product.itemId === itemId
            })*/
            if(id !== -1) {
                state.cart[id].quantity = quantity
                if(state.cart[id].quantity <= 0) {
                    //delete state.cart[id]
                    state.cart[id].quantity = 0
                }
                return true
            }else {
                return false
            }
        },
        updateSnackbar(state, payload) {
            const { message, variant, show } = payload
            state.snackbar.message = message
            state.snackbar.variant = variant
            state.snackbar.show = show
        }
    }
})