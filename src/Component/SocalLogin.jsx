import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocalLogin = () => {
  
  const { googleLogin } = useAuth();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handalSocialLogin = socialProvider => {
    socialProvider()
    .then(result => {
        if(result.user){
            navigate(from)
        }
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
        });
    })
  }

  return (
    <div>
      <>
        <div className="text-center mb-5 mt-5">
          <h1 className="text-3xl font-bold">Social Login</h1>
        </div>
        <button
            onClick={() => handalSocialLogin(googleLogin)}
          className="w-full btn btn-outline btn-info text-xl"
        >
          <FaGoogle />
          Login with Google
        </button>

        <button
          //   onClick={() => handalSocialLogin(githubLogin)}
          className="w-full mt-4 btn btn-outline btn-accent  text-xl"
        >
          <BsGithub />
          Login with GitHub
        </button>
      </>
    </div>
  );
};

export default SocalLogin;
