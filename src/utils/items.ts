import React from 'react';

export interface IItem {
  id: number;
  note: string;
  cost: number;
  completed: boolean;
  completedOn: Date | null;
}

export interface IItemsContext {
  items: IItem[],
  addItem: (note: string, cost: number) => any;
  removeItem: (id: number) => any;
  setItemComplete: (id: number, val: boolean) => any;
  resetItems: () => any;
}

export const ItemsContext = React.createContext<IItemsContext>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  setItemComplete: () => {},
  resetItems: () => {},
});
