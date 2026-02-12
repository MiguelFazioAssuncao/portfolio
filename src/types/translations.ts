export type Language = 'pt' | 'en';

export interface Translations {
  header: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    downloadCV: string;
  };
  about: {
    title: string;
    description: string;
    name: string;
    stack: string;
    quote: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    viewOnGithub: string;
    chatWeb: {
      title: string;
      description: string;
    };
    trustPay: {
      title: string;
      description: string;
    };
    busApp: {
      title: string;
      description: string;
    };
    fileManager: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    instagram: string;
    form: {
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
    };
    messages: {
      fillAllFields: string;
      invalidEmail: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
  };
}
