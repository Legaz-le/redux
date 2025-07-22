import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> {dispatch(login({ name: "Fer", age: 50, email: "Fer@gmai.com" }))}}>Login</button>
    </div>
  );
};

export default Login;
