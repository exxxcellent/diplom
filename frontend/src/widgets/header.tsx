'use client';
import { useFavoriteStore } from '@/app/store/user-favorite-store';
import Search from '@/shared/ui/search';
import {
    ActionIcon,
    Flex,
    Indicator,
    Title,
    Tooltip,
    useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBookmarkFilled, IconMoon, IconSun } from '@tabler/icons-react';
import Link from 'next/link';

export default function Header() {
    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    const { news } = useFavoriteStore();
    const matches = useMediaQuery('(min-width: 768px)');

    const size = matches ? 'lg' : 'xs';
    const iconSize = matches ? 32 : 24;

    return (
        <Flex
            className="w-full px-4 shadow-sm"
            py={'md'}
            justify="space-between"
            align="center">
            <Tooltip
                label="Главная"
                offset={10}>
                <Link href={'/'}>
                    <Title
                        size={size}
                        order={1}
                        fw={700}
                        variant="">
                        News App
                    </Title>
                </Link>
            </Tooltip>

            <Flex
                justify="center"
                align="center"
                gap="md">
                <Search />
                <Tooltip
                    label="Избранное"
                    offset={10}>
                    <Indicator
                        label={news.length !== 0 ? news.length : null}
                        offset={3}
                        size={news.length !== 0 ? 20 : 0}
                        position="bottom-end"
                        className="select-none">
                        <Link
                            href="/favorite/"
                            className="!flex !items-center">
                            <ActionIcon
                                variant="subtle"
                                size={`input-${size}`}
                                radius="md"
                                color="yellow">
                                <IconBookmarkFilled size={iconSize} />
                            </ActionIcon>
                        </Link>
                    </Indicator>
                </Tooltip>

                <Tooltip
                    label="Смена темы"
                    offset={10}>
                    <ActionIcon
                        onClick={toggleColorScheme}
                        variant="subtle"
                        size={`input-${size}`}
                        color={`${colorScheme === 'light' ? 'yellow' : 'blue'}`}
                        radius="md">
                        {colorScheme === 'light' ? (
                            <IconSun size={iconSize} />
                        ) : (
                            <IconMoon size={iconSize} />
                        )}
                    </ActionIcon>
                </Tooltip>
            </Flex>
        </Flex>
    );
}
