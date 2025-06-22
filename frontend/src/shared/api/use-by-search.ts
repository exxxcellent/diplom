import { SearchType, SortType } from '@/widgets/search-news';
import { useQuery } from '@tanstack/react-query';
import { chooseSortType } from '../helpers/choose-search-type';
import { chooseSearchType } from '../helpers/choose-sort-type copy';
import { ApiResponse } from '../types/api-response.inteface';
import { ArticleType } from '../types/article.interface';

const fetchBySearch = async (
    q: string,
    sort: SortType,
    search: SearchType,
    page?: number
) => {
    const sortParam = chooseSortType(sort);
    const searchParam = chooseSearchType(search);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news/everything?q=${q}&page=${page}&sortBy=${sortParam}&searchIn=${searchParam}`
    );

    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }

    return res.json();
};

export const useBySearch = (
    q: string,
    sort: SortType,
    search: SearchType,
    page?: number
) => {
    const {
        data: news,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery<ApiResponse<ArticleType>>({
        queryKey: ['search', q, page],
        queryFn: () => fetchBySearch(q, sort, search, page),
        throwOnError: true,
    });

    return {
        news,
        isLoading,
        isError,
        error,
        refetch,
    };
};
