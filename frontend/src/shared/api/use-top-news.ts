import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '../types/api-response.inteface';
import { ArticleType } from '../types/article.interface';

const fetchTopNews = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/top`);

    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }

    return res.json();
};

export const useTopNews = () => {
    const {
        data: news,
        isLoading,
        isError,
        error,
    } = useQuery<ApiResponse<ArticleType>>({
        queryKey: ['top-news'],
        queryFn: fetchTopNews,
        throwOnError: true,
    });

    return {
        news,
        isLoading,
        isError,
        error,
    };
};
