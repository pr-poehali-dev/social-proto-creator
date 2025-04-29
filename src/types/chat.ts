
export interface ChatData {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface Message {
  text: string;
  time: string;
  type: "incoming" | "outgoing";
}
