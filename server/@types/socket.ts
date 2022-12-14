import { Socket } from 'socket.io';

export interface ServerToClientEvents {
  updateBack: ({ content }: updateBack) => void;
  updateTitleBack: ({ title }: UpdateTitleBack) => void;
  correctAnswerBack: () => void;
}

export interface ClientToServerEvents {
  join: ({ room }: { room: string }) => void;
  update: ({ content, id }: update) => void;
  updateTitle: ({ title, id }: UpdateTitle) => void;
  correctAnswer: () => void;
}

export interface UpdateTitleBack {
  title: string;
}

export interface updateBack {
  content: string;
}

export interface UpdateTitle {
  title: string;
  id: string;
}

export interface update {
  content: string;
  id: string;
}

export type SocketType = Socket<
  ClientToServerEvents,
  ServerToClientEvents
  // InterServerEvents,
  // SocketData
>;
