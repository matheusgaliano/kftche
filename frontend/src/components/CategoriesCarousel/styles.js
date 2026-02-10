import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        top: 10px;
        left: 10px;
        right: auto;
        
    }

    .react-multiple-carousel__arrow--right {
        top: 10px;
        right: 50px;
        left: auto;
    }

    padding-left: 40px;
`;
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #e71616;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #e71616;
        left: calc(50% - 28px);

    }
`;
export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height:250px;
    border-radius: 20px;


    p {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`;