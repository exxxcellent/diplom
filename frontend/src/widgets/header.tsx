import { Button, Flex, Text } from '@mantine/core';
import Link from 'next/link';

export default function Header() {
    return (
        <Flex
            py={'md'}
            justify="space-between">
            <Flex>
                <Link href={'/'}>
                    <Text variant="gradient">News App</Text>
                </Link>
                <Link href={'/'}>
                    <Text>Home</Text>
                </Link>
            </Flex>

            <Flex
                justify="center"
                align="center"
                gap="md">
                <Link href={'/auth/sign-up'}>
                    <Button variant="gradient">
                        <Text>Регистрация</Text>
                    </Button>
                </Link>
                <Button variant="gradient">
                    <Link href={'/'}>Вход</Link>
                </Button>
            </Flex>
        </Flex>
    );
}
