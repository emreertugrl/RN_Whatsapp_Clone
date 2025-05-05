interface Chat {
  id: number;
  name: string;
  surname: string;
  image: string;
  date: string;
  lastMessage: string;
}
interface ChatItemProps {
  item: Chat;
}
export type {ChatItemProps, Chat};
