import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center space-x-3">
        <button
         onClick={handleGoogleSignIn}
          className="btn hover:bg-[#039477] hover:border-none border-[#039477] text-[#039477] text-xl font-bold btn-circle btn-outline">G</button>
      </div>
    </div>
  );
};

export default SocialLogin;

//bg-[#039477] hover:bg-[#3bb89f]