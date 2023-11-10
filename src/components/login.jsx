import { useState } from "react";
import { icon } from "../constants/index";
import Input from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { siginUserFailure, siginUserSuccess, signUserStart } from "../slice/auth";
import AuthService from "../service/auth"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch= useDispatch();
  const {isLoading} = useSelector((state)=> state.auth)
  const loginHandler = async (e)=>{
    e.preventDefault();
    dispatch(signUserStart())
    const user = {email,password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(siginUserSuccess(response.data))
    } catch (error) {
      dispatch(siginUserFailure())
    }
  }
  return (
    <div className="w-50 m-auto conatiner">
      <form className="text-center">
        <img className="mb-4" src={icon} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <Input
          label={"Email address"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          label={"password"}
          state={password}
          setState={setPassword}
        />
        <button className="btn btn-primary w-100 py-2" 
        type="submit"
        onClick={loginHandler}
        disabled={isLoading}
        >
          {isLoading ? "Loading...." : "Sigin in"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </div>
  );
};

export default Login;
