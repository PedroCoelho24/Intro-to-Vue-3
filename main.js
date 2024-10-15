const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            if(this.cart.indexOf(id) > -1) {
                this.cart.splice(this.cart.indexOf(id), 1);
            }
            console.log(this.cart);
        }
    }
})
