Vue.createApp({
    data() {
        return {
            text: null,
            result: []
        }
    },
    methods: {
        Show() {

            const stringrevers = this.text.split("").reverse().join("");


            const firstLetCapitalizes = this.text.charAt(0).toUpperCase() + this.text.slice(1).toLowerCase();   

            const LastLetCapitalize = this.text.slice(0, -1).toLowerCase() + this.text.charAt(this.text.length - 1).toUpperCase();
            this.result = [this.text.toLowerCase(), this.text.toUpperCase(), firstLetCapitalizes, LastLetCapitalize, stringrevers]



        }
    }
}).mount("#app")







