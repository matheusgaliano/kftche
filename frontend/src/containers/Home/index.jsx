import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container } from "./styles";
import { OffersCarousel } from "../../components/OffersCarousel";

export function Home(){
    return (
        <main>
            <Banner>
            <h1>Bem-Vindo(a)!</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel/>
                    <OffersCarousel/>
                </div>
            </Container>
        </main>
    )
}