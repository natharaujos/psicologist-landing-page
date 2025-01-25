import styled from "styled-components";

const Video = styled.video`
  width: 50%; // a imagem ocupará no máximo 100% da largura do container
  height: 80%; // a altura se ajustará automaticamente para manter a proporção
  object-fit: contain; // garante que a imagem seja exibida completamente dentro do container, sem cortes
  border-radius: 2rem;
`;

export default Video;
