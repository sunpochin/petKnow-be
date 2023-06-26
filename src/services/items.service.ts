/**
 * Data Model Interfaces
 */

import { BaseItem, Item, Items } from '../models/items.interface';
// import { Items } from './items.interface';

/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    name: 'Play with the cats',
    price: 599,
    description: 'Tasty',
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
  },
  2: {
    id: 2,
    name: 'Cleaning cat sands',
    price: 299,
    description: 'Cheesy',
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
  3: {
    id: 3,
    name: 'Feed the cats',
    price: 199,
    description: 'Informative',
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (id: number, itemUpdate: BaseItem): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
