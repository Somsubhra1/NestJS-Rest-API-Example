import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  // private readonly items: Item[] = [
  //   {
  //     id: '131423423423',
  //     name: 'Item one',
  //     description: 'This is item 1',
  //     qty: 100,
  //   },
  //   {
  //     id: '2543435',
  //     name: 'Item two',
  //     description: 'This is item 2',
  //     qty: 42,
  //   },
  // ];

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
}
