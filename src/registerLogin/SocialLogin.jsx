import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            console.log(result.user)
            const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { displayName: loggedInUser.displayName, role: "user", email: loggedInUser.email, photoURL: loggedInUser.photoURL }
                fetch(`https://language-hub-server.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true } || '/');                        
                    })
        })
        .catch(error => console.log(error))
    }
    const from = location.state?.from?.pathname;
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