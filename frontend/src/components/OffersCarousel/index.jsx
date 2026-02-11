import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import { Container, Title } from './styles';
import 'react-multi-carousel/lib/styles.css';
import { CardProduct } from '../CardProduct';
import { formatPrice } from '../../utils/formatPrice';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('/products');
            
            const onlyOffers = data
            .filter( product => product.offer)
            .map((product) => ({ 
                currencyValue: formatPrice(product.price), 
                ...product 
            }));

            setOffers(onlyOffers);

        }
        loadOffers()
    }, []);

    const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 3000, min: 1280 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 690, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

    return (
        <Container>
            <Title>
                Ofertas do Dia
            </Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"
        >
            {offers.map( product => (
               <CardProduct key={product.id} product={product} /> 
            ))}
            </Carousel>
        </Container>
    );
}