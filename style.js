import styled from "styled-components";

const MinhaDiv = styled.div`
    .App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;

const MinhaNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2em;
    
    a {
        text-decoration: none;
    }
`;

export { MinhaNav, MinhaDiv };
