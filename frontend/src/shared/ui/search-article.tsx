'use client';
import { useFavoriteStore } from '@/app/store/user-favorite-store';
import { ArticleType } from '@/shared/types/article.interface';
import {
    ActionIcon,
    BackgroundImage,
    Badge,
    Box,
    Card,
    Flex,
    Text,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
    IconBookmark,
    IconBookmarkFilled,
    IconError404,
} from '@tabler/icons-react';

interface ArticleProps {
    article: ArticleType;
}

export default function SearchArticle({ article }: ArticleProps) {
    const { toggleFavorite, findByUrl } = useFavoriteStore();

    const isExistInFavorite = findByUrl(article.url);

    const showNotification = () => {
        const title = !isExistInFavorite
            ? 'Успешно добавлено в избранное'
            : 'Успешно удалено из избранного';
        const message = !isExistInFavorite
            ? `Вы только что добавили новость в избранное: ${article.title}`
            : `Вы только что удалили новость из избранного: ${article.title}`;

        notifications.show({
            title,
            message,
            radius: 'md',
            color: !isExistInFavorite ? 'yellow' : 'red',
            position: 'bottom-right',
        });
    };

    const toggleFavoriteHandler = () => {
        toggleFavorite(article);
        showNotification();
    };

    return (
        <Card
            shadow="md"
            padding="md"
            radius="md"
            className="min-h-[150px] w-full">
            <Card.Section>
                <Flex
                    justify="start"
                    align="stretch"
                    gap="md"
                    className="w-full min-h-full">
                    <Box>
                        {article.urlToImage ? (
                            <BackgroundImage
                                component="a"
                                href={article.url}
                                src={article.urlToImage}
                                h={150}
                                w={300}
                                className="!rounded-r-md"
                            />
                        ) : (
                            <Flex
                                justify="center"
                                align="center"
                                className="w-[300px] h-[150px] bg-gray-200">
                                <IconError404
                                    className="text-gray-300"
                                    size={150}
                                />
                            </Flex>
                        )}
                        <Badge className="!absolute left-3 top-3">
                            {article.source.name}
                        </Badge>
                    </Box>
                    <Flex
                        direction="column"
                        justify="space-between"
                        className="py-3 pe-12 w-full min-h-full">
                        <Flex
                            direction="column"
                            align="start"
                            flex={1}>
                            <Text
                                size="lg"
                                fw={700}
                                lineClamp={1}>
                                {article.title}
                            </Text>
                            <Text
                                size="sm"
                                c="dimmed"
                                lineClamp={3}>
                                {article.description}
                            </Text>
                        </Flex>
                        <Flex
                            align="end"
                            justify="space-between">
                            <Text
                                size="sm"
                                c="dimmed"
                                lineClamp={1}>
                                {article.author
                                    ? article.author
                                    : article.source.name}
                            </Text>
                            <Text
                                className="text-right text-nowrap"
                                size="sm"
                                c="dimmed">
                                {new Date(article.publishedAt).toLocaleString()}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <ActionIcon
                    onClick={toggleFavoriteHandler}
                    className="!absolute right-3 top-3"
                    variant="transparent">
                    {isExistInFavorite ? (
                        <IconBookmarkFilled
                            size={32}
                            className="hover:fill-red-500 fill-yellow-500 text-yellow-500 duration-150"
                        />
                    ) : (
                        <IconBookmark
                            size={32}
                            className="hover:fill-yellow-500 hover:text-yellow-500 text-gray-200 duration-150"
                        />
                    )}
                </ActionIcon>
            </Card.Section>
        </Card>
    );
}
