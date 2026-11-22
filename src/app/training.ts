export type UploadStatus = 'loading' | 'success' | 'error';

export type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface AdminUser extends IUser {
  isAdmin: boolean;
}

export let uploadStatus: UploadStatus = 'loading';

export let textFormat: TextFormat = 'uppercase';

export const currentUser: IUser = {
  id: 1,
  name: 'Алия',
  email: 'aliya@example.com',
};

export const adminUser: AdminUser = {
  id: 2,
  name: 'Дана',
  email: 'dana@example.com',
  isAdmin: true,
};

export const users: IUser[] = [
  { id: 1, name: 'Алия', email: 'aliya@example.com' },
  { id: 2, name: 'Дана', email: 'dana@example.com' },
  { id: 3, name: 'Тимур', email: 'timur@example.com' },
];

export const filteredUsersByName: IUser[] = users.filter((user) => user.name === 'Алия');

export function sumNumbers(a: number, b: number): number {
  return a + b;
}

export function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}

export function removeChar(text: string, char: string): string {
  return text.split(char).join('');
}