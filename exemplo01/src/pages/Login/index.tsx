import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from 'react-loader-spinner';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";
import google from '../../assets/img/google.png';
import { auth } from "../../config/firebase";
  
const Login = () => {
  const [loading, isLoading] = useState(false);

  const {
    setAuthTime,
    setEmail,
    setName,
    setExp,
    setPhotoURL,
    isSessionValid
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSessionValid())
      navigate('/home');
  }, [])

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    isLoading(true)

    //onsole.log(provider)
    //console.log(auth)

    signInWithPopup(auth, provider)
      .then(async (results) => {
        const credential = GoogleAuthProvider.credentialFromResult(results);
        if(credential && auth.currentUser){
          const { currentUser } = auth;
          const token = await currentUser.getIdTokenResult()
          const { authTime, expirationTime } = token; 

          setAuthTime(new Date(authTime).getTime());
          setExp(new Date(expirationTime).getTime());
          setName(currentUser.displayName || '');
          setEmail(currentUser.email || '');
          setPhotoURL(currentUser.email || '');
          navigate('/home');

        } else {
          console.log('Falha ao autenticar');
        }
          

      }).catch((err) => {
        const { code, message } = err;
        console.log(code);
        console.log(message);
        isLoading(false);
      })
  };

  return (
    <div className={styles.loginPanel}>
      {loading && (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      )}

      {!loading && (
        <>
          <h1 className={styles.title}>
            Agenda
          </h1>

          <button onClick={handleLogin} className={styles.btnLogin}>
            <img src={google} alt="Login com Google" />
            <span>Entrar com Google</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Login