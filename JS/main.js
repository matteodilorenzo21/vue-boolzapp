const { createApp } = Vue;

const app = createApp({
    data() {
        return {
                user: {
                  name: 'Nome Utente',
                  avatar: '_io'
                },
                contacts: [
                  {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                      },
                      {
                        id: 3,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                      }
                    ],
                  },
                  {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                      },
                      {
                        id: 3,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                      }
                    ],
                  },
                  {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                      },
                      {
                        id: 2,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                      },
                      {
                        id: 3,
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                      }
                    ],
                  },
                  {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                      }
                    ],
                  },
                  {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                      }
                    ],
                  },
                  {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                      },
                      {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                      }
                    ],
                  },
                  {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                      }
                    ],
                  },
                  {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                      },
                      {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                      }
                    ],
                  }
                ],
                selectedContact: {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                      {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                      },
                      {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                      },
                      {
                        id: 3,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                      }
                    ],
                },
                newMessage: '',
                searchContact: '',
                darkMode: false,
              }
    },
    computed: {
        // FILTERING CONTACTS
        filteredContacts() {
          return this.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
          });
        },
      },

    methods: {
        // CHAT CHANGER
        openChat(contact) {
          this.selectedContact.avatar = contact.avatar;
          this.selectedContact.name = contact.name;
          this.selectedContact.messages = contact.messages;
        },
        // MESSAGE TO PUSH IN CHAT
        sendMessage() {
          const currentDate = this.newDate();
          
          const messageId = this.generateId();
      
          const newMessage = {
            id: messageId,
            date: currentDate,
            message: this.newMessage,
            status: 'sent'
          };
      
          this.selectedContact.messages.push(newMessage);
          
          // REPLY MESSAGE TO PUSH IN CHAT
          setTimeout(() => {
            const replyMessageId = this.generateId(); 

            const replyMessage = {
              id: replyMessageId,
              date: this.newDate(),
              message: 'ok',
              status: 'received'
            };
            this.selectedContact.messages.push(replyMessage);
          }, 1000);
      
          this.newMessage = '';
        },

        // LAST MESSAGE & DATE FOR #CONTACTS-LIST
        getLastMessage(contact) {
            const messages = contact.messages;
            if (messages.length > 0) {
              return {
                message: messages[messages.length - 1].message,
                timestamp: messages[messages.length - 1].date
              };
            }
            return {
              message: '',
              timestamp: ''
            };
        },
        
        // DATE METHOD
        newDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentDate = `${day}/${month}/${year}`;
            const currentTime = `${hours}:${minutes}`;
            const date = `${currentDate} ${currentTime}`;
            return date;
        },
        
        // MESSAGES ID GENERATOR
        generateId() {
          
          return new Date().getTime();
        },

        // DARK MODE CHANGER
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
          
            const body = document.querySelector('body');
            const header = document.querySelectorAll('header');
            const searchContacts = document.querySelector('#search-contacts');
            const contactsList = document.querySelector('#contacts-list');
            const listItems = document.querySelectorAll('#contacts-list li');
            const mainTextArea = document.querySelector('#main-text-area');
            const userName = document.querySelector('#username');
            const contactName = document.querySelector('#contact-name');
            const chatWallpaper = document.querySelector('#chat');
            const lastAccess = document.querySelector('#last-access');
          
            if (this.darkMode) {
              body.classList.add('bg-body-dark');
              header.forEach((element) => {
                element.classList.remove('bg-header');
                element.classList.add('bg-mode-dark');
              });
              searchContacts.classList.add('bg-mode-dark');
              contactsList.classList.add('bg-mode-dark');
              listItems.forEach((item) => {
                item.classList.add('text-hover-dark');
              });
              lastAccess.classList.add('text-white');
              chatWallpaper.classList.remove('bg-chat')
              chatWallpaper.classList.add('bg-chat-dark');
              mainTextArea.classList.add('bg-mode-dark');
              userName.classList.add('text-white');
              contactName.classList.add('text-white')
            } else {
              body.classList.remove('bg-body-dark');
              header.forEach((element) => {
                element.classList.add('bg-header');
                element.classList.remove('bg-mode-dark');
              });
              searchContacts.classList.remove('bg-mode-dark');
              contactsList.classList.remove('bg-mode-dark');
              listItems.forEach((item) => {
                item.classList.remove('text-hover-dark');
              });
              lastAccess.classList.remove('text-white');
              chatWallpaper.classList.remove('bg-chat-dark')
              chatWallpaper.classList.add('bg-chat');
              mainTextArea.classList.remove('bg-mode-dark');
              userName.classList.remove('text-white');
              contactName.classList.remove('text-white');
            }
        }
      }
      
})

app.mount('#root');