import styled from "styled-components"

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column; 
    gap: 1rem;
    
    width: 56rem; 
    margin: 0 auto; 

    input {
        background: ${props => props.theme.blue700};
        height: 3rem;
        padding: 1rem;
        border: 2px solid ${props => props.theme.blue300} ;
        border-radius: 10px;
        color: ${props => props.theme.blue100};

        &::placeholder {
            color: ${props => props.theme.blue200};
            opacity: 1; 
        }
    }
    
`
export const HeaderSearch = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
   
   p {
        font-size: 1.2rem;
        font-weight: bold;
   }

   span {
    font-size: 0.9rem;
    color: ${props => props.theme.blue100};
   }
`
