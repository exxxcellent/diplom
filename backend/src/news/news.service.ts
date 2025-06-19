import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    private readonly baseUrl: string = process.env.NEWS_API_BASE_URL as string;
    private readonly apiKey: string = process.env.NEWS_API_KEY as string;

    async getTop() {
        try {
            const response = await fetch(
                `${this.baseUrl}/top-headlines?country=us`,
                {
                    headers: {
                        Authorization: this.apiKey,
                    },
                },
            ).then((res) => res.json());
            console.log(response);
            if (response.status === 'error') throw new BadRequestException();
            return response;
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }

    async getBySource(source: string, pageSize: number = 20) {
        try {
            const response = await fetch(
                `${this.baseUrl}/top-headlines?sources=${source}&pageSize=${pageSize}`,
                {
                    headers: {
                        Authorization: this.apiKey,
                    },
                },
            ).then((res) => res.json());
            if (response.status === 'error') throw new BadRequestException();
            return response;
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }

    async getBySearch(q: string, sort: string, search: string, page: number) {
        if (!q) throw new BadRequestException();
        try {
            const response = await fetch(
                `${this.baseUrl}/everything?pageSize=20&q=${q}&page=${page}&sortBy=${sort}&searchIn=${search}`,
                {
                    headers: {
                        Authorization: this.apiKey,
                    },
                },
            ).then((res) => res.json());
            if (response.status === 'error') throw new BadRequestException();
            return response;
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }
}
