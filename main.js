const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
              ],
              sizes: [
                { id: 1234, letter: 'S' },
                { id: 1235, letter: 'M' },
                { id: 1236, letter: 'L' },
                { id: 1237, letter: 'XL' },
                { id: 1238, letter: 'XXL' }
              ]
        }
    }
})
