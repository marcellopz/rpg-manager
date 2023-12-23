import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./profile.css";
import LoadDelay from "../../generic-components/LoadDelay";
import { t } from "i18next";

const Profile: React.FC = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="profile-background">
      <div className="profile">
        <div className="profile-img-container">
          <LoadDelay timeout={500}>
            <img
              src={
                authUser?.photoURL ??
                "https://img.freepik.com/vetores-gratis/design-de-vetores-coloridos-de-maca_341269-1123.jpg?w=2000"
              }
              alt="Profile Picture"
              width={150}
            />
          </LoadDelay>
        </div>
        <div>
          <h2>{authUser?.displayName}</h2>
          <p>
            {t("EMAIL")}: {authUser?.email}
          </p>
          <p>
            {t("MEMBER_SINCE")}: {authUser?.metadata.creationTime}
          </p>
          {/* <p>Number of campaigns: X</p> */}
        </div>
      </div>
      {/* <div>
        <button>Edit profile</button>
      </div> */}
    </div>
  );
};

export default Profile;
