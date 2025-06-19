import FavoriteNews from '@/widgets/favorite-news';
import Header from '@/widgets/header';
import { Container, Flex } from '@mantine/core';

export default function FavoritePage() {
    return (
        <Flex
            className="w-full h-screen"
            direction="column">
            <Header />
            <Container
                className="h-full w-full"
                size="lg">
                <FavoriteNews />
            </Container>
        </Flex>
    );
}
