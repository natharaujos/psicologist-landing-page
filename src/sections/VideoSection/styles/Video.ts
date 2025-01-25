import styled from "styled-components";

const Video = styled.iframe`
  width: 560px; // a imagem ocupará no máximo 100% da largura do container
  height: 315px; // a altura se ajustará automaticamente para manter a proporção
  object-fit: contain; // garante que a imagem seja exibida completamente dentro do container, sem cortes
  border-radius: 2rem;
`;

export default Video;
