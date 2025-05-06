export interface ContactPhone {
  label: string;
  number: string;
}

export interface ContactEmail {
  label: string;
  email: string;
}

export interface Contact {
  recordID: string;
  givenName: string;
  familyName: string;
  phoneNumbers: ContactPhone[];
  emailAddresses: ContactEmail[];
  hasThumbnail: boolean;
  thumbnailPath: string;
}

export interface ContactProps {
  item: Contact;
}
