import { Header, LogoutImage, StyledLink } from "./styles";
import Logout from '../../assets/img/logout.svg';

const HeaderComponent = () => {
  return (
    <Header>
      <StyledLink to="/home">
        Home
      </StyledLink>

      <StyledLink to="/searchCrypt">
        Buscar Criptos
      </StyledLink>

      <StyledLink to="/logout">
        <LogoutImage src={Logout} alt="Sair" />
      </StyledLink>
    </Header>
  );
};

export default HeaderComponent;
