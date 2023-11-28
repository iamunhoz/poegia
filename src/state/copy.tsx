import { useAtomValue } from 'jotai';
import { siteLanguageAtom } from '.';

type ContactFormField = {
  label: string;
  message?: {
    required?: string;
    mismatch?: string;
  };
};

type CopyData = {
  linkHome: string;
  linkTutorials: string;
  linkContact: string;

  heroTitle: string;
  heroDescription: string[];

  aboutTitle: string;
  aboutDescription: string[];

  contactTitle: string;
  contactDescription: string;
  contactEmailTitle: string;
  contactFirstName: ContactFormField;
  contactLastName: ContactFormField;
  contactEmail: ContactFormField;
  contactMessage: ContactFormField;
  contactTelephone: ContactFormField;
  contactSendButtonLabel: string;
};

type Copy = {
  pt: CopyData;
  en: CopyData;
};

const copyData: Copy = {
  en: {
    linkHome: 'Home',
    linkContact: 'Contact',
    linkTutorials: 'Guides',
    heroTitle: 'Welcome to GAT Academy',
    heroDescription: [
      'Here you will find usage guide, security tips and news about the infosec world.',
      'If you have any questions or comments, get in touch with us. Your insights will be much appreciated!',
    ],
    aboutTitle: 'Hello there!',
    aboutDescription: [''],
    contactTitle: 'Get in touch with us!',
    contactDescription:
      'If you got any questions, suggestions or questions, feel free to send us a message',
    contactEmailTitle: 'E-mail us directly',
    contactFirstName: {
      label: 'First Name',
      message: {
        required: 'Please, inform your first name',
      },
    },
    contactLastName: {
      label: 'Last Name',
    },
    contactEmail: {
      label: 'E-mail',
      message: {
        required: 'Please, inform your e-mail',
        mismatch: 'Please, inform a valid e-mail address',
      },
    },
    contactMessage: {
      label: 'Message',
      message: {
        required: 'Please, write a message',
      },
    },
    contactTelephone: {
      label: 'Telephone',
    },
    contactSendButtonLabel: 'Send',
  },
  pt: {
    linkHome: 'Início',
    linkTutorials: 'Tutoriais',
    linkContact: 'Contato',
    heroTitle: 'Bem vindo à Academia do GAT',
    heroDescription: [
      'Aqui você encontrará guias de uso, tutoriais, dicas de segurança e notícias do mundo infosec',
      'Se tiver qualquer dúvida ou comentários, entre em contato conosco, sua opinião é muito importante para nós',
    ],
    aboutTitle: 'Olá!',
    aboutDescription: [''],
    contactTitle: 'Mande um oi para nós!',
    contactDescription:
      'Se tiver alguma dúvida, sugestão ou reclamação, fique à vontade para nos mandar uma mensagem!',
    contactEmailTitle: 'Entre em contato conosco diretamente',
    contactFirstName: {
      label: 'Nome',
      message: {
        required: 'Por favor, informe seu nome',
      },
    },
    contactLastName: {
      label: 'Sobrenome',
    },
    contactEmail: {
      label: 'E-mail',
      message: {
        required: 'Por favor, informe seu e-mail',
        mismatch: 'Por favor, informe um e-mail válido',
      },
    },
    contactMessage: {
      label: 'Mensagem',
      message: {
        required: 'Por favor, escreva uma mensagem',
      },
    },
    contactTelephone: {
      label: 'Telefone',
    },
    contactSendButtonLabel: 'Enviar',
  },
};

export default function useCopy() {
  const language = useAtomValue(siteLanguageAtom);

  return copyData[language];
}
