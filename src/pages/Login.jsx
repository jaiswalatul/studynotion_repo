//import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";
import Template from "../Components/Template";
function Login({ setisloggedin }) {
  return (
    <Template
    title="welcome back"
    desc1="Build Skills for today , tommorow, and beyond"
    desc2="Education to future-proof your career"
    image={loginImg}
    formtype="login"
    setisloggedin={setisloggedin}
    />
  );
}

export default Login;
