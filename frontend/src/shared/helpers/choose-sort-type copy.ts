import { SearchType } from '@/widgets/search-news';

export const chooseSearchType = (search: SearchType) => {
    switch (search) {
        case 'Контент':
            return 'content';
        case 'Название':
            return 'title';
    }
};
