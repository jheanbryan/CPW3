import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { UserContext } from "../../Context/UserContext";
import google from "../../assets/img/google.png";
import { auth } from "../../config/firebase";
import { Title, LoginButton, MainContainer, IconImage } from "./styles";

const Login = () => {
  const [loading, isLoading] = useState(false);

  const {
    setAuthTime,
    setExp,
    setName,
    setEmail,
    setPhotoURL,
    isSessionValid,
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSessionValid()) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    isLoading(true);

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential && auth.currentUser) {
          const { currentUser } = auth;
          const token = await currentUser.getIdTokenResult();
          const { authTime, expirationTime } = token;
          setAuthTime(new Date(authTime).getTime());
          setExp(new Date(expirationTime).getTime());
          setName(currentUser.displayName || "");
          setEmail(currentUser.email || "");
          setPhotoURL(currentUser.photoURL || "");
          navigate("/home");
        } else {
          console.log("Falha na autenticação");
        }
      })
      .catch((err) => {
        const { code, message } = err;
        console.log(code);
        console.log(message);
        isLoading(false);
      });
  };

  return (
    <MainContainer>
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      {!loading && (
        <>
        <div>
          <Title>Crypt</Title>
            <LoginButton onClick={handleLogin}>
              <IconImage src={google} alt="Login com Google" />
              <span>Entrar com Google</span>
          </LoginButton>
        </div>
        </>
      )}
    </MainContainer>
  );
};

export default Login;