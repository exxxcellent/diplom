'use client';
import { useBySource } from '@/shared/api/use-by-source';
import { Source } from '@/shared/types/source';
import Article from '@/shared/ui/article';
import SearchArticle from '@/shared/ui/search-article';
import { Flex, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface SourceNews {
    source: Source;
}

export default function SourceNews({ source }: SourceNews) {
    const { news, isLoading, isError } = useBySource(source.id as string);

    const matches = useMediaQuery('(min-width: 768px)');

    const articleComponent = matches ? true : false;

    return (
        <Flex
            className="w-full"
            direction="column"
            justify="start"
            align="start"
            gap="md">
            {!isLoading && !isError && (
                <Flex
                    className="!w-full border-b border-b-gray-200 py-3"
                    align="center"
                    justify="space-between">
                    <Title
                        className="text-left"
                        order={1}
                        fw={600}>
                        {source.name}
                    </Title>
                    {/* <Link href={`/source/${source.id}`}>
                        <Button variant="transparent">Больше...</Button>
                    </Link> */}
                </Flex>
            )}
            {news && !isError && (
                <Flex
                    className="w-full"
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
        </Flex>
    );
}
