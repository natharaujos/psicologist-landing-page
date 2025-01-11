import styled from "styled-components";

const Logo = styled.img`
  max-width: 5%; // a imagem ocupará no máximo 100% da largura do container
  height: max-content; // a altura se ajustará automaticamente para manter a proporção
  object-fit: contain;
`;

export default Logo;
