import styled from "styled-components";

const WomanImage = styled.img`
  max-width: 100%; // a imagem ocupará no máximo 100% da largura do container
  height: auto; // a altura se ajustará automaticamente para manter a proporção
  object-fit: contain; // garante que a imagem seja exibida completamente dentro do container, sem cortes
`;

export default WomanImage;
