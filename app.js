let app = new Vue({
  el: "#app",
  data: {
    active: null,
    searchinput: "",
    sendmessage: "",
    newChatPopup: false,
    settingPopUp: false,
    staScrivendo: "",
    newChatName: "",
    newChatImage: "",
    risposte: ["OK", "Va bene", "Ci vediamo domani", "Ciao"],
    contacts: [
      {
        name: "Zlatan",
        avatar: "img/Zlatan.jpg",
        visible: true,
        messages: [
          {
            PopUpActive: false,
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            PopUpActive: false,
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            PopUpActive: false,
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
            PopUpActive: false,
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            PopUpActive: false,
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            PopUpActive: false,
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
            PopUpActive: false,
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            PopUpActive: false,
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            PopUpActive: false,
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
            PopUpActive: false,
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            PopUpActive: false,
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    messageCheck: function (indice, classe) {
      if (this.contacts[this.active].messages[indice].status == "received") {
        return classe + "recive";
      } else {
        return classe + "send";
      }
    },

    sendMessage: function () {
      const newMessageSent = {
        PopUpActive: false,
        date: dayjs().format("hh:mm"),
        text: this.sendmessage,
        status: "sent",
      };

      if (!this.sendmessage.replace(/ /g, "") == "") {
        this.contacts[this.active].messages.push(newMessageSent);

        this.staScrivendo = "Sta scrivendo...";

        this.sendmessage = "";

        const indiceContatto = this.active;

        setTimeout(() => {
          this.staScrivendo = "online";
        }, 2000);

        setTimeout(() => {
          this.staScrivendo = "";
        }, 3500);

        setTimeout(() => {
          this.reciveMessage(indiceContatto);
        }, 2000);
      }
    },

    reciveMessage: function (indice) {
      const randomMessage = this.risposte[Math.floor(Math.random() * this.risposte.length)];
      const newMessageRecived = {
        PopUpActive: false,
        date: dayjs().format("hh:mm"),
        text: randomMessage,
        status: "received",
      };
      this.contacts[indice].messages.push(newMessageRecived);
    },

    newChat: function () {
      if (!this.newChatName.replace(/ /g, "") == "") {
        if (this.newChatImage.endsWith(".jpg") || this.newChatImage.endsWith(".jpeg") || this.newChatImage.endsWith(".png")) {
          this.contacts.push({
            name: this.newChatName,
            avatar: this.newChatImage,
            visible: true,
            messages: [],
          });
        } else {
          this.contacts.push({
            name: this.newChatName,
            avatar: "img/avatar-png-green.jpg",
            visible: true,
            messages: [],
          });
        }

        this.newChatName = "";
        this.newChatImage = "";
      }
    },

    changeIcon: function (classe) {
      if (!this.sendmessage == "") {
        return "hb_display-" + classe;
      }
    },

    showPopUp: function (index, bol) {
      this.contacts[this.active].messages[index].PopUpActive = bol;
    },

    deleteMessage: function (index) {
      this.contacts[this.active].messages.splice(index, 1);
    },

    autoScroll: function () {
      const box = document.querySelector(".content-rigth-messages");
      box.scrollTop = box.scrollHeight;
    },

    pop: function (bol) {
      this.newChatPopup = bol;
    },

    filterChat: function () {
      this.contacts.forEach((element) => {
        element.visible = element.name.toLowerCase().includes(this.searchinput);
      });
    },

    deleteChat: function () {
      this.contacts.splice(this.active, 1);
    },
  },

  updated: function () {
    this.autoScroll();
  },
});
