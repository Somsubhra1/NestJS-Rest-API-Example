import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post /*Req, Res*/,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     // return 'Get all items';
  //     console.log(req);
  //     return res.send('Hello world');
  //   }
  findAll(): String {
    return 'Hello world';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): String {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}