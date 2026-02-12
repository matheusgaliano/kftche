import { 
    Container, 
    HeaderLink, 
    Navigation,
    Options,
    Profile,
    LinkContainer,
    Logout,
    Content,
} from './styles'
import { useNavigate, useResolvedPath } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname } = useResolvedPath();
    
    function logoutUser(){

        logout();
        navigate('/login');
    }

    return (
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to='/' $isActive={pathname === '/'}>Home</HeaderLink>
                    <hr></hr>
                    <HeaderLink to='/menu' $isActive={pathname === '/menu'}>Menu</HeaderLink>
                </div>
            </Navigation>
            <Options>
                <Profile>
                    <UserCircle size={24} color='#fff'/>
                    <div>
                        <p>Olá, <span>{userInfo.name}</span></p>
                    <Logout onClick={logoutUser}>Sair</Logout>
                    </div>
                </Profile>
                <LinkContainer>
            <ShoppingCart size={24} color='#fff'/>
            <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
            </LinkContainer>
            </Options>
            
            </Content>
        </Container>
    )
}