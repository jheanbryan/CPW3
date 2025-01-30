import { MainContainer } from "./styles";
import notFound from '../../assets/img/notFound.svg'

const NotFound = () => {
    return (
        <>
        <MainContainer>
            <img src={notFound} alt="" />
            <p>Página não encontrada</p>
        </MainContainer>
        </>
    );


};

export default NotFound;