//data() is short for data: function()
//createApp(THIS OBJECT IS CALLED AN OPTIONS OBJECT)
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'this is a pair of socks'
        }
    }
})

