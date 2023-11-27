import styled from 'styled-components';
export const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 2px solid ${({theme}) => theme.color.teal};
 h1{
    text-decoration: none;
}
`;
export const NavbarMiddleContainer = styled.div `
     border: 2.4px solid #7D9191;
     border-radius: ${({theme}) => theme.border.borderRadius};
     padding: 1em;
`;

export const NavLinksContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
`;