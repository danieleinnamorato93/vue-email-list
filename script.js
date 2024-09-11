const { createApp } = Vue

  createApp({
    data() {
      return {
       emails:[],
       apiUrl:"https://flynn.boolean.careers/exercises/api/random/mail",
      };
    },
    methods:{
        getRandomEmails(){
            this.emails = [];
            for(let i=0; i<10 ; i++){
                axios.get(this.apiUrl)
                .then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        }
    },
    mounted(){
        this.getRandomEmails();
    },
  }).mount('#app')