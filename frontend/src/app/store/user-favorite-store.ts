import { ArticleType } from '@/shared/types/article.interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteStore {
    news: ArticleType[];
    toggleFavorite: (article: ArticleType) => void;
    findByUrl: (url: string) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>()(
    persist(
        (set, get) => ({
            news: [],
            toggleFavorite: (article) =>
                set((state) => {
                    const articleIsExist = state.news.find(
                        (existingArticle) => existingArticle.url === article.url
                    );
                    if (articleIsExist) {
                        return {
                            ...state,
                            news: state.news.filter(
                                (existingArticle) =>
                                    existingArticle.url !== article.url
                            ),
                        };
                    }
                    return {
                        ...state,
                        news: [article, ...state.news],
                    };
                }),
            findByUrl: (url) => {
                const articleIsExist = get().news.find(
                    (existingArticle) => existingArticle.url === url
                );
                if (articleIsExist) return true;
                return false;
            },
        }),
        {
            name: 'favorite-news-storage',
            partialize: (state) => ({ news: state.news }),
        }
    )
);
