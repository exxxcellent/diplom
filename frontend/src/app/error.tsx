'use client';
import Error from '@/shared/ui/error';
import Header from '@/widgets/header';
import { Container, Flex } from '@mantine/core';

export default function ErrorPage({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <Flex
            className="w-full h-screen"
            direction="column">
            <Header />
            <Container
                className="h-full w-full"
                size="lg">
                <Flex
                    className="h-full"
                    direction="column"
                    justify="center"
                    align="center"
                    gap="xl">
                    <Error message={error.message} />
                </Flex>
            </Container>
        </Flex>
    );
}
