import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container, Content } from "./styles";
import { OffersCarousel } from "../../components/OffersCarousel";


export function Home(){
    return (
        <main>
            <Banner>
            <h1>Bem-Vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel/>
                    <OffersCarousel/>
                </Content>
            </Container>
        </main>
    )
}