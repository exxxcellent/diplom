'use client';
import { useFavoriteStore } from '@/app/store/user-favorite-store';
import Article from '@/shared/ui/article';
import SearchArticle from '@/shared/ui/search-article';
import { Flex, Text, Title, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMoodCry } from '@tabler/icons-react';

export default function FavoriteNews() {
    const { news } = useFavoriteStore();
    const { colorScheme } = useMantineColorScheme();

    const matches = useMediaQuery('(min-width: 768px)');

    const iconSize = matches ? 512 : 256;

    const articleComponent = matches ? true : false;

    return (
        <Flex
            className="min-h-full"
            direction="column"
            align="center"
            gap="xl">
            {news.length !== 0 && (
                <Title
                    className="text-left !w-full border-b border-b-gray-200 py-3"
                    order={1}
                    fw={600}>
                    Избранное
                </Title>
            )}
            {news.length === 0 && (
                <Flex
                    className="min-h-full w-full"
                    align="center"
                    direction="column"
                    justify="center"
                    flex={1}>
                    <IconMoodCry
                        size={iconSize}
                        color={`${colorScheme === 'light' ? 'gray' : 'white'}`}
                    />
                    <Text
                        className="!text-3xl text-center"
                        fw={700}
                        color={`${colorScheme === 'light' ? 'gray' : 'white'}`}>
                        Вы еще не добавляли избранное :(
                    </Text>
                </Flex>
            )}
            {news.length !== 0 && (
                <Flex
                    className="w-full h-max"
                    direction="column"
                    justify="start"
                    align="center"
                    gap="md">
                    {news.map((article) => {
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
        </Flex>
    );
}
