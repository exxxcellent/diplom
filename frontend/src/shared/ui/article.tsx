'use client';
import { useFavoriteStore } from '@/app/store/user-favorite-store';
import { ArticleType } from '@/shared/types/article.interface';
import {
    ActionIcon,
    BackgroundImage,
    Badge,
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
import dayjs from 'dayjs';

interface ArticleProps {
    article: ArticleType;
}

export default function Article({ article }: ArticleProps) {
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
            className="hover:scale-101 duration-150 min-h-[500px]">
            <Card.Section
                className="relative"
                mb={'md'}>
                {article.urlToImage ? (
                    <BackgroundImage
                        component="a"
                        href={article.url}
                        src={article.urlToImage}
                        h={300}
                        className="!rounded-b-md"
                    />
                ) : (
                    <Flex
                        justify="center"
                        align="center"
                        className="w-full h-[300px] bg-gray-200">
                        <IconError404
                            className="text-gray-300"
                            size={256}
                        />
                    </Flex>
                )}
                <Badge className="!absolute left-3 top-3">
                    {article.source.name}
                </Badge>
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
            <Text
                fw={500}
                lineClamp={2}>
                {article.title}
            </Text>
            <Text
                size="sm"
                c="dimmed"
                lineClamp={3}>
                {article.description}
            </Text>
            <Flex
                className="!absolute bottom-3 left-0 w-full px-3"
                align="end"
                justify="space-between">
                <Text
                    size="sm"
                    c="dimmed"
                    lineClamp={1}>
                    {article.author ? article.author : article.source.name}
                </Text>
                <Text
                    className="text-right text-nowrap"
                    size="sm"
                    c="dimmed">
                    {dayjs(article.publishedAt)
                        .locale('ru')
                        .toDate()
                        .toLocaleDateString()}{' '}
                    {dayjs(article.publishedAt).locale('ru').hour()}:
                    {dayjs(article.publishedAt).locale('ru').minute()}
                </Text>
            </Flex>
        </Card>
    );
}
