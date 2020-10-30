import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '131423423423',
      name: 'Item one',
      description: 'This is item 1',
      qty: 100,
    },
    {
      id: '2543435',
      name: 'Item two',
      description: 'This is item 2',
      qty: 42,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
