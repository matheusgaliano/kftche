import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: #ff3131;
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color: #ffffff;

    &:hover{
        background-color: #a71111;
    }
`

export const Badge = styled.span`
  position: absolute;
  top: -5px;     
  right: -5px;    
  
  background-color: #ff0000;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;