import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import styles from './styles.module.css'
import { UserContext } from "../../context/UserContext";
import { Grid } from 'react-loader-spinner';

const Logout = () => {
  const { setExp, setAuthTime } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        setExp(0);
        setAuthTime(0);
        navigate('/login');

      }).catch((err) => {
        const { code, message } = err;
        console.log(code, message);
      });
  }, [])

  return(
    <div className={styles.container}>
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
    </div>
  )
};

export default Logout;