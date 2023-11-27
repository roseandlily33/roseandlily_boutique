import styled from "styled-components";
 
export const CartDropdownContainer = styled.div`
   position: absolute; 
   width: 240px; 
   height: 340px; 
   display: flex; 
   flex-direction: column;
   padding: 1em;
   border: 1px solid ${({theme}) => theme.color.teal};
   border-radius: 4px;
   background-color: ${({theme}) => theme.color.white}; 
   top: 90px; 
   right: 40px; 
   z-index: 5;

`;
export const CartItems = styled.div`
    height: 300px; 
    display: flex; 
    flex-direction: column; 
    overflow: scroll; 


`;
