import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const SocalLogin = () => {


    
  return (
    <div>
      <>
        <div className="text-center mb-5 mt-5">
          <h1 className="text-3xl font-bold">Social Login</h1>
        </div>
        <button
        //   onClick={() => handalSocialLogin(googleLogin)}
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
