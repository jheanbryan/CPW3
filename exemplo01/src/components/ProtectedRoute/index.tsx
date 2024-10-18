import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

type Props = {
	children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
	const { isSessionValid } = useContext(UserContext);

	if (isSessionValid())
		return children;
	
	return <Navigate to='/' replace />
}

export default ProtectedRoute;
