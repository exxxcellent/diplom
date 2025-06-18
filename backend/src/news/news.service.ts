import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    private readonly baseUrl: string = process.env.NEWS_API_BASE_URL as string;
    private readonly apiKey: string = process.env.NEWS_API_KEY as string;

    async getTop() {
        try {
            const news = await fetch(`${this.baseUrl}/everything`, {
                headers: {
                    Authorization: this.apiKey,
                },
            });
            return news;
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }
}
