let app = new Vue({
  el: "#app",
  data: {
    active: 0,
    searchinput: "",
    sendmessage: "",
    staScrivendo: "",
    show: "",
    contacts: [
      {
        name: "Zlatan",
        avatar: "img/Zlatan.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Padre Pioli",
        avatar: "img/Pioli.jpeg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Oluwafikayomi",
        avatar: "img/Tomori.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Theo FrecciaRossa",
        avatar: "img/Theo.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    showChat: function (indice, classe) {
      if (indice == this.active) {
        return classe;
      }
    },

    changeChat: function (indice) {
      this.active = indice;
    },

    messageCheck: function (indice) {
      if (this.contacts[this.active].messages[indice].status == "received") {
        return "message-recive";
      } else {
        return "message-send";
      }
    },

    messageCheckTwo: function (indice) {
      if (this.contacts[this.active].messages[indice].status == "received") {
        return "recive";
      } else {
        return "send";
      }
    },

    sendMessage: function () {
      const newMessageSent = {
        date: "28/03/2020 10:10:40",
        text: this.sendmessage,
        status: "sent",
      };
      if (!this.sendmessage == "") {
        this.contacts[this.active].messages.push(newMessageSent);

        this.staScrivendo = "hb_display-inline";

        this.sendmessage = "";

        setTimeout(this.StaScrivendo, 2000);

        setTimeout(this.reciveMessage, 2000);
      }
    },

    reciveMessage: function () {
      const newMessageRecived = {
        date: "28/03/2020 10:10:40",
        text: "OK",
        status: "received",
      };
      this.contacts[this.active].messages.push(newMessageRecived);
    },

    getLastText: function (indice) {
      const lasttext = this.contacts[indice].messages[this.contacts[indice].messages.length - 1].text;

      return lasttext;
    },

    changeIcon: function (classe) {
      if (!this.sendmessage == "") {
        return "hb_display-" + classe;
      }
    },

    StaScrivendo: function () {
      this.staScrivendo = "";
    },
    /*
    showPopUp: function (index) {
      if (this.active == index) {
        return this.show = "hb_display-block";
      }
    },
    */
  },

  computed: {
    filteredChat: function () {
      return this.contacts.filter((chat) => {
        return chat.name.toLowerCase().match(this.searchinput);
      });
    },
  },
});
