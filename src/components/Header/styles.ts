import styled from "styled-components";

export const HeaderContent = styled.div`
  position: relative;
  width: 100vw;
  height: 18.5rem;
  overflow: hidden;
  background: ${props => props.theme.blue400};
  
  img.cover {
    position: absolute;
    width: 100%;
    height: 18.5rem;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  
  div.logo-container {
    position: relative;
    height: 18.5rem;
    padding: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: center; /* horizontal */
  }

  /* A logo */
  img.logo {
    width: 9.25rem;
    height: auto;
  }
`;
