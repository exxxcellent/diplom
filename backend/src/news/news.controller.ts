import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get('/top')
    async getTop() {
        return await this.newsService.getTop();
    }

    @Get('/top/:source')
    async getBySource(
        @Param('source') source: string,
        @Query('pageSize') pageSize: number,
    ) {
        return await this.newsService.getBySource(source, pageSize);
    }

    @Get('/everything')
    async getBySearch(@Query() searchParams: Record<string, string>) {
        return await this.newsService.getBySearch(
            searchParams.q,
            searchParams.sortBy,
            searchParams.searchIn,
            +searchParams.page,
        );
    }
}
