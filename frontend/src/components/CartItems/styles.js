import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        color: #ffffff;
        border-radius: 4px;
        background-color: #bc2419;
        transition: all 0.2s ease-in-out;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #6c130c;
        }
    }
`;

export const EmptyCart = styled.span`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
`;