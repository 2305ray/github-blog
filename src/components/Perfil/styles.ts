import styled from "styled-components";

export const PerfilContainer = styled.section`
    position: relative;
    z-index: 10;
    width: 56rem;
    height: 14rem;
    margin: 0 auto;
    margin-top: -5rem;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.blue400};
    border-radius: 10px;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 10px;
    }
`
export const PerfilContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;
    gap: 1rem;
   
    a {
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        align-items: center;
        color: ${props => props.theme.blue};
    }

`
export const HeaderLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FooterInformation = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    
    p {
        display: flex;
        gap: 0.5rem;

        svg {
            color: ${props => props.theme.blue200};
        }
    }
`