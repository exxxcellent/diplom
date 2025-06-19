import { Flex, Text, useMantineColorScheme } from '@mantine/core';
import { IconError404 } from '@tabler/icons-react';

interface ErrorProps {
    message: string;
}

export default function Error({ message }: ErrorProps) {
    const { colorScheme } = useMantineColorScheme();

    return (
        <Flex
            className="h-full w-full text-center"
            direction="column"
            gap="md"
            align="center"
            justify="center">
            <IconError404
                size={512}
                color={`${colorScheme === 'light' ? 'gray' : 'white'}`}
            />
            <Text
                className="!text-4xl"
                fw={700}
                color={`${colorScheme === 'light' ? 'gray' : 'white'}`}>
                Упс! Произошла неожиданная ошибка! <br />
                {message}
            </Text>
        </Flex>
    );
}
