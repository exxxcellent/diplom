import { SortType } from '@/widgets/search-news';

export const chooseSortType = (search: SortType) => {
    switch (search) {
        case 'Дата публикации':
            return 'publishedAt';
        case 'Популярность':
            return 'popularity';
        case 'Релевантность':
            return 'relevancy';
    }
};
