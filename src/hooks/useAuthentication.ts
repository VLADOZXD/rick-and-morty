import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth, provider } from "@/services/firebase";

const useAuthentication = () => {
  const [user, setUser] = useState<User>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogin(true);
      }
    });
  }, []);

  const facebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setIsLogin(true);
      })
      .catch((error) => {
        setTimeout(() => setErrorMessage(undefined), 2500);
        setErrorMessage(`${error.code}: ${error.message}`);
      });
  };

  const facebookLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(undefined);
        setIsLogin(false);
        router.push("/");
      })
      .catch((error) => {
        setTimeout(() => setErrorMessage(undefined), 2500);
        setErrorMessage(`${error.code}: ${error.message}`);
      });
  };

  return { user, errorMessage, isLogin, facebookLogin, facebookLogout };
};

export default useAuthentication;
