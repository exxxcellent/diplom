'use client';
import { useTopNews } from '@/shared/api/use-top-news';
import Article from '@/shared/ui/article';
import { Flex, Grid, Loader, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function TopNews() {
    const { news, isLoading } = useTopNews();

    const matches = useMediaQuery('(min-width: 768px)');

    const spanSize = matches ? 1 : 8;

    return (
        <Flex
            className={`w-full min-h-full`}
            direction="column"
            justify="center"
            align="center"
            gap="md">
            {!isLoading && news && (
                <Title
                    className="text-left !w-full border-b border-b-gray-200 py-3"
                    order={1}
                    fw={600}>
                    Главное сегодня
                </Title>
            )}
            {!news && isLoading && (
                <Flex
                    className="w-full min-h-full"
                    justify="center"
                    align="center">
                    <Loader />
                </Flex>
            )}
            {news && (
                <Grid
                    grow
                    gutter="md">
                    {news.articles.map((article) => {
                        const span =
                            Math.floor(Math.random() * 2) + 3 + spanSize;
                        return (
                            <Grid.Col
                                span={span}
                                key={article.source.id + article.title}>
                                <Article article={article} />
                            </Grid.Col>
                        );
                    })}
                </Grid>
            )}
        </Flex>
    );
}
