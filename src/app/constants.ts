export enum RouteNames {
  list = 'list',
  summary = 'summary',
}
export interface DataStructure {
  total: number;
  data: User[];
}

export const url = '../assets/transaction.json';

export const UserType = ['income', 'outcome', 'loan', 'investment'];

export interface User {
  type: 'income' | 'outcome' | 'loan' | 'investment';
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface Transactions {
  total: number;
  data: [User[]];
}
