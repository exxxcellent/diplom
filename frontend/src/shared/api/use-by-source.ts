import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '../types/api-response.inteface';
import { ArticleType } from '../types/article.interface';

const fetchBySource = async (source: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news/top/${source}?pageSize=5`
    );

    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }

    return res.json();
};

export const useBySource = (source: string) => {
    const {
        data: news,
        isLoading,
        isError,
        error,
    } = useQuery<ApiResponse<ArticleType>>({
        queryKey: ['source-news', source],
        queryFn: () => fetchBySource(source),
        throwOnError: true,
    });

    return {
        news,
        isLoading,
        isError,
        error,
    };
};
