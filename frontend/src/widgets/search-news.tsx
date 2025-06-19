'use client';
import { useBySearch } from '@/shared/api/use-by-search';
import Article from '@/shared/ui/article';
import SearchArticle from '@/shared/ui/search-article';
import {
    Flex,
    Loader,
    Text,
    Title,
    useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMoodCry } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import SearchFilters from './search-filters';
import SearchPagination from './search-pagintaion';

interface SearchNewsProps {
    q: string;
}

export type SortType = 'Релевантность' | 'Популярность' | 'Дата публикации';
export type SearchType = 'Название' | 'Описание' | 'Контент';
export type DateType = [string | null, string | null];

export default function SearchNews({ q }: SearchNewsProps) {
    const [activePage, setActivePage] = useState(1);
    const [sort, setSort] = useState<SortType>('Дата публикации');
    const [search, setSearch] = useState<SearchType>('Название');
    const [dates, setDates] = useState<DateType>([null, null]);

    const { news, isLoading, isError, refetch } = useBySearch(
        q,
        sort,
        search,
        dates,
        activePage
    );

    const { colorScheme } = useMantineColorScheme();

    const matches = useMediaQuery('(min-width: 768px)');

    const articleComponent = matches ? true : false;

    useEffect(() => {
        refetch();
    }, [sort, search, dates]);

    return (
        <Flex
            className="w-full h-full"
            direction="column"
            align="start"
            gap="md">
            {news?.articles.length !== 0 && (
                <Title
                    className="text-left !w-full border-b border-b-gray-200 py-3"
                    order={1}
                    fw={600}>
                    По запросу {q} найдено {news?.totalResults} результатов
                </Title>
            )}
            {news?.articles.length !== 0 && (
                <SearchFilters
                    dates={dates}
                    sort={sort}
                    search={search}
                    setSearch={setSearch}
                    setDates={setDates}
                    setSort={setSort}
                />
            )}
            {news?.articles.length === 0 && (
                <Flex
                    className="min-h-full w-full"
                    align="center"
                    direction="column"
                    justify="center"
                    flex={1}>
                    <IconMoodCry
                        size={512}
                        color={`${colorScheme === 'light' ? 'gray' : 'white'}`}
                    />
                    <Text
                        className="!text-4xl"
                        fw={700}
                        color={`${colorScheme === 'light' ? 'gray' : 'white'}`}>
                        По запросу {q} ничего не найдено
                    </Text>
                </Flex>
            )}
            {!news && isLoading && (
                <Flex
                    className="w-full h-full"
                    justify="center"
                    align="center">
                    <Loader />
                </Flex>
            )}
            {news && (
                <Flex
                    className="w-full h-max"
                    direction="column"
                    justify="start"
                    align="center"
                    gap="md">
                    {news.articles.map((article) => {
                        if (articleComponent)
                            return (
                                <SearchArticle
                                    article={article}
                                    key={
                                        article.source.id +
                                        article.title +
                                        Math.random()
                                    }
                                />
                            );
                        return (
                            <Article
                                article={article}
                                key={
                                    article.source.id +
                                    article.title +
                                    Math.random()
                                }
                            />
                        );
                    })}
                </Flex>
            )}
            {news?.articles.length !== 0 && (
                <SearchPagination
                    total={(news?.totalResults as number) / 20}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            )}
        </Flex>
    );
}
