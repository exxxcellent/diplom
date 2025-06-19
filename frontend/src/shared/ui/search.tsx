'use client';
import { CloseButton, Input, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
    const [value, setValue] = useState('');
    const router = useRouter();

    const matches = useMediaQuery('(min-width: 768px)');

    const size = matches ? 'lg' : 'xs';
    const iconSize = matches ? 24 : 12;

    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (value.length === 0) return;
            router.push(`/search?q=${value}`);
        }
    };

    return (
        <Tooltip
            label="Поиск новостей"
            offset={10}>
            <Input
                radius="md"
                size={size}
                variant="filled"
                placeholder="Поиск новостей"
                leftSection={<IconSearch size={iconSize} />}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => onEnterHandler(e)}
                rightSectionPointerEvents="all"
                rightSection={
                    <CloseButton
                        onClick={() => setValue('')}
                        style={{ display: value ? undefined : 'none' }}
                    />
                }
            />
        </Tooltip>
    );
}
