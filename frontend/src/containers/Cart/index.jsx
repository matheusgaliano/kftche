import Logo from '../../assets/logo-kftche2.svg';
import { CartItems } from '../../components/CartItems';
import { Banner, Container, Content, Title } from './styles'


export function Cart () {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt='Logo kftche'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                {/* <CartResume /> */}
            </Content>
        </Container>
    )
}