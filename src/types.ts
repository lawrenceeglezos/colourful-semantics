export type Role = 'who' | 'doing' | 'what' | 'where' | 'adjective';

export interface Word {
  id: string;
  text: string;
  role: Role;
  correctIndex: number;
}

export interface Scene {
  id: string;
  imageUrl: string;
  imageAlt: string;
  words: Word[];
}
