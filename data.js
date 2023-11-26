export const data = {
  userInfo: {
    firstName: "Петя",
    secondName: "Мершин",
    email: "pkmershin@gmail.com",
    login: "DS",
    phone: "+7 (968) 780 85 75",
    displayName: "Пётр Мершин"
  },
  profilePhoto: "/noPhoto.png",
  chats: [
    {
      chatName: "Андрей",
      lastMessage: "Привет",
      lastMessageAuthor: "",
      unreadCount: 2,
      lastMessageTime: "10:49"
    },
    {
      chatName: "Илья",
      lastMessage: "Пока",
      lastMessageAuthor: "Вы: ",
      unreadCount: 0,
      lastMessageTime: "15:12"
    },
    {
      chatName: "Вадим",
      lastMessage: "Круто",
      lastMessageAuthor: "Вы: ",
      unreadCount: 0,
      lastMessageTime: "ПТ"
    }
  ],
  vadimChat: {
    name: "Вадим",
    messages: [
      {
        author: "",
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        image: {
          src: "",
          alt: "chatImage"
        },
        status: "read",
        time: "11:56"
      },
      {
        author: "",
        text: "",
        image: {
          src: "/camera.png",
          alt: "chatImage"
        },
        status: "read",
        statusImage: {},
        time: "11:56"
      },
      {
        author: "Вы",
        text: "Круто!",
        image: {},
        status: "read",
        statusImage: {
          src: "/icons/readStatus.svg",
          alt: "status"
        },
        time: "12:00"
      }
    ]
  },
  addFileImage: {
    src: "/icons/addFile.svg",
    alt: "addFile"
  },
  sendMessageImage: {
    src: "/icons/sendMessage.svg",
    alt: "sendMessage"
  },
  menuDotsImage: {
    src: "/icons/menuDots.svg",
    alt: "moreInfo"
  },
  readMessageImage: {
    src: "/icons/readStatus.svg",
    alt: "status"
  }
}