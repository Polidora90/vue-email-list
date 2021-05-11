new Vue({
    el: "#app",
    data: {
        randomMail: [],
        listLength: 10
    },
    mounted() {

        const ajaxMail = [];

        for (let i = 0; i < this.listLength; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                ajaxMail.push(resp.data.response);

                if (ajaxMail.length === this.listLength) {
                    this.randomMail.push(...ajaxMail);
                }
            })
        }
    }
})