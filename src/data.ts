import { ChatItemProps } from "./components/ChatItem/chatItem";
import { ImageT } from "./components/ChatWith/chatWith";

interface IChat {
  messages: IMessage[];
  name: string
}

export interface IMessage {
  author?: string;
  text?: string;
  image?: {
    src: string;
    alt: string;
  };
  status: string;
  statusImage?: {
    src: string;
    alt: string;
  };
  time: string;
}

export const data: Idata = {
  userInfo: {
    firstName: 'Петя',
    secondName: 'Мершин',
    email: 'pkmershin@gmail.com',
    login: 'DS',
    phone: '+7 (968) 780 85 75',
    displayName: 'Пётр Мершин',
  },
  profilePhoto: '/noPhoto.png',
  chats: [
    {
      chatName: 'Андрей',
      lastMessage: 'Привет',
      lastMessageAuthor: '',
      unreadCount: 2,
      lastMessageTime: '10:49',
      chatItemPhoto: 'noPhoto.png',
    },
    {
      chatName: 'Илья',
      lastMessage: 'Пока',
      lastMessageAuthor: 'Вы: ',
      unreadCount: 0,
      lastMessageTime: '15:12',
      chatItemPhoto: 'noPhoto.png',
    },
    {
      chatName: 'Вадим',
      lastMessage: 'Круто',
      lastMessageAuthor: 'Вы: ',
      unreadCount: 0,
      lastMessageTime: 'ПТ',
      chatItemPhoto: 'noPhoto.png',
    },
  ],
  vadimChat: {
    name: 'Вадим',
    messages: [
      {
        // eslint-disable-next-line max-len
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        status: 'read',
        time: '11:56',
      },
      {
        image: {
          src: '/camera.png',
          alt: 'chatImage',
        },
        status: 'read',
        time: '11:56',
      },
      {
        author: 'Вы',
        text: 'Круто!',
        status: 'read',
        statusImage: {
          src: '/icons/readStatus.svg',
          alt: 'status',
        },
        time: '12:00',
      },
    ],
  },
  addFileImage: {
    src: '/icons/addFile.svg',
    alt: 'addFile',
  },
  sendMessageImage: {
    src: '/icons/sendMessage.svg',
    alt: 'sendMessage',
  },
  menuDotsImage: {
    src: '/icons/menuDots.svg',
    alt: 'moreInfo',
  },
  readMessageImage: {
    src: '/icons/readStatus.svg',
    alt: 'status',
  },
};

export default data;

interface Idata {
  userInfo: {
    firstName: string,
    secondName: string,
    email: string,
    login: string,
    phone: string,
    displayName: string,
  },
  profilePhoto: string,
  chats: ChatItemProps[],
  vadimChat: IChat,
  addFileImage: ImageT,
  sendMessageImage: ImageT,
  menuDotsImage: ImageT,
  readMessageImage: ImageT,
};

