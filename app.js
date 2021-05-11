new Vue({
    el: "#app",
    data: {
        randomMail: [],
        listLength: 10
    },
    mounted() {
        for (let i = 0; i < this.listLength; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.randomMail.push(resp.data.response);
            })
        }
    }
})