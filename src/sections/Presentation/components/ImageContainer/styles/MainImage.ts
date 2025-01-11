import styled from "styled-components";

const MainImage = styled.img`
  max-width: 80%; // a imagem ocupará no máximo 100% da largura do container
  height: max-content; // a altura se ajustará automaticamente para manter a proporção
  object-fit: contain; // garante que a imagem seja exibida completamente dentro do container, sem cortes
  border-radius: 2rem;
`;

export default MainImage;
