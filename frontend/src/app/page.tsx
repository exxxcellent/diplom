import Header from '@/widgets/header';
import News from '@/widgets/news';
import { Container, Flex } from '@mantine/core';

export default function HomePage() {
    return (
        <Flex
            className="w-full h-screen"
            direction="column">
            <Header />
            <Container
                className="min-h-full w-full"
                size="lg">
                <News />
            </Container>
        </Flex>
    );
}
