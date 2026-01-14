import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import { Container, ContainerItems, Title } from './styles';
import 'react-multi-carousel/lib/styles.css';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
            console.log(data);
        }
        loadCategories()
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
                Categorias
            </Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"
        >
            {categories.map( category => (
                <ContainerItems key={category.id} imageUrl={category.url}>
                    <p>{category.name}</p>
                </ContainerItems>
            ))}
            </Carousel>
        </Container>
    );
}