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
import {
  checkIsAdmin,
  getCampaignInvites,
  getCampaigns,
  getLanguage,
  getUidByEmail,
  saveEmailUid,
} from "./firebase/database";
import { useTranslation } from "react-i18next";
import allCampaignsMocks from "./firebase/campaignMock";

interface InviteType {
  campaignId: string;
  campaignName: string;
}

interface AuthContextType {
  authUser: User | null;
  signOutRpg: () => JSX.Element;
  signUpEmailPwd: (email: string, password: string) => void;
  signInEmailPwd: (email: string, password: string) => void;
  signInGoogle: () => void;
  handleUpdateProfile: (name: string, photoURL: string) => void;
  handleUserEditProfile: () => void;
  campaignIds: string[] | null;
  isAdmin: boolean | null | undefined;
  invites: InviteType[];
  authLoading: boolean;
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
  campaignIds: null,
  isAdmin: false,
  invites: [],
  authLoading: true,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userEditingProfile, setUserEditingProfile] = useState<boolean>(false);
  const [campaignIds, setCampaignIds] = useState<string[] | null>(null);
  const [invites, setInvites] = useState<InviteType[]>([]);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setAuthLoading(false);
    });

    return () => {
      listen();
    };
  }, []);

  useEffect(() => {
    if (authUser) {
      getLanguage(authUser.uid).then((res) => {
        if (res === null) return;
        i18n.changeLanguage(res);
      });
      checkIsAdmin(authUser.uid).then((res) => {
        setIsAdmin(res);
      });
      getCampaigns().then((res) => {
        if (res === null) {
          setCampaignIds([]);
          return;
        }
        setCampaignIds(Object.values(res));
      });
      getUidByEmail(authUser.email as string).then((res) => {
        if (res === null) saveEmailUid();
      });
    }
    if (
      auth.currentUser?.uid &&
      allCampaignsMocks.campaigns["1"].players &&
      !(auth.currentUser?.uid in allCampaignsMocks.campaigns["1"].players)
    ) {
      allCampaignsMocks.campaigns["1"].players[auth.currentUser?.uid] =
        allCampaignsMocks.campaigns["1"].players["guest"];
      if (allCampaignsMocks.campaigns["1"].combat) {
        allCampaignsMocks.campaigns["1"].combat!.dmId = auth.currentUser?.uid;
        allCampaignsMocks.campaigns["1"].combat!.dmName = auth.currentUser
          ?.displayName as string;
      }
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser && authUser.email)
      getCampaignInvites(authUser.email).then((res) => {
        if (res === null) return;
        if (campaignIds === null) return;
        setInvites(
          Object.values(res as InviteType[]).filter(
            (inv: InviteType) => !campaignIds.includes(inv.campaignId)
          )
        );
      });
  }, [authUser, campaignIds]);

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
        console.warn("signed out");
        setAuthUser(null);
      })
      .catch((error) => {
        console.error(error);
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
    saveEmailUid();
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
        invites,
        authLoading,
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
