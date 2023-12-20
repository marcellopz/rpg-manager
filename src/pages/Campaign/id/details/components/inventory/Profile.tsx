import { useState } from "react";
import { Backpack } from ".";
import EditCharacterPicture from "../../../../dialogs/EditCharacterPicture";

interface ProfileProps {
  character_name: string;
  character_avatar: string;
  character_strength: number;
  character_gold: number;
  carrying_weight: number;
}

const Profile = ({
  character_name,
  character_avatar,
  character_strength,
  character_gold,
  carrying_weight,
}: ProfileProps) => {
  const [editingPicture, setEditingPicture] = useState<boolean>(false);

  return (
    <>
      <div className="profile_container inventory-background">
        <div
          className="character_photo"
          onDoubleClick={() => setEditingPicture(true)}
          style={{
            backgroundImage: `url(${
              !!character_avatar
                ? character_avatar
                : "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg"
            })`,
          }}
        ></div>
        <div className="character_s_name">
          <h5>{character_name}</h5>
        </div>
        <Backpack
          strength_box={character_strength}
          weightless_box={Math.round((character_strength * 5) / 2.2)}
          little_heavy_box={Math.round((character_strength * 10) / 2.2)}
          very_heavy_box={Math.round((character_strength * 15) / 2.2)}
          total_weight_box={Math.round((character_strength * 30) / 2.2)}
          gold_box={character_gold}
          carrying_weight={carrying_weight}
        />
      </div>
      <EditCharacterPicture
        open={editingPicture}
        onClose={() => setEditingPicture(false)}
      />
    </>
  );
};

export default Profile;
