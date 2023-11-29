import {
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import auth from "./firebase/firebase";
import NameDialog from "./name-dialog/NameDialog";
import { checkIsAdmin, getCampaigns } from "./firebase/database";

interface AuthContextType {
  authUser: User | null;
  signOutRpg: () => JSX.Element;
  signUpEmailPwd: (email: string, password: string) => void;
  signInEmailPwd: (email: string, password: string) => void;
  signInGoogle: () => void;
  handleUpdateProfile: (name: string, photoURL: string) => void;
  handleUserEditProfile: () => void;
  campaignIds: string[];
  isAdmin: boolean | null | undefined;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const provider = new GoogleAuthProvider();

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  signOutRpg: () => <Navigate to="/" />,
  signUpEmailPwd: () => {},
  signInEmailPwd: () => {},
  signInGoogle: () => {},
  handleUpdateProfile: () => {},
  handleUserEditProfile: () => {},
  campaignIds: [],
  isAdmin: false,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userEditingProfile, setUserEditingProfile] = useState<boolean>(false);
  const [campaignIds, setCampaignIds] = useState<string[]>([]);
  // const [invites, setInvites] = useState<any[]>([]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => {
      listen();
    };
  }, []);

  useEffect(() => {
    if (authUser) {
      checkIsAdmin(authUser.uid).then((res) => {
        setIsAdmin(res);
      });
      getCampaigns().then((res) => {
        if (res === null) return;
        setCampaignIds(Object.values(res));
      });
      // getInvites(authUser.email).then((res) => {
      //   console.log(res);
      // }
    }
  }, [authUser]);

  const signInGoogle = async () => {
    signInWithPopup(auth, provider);
  };

  const signInEmailPwd = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const signUpEmailPwd = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutRpg = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        setAuthUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
    return <Navigate to="/" />;
  };

  const handleUpdateProfile = (name: string, photoURL: string) => {
    if (!authUser) return;
    updateProfile(authUser, {
      displayName: name,
      photoURL: photoURL === "" ? undefined : photoURL,
    }).then(() => {
      window.location.reload();
    });
  };

  const handleUserEditProfile = () => {
    setUserEditingProfile(true);
  };

  const handleUserEditProfileClose = () => {
    setUserEditingProfile(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        signOutRpg,
        signUpEmailPwd,
        signInEmailPwd,
        signInGoogle,
        handleUpdateProfile,
        handleUserEditProfile,
        campaignIds,
        isAdmin,
      }}
    >
      {children}
      <NameDialog
        open={(authUser && !authUser.displayName)!! || userEditingProfile}
        onSave={handleUpdateProfile}
        onClose={handleUserEditProfileClose}
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
