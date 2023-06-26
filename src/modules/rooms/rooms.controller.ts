import {Controller, Get, Query} from '@nestjs/common';
import {RoomsService} from '../rooms/rooms.service';

@Controller('rooms')
export class RoomsController {
    constructor(private roomService: RoomsService) {
    }

    @Get('')
    async findAll() {
        return await this.roomService.findAll();
    }

    @Get('/available-rooms')
    async getAvailableRooms(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('start_date') start_date: string,
        @Query('end_date') end_date: string
    ) {
        return await this.roomService.getAvailableRooms(start_date, end_date, page, limit )
    }

}
