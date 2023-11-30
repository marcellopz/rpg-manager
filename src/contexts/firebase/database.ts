import { get, child, push, set } from "firebase/database";
import auth, { dbRef } from "./firebase";

import {
  CampaignType,
  CategoryType,
  TabType,
} from "../../pages/Campaign/campaignTypes";

export async function checkIsAdmin(userId: string) {
  return get(child(dbRef, `users/${userId}/isAdmin`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export const addNewCampaign = async (campaign: Partial<CampaignType>) => {
  return push(child(dbRef, "campaigns"), campaign).then((ref) => {
    push(child(dbRef, `users/${campaign.creatorId}/campaigns`), ref.key);
  });
};

export const getCampaignInvites = async (email: string) => {
  const invites = await get(
    child(dbRef, `campaign-invites/players/${email.replace(".", "|")}`)
  );
  if (invites.exists()) {
    return invites.val();
  } else {
    return null;
  }
};

export const getCampaigns = async () => {
  const campaigns = await get(
    child(dbRef, `users/${auth.currentUser?.uid}/campaigns`)
  );
  if (campaigns.exists()) {
    return campaigns.val();
  } else {
    return null;
  }
};

export const getCampaign = async (campaignId: string) => {
  return Promise.all([
    get(child(dbRef, `campaigns/${campaignId}/backdropImage`)),
    get(child(dbRef, `campaigns/${campaignId}/creatorId`)),
    get(child(dbRef, `campaigns/${campaignId}/description`)),
    get(child(dbRef, `campaigns/${campaignId}/name`)),
    get(child(dbRef, `campaigns/${campaignId}/categories`)),
  ]).then((values) => {
    const campaign = {
      backdropImage: values[0].val(),
      creatorId: values[1].val(),
      description: values[2].val(),
      name: values[3].val(),
      categories: values[4].val(),
    } as CampaignType;
    return campaign;
  });
};

export const invitePlayer = async (
  campaignId: string,
  campaignName: string,
  email: string,
  playerId: string
) => {
  set(
    child(dbRef, `campaign-invites/campaigns/${campaignId}/${playerId}`),
    email
  );
  push(child(dbRef, `campaign-invites/players/${email.replace(".", "|")}`), {
    campaignId,
    campaignName,
  });
};

export const getPlayerCampaign = async (
  campaignId: string,
  playerId: string
) => {
  const player = await get(
    child(dbRef, `campaigns/${campaignId}/players/${playerId}`)
  );
  if (player.exists()) {
    return player.val();
  } else {
    return null;
  }
};

export const addCategoryCampaign = async (
  campaignId: string,
  category: CategoryType,
  playerId: string
) => {
  if (playerId === "") {
    // add to campaign
    push(child(dbRef, `campaigns/${campaignId}/categories`), category);
    return;
  }
  push(
    child(dbRef, `campaigns/${campaignId}/players/${playerId}/categories`),
    category
  ); // add to player
};

export const addTabCampaign = async (
  campaignId: string,
  tab: TabType,
  playerId: string,
  categoryId: string
) => {
  if (playerId === "") {
    // add to campaign
    push(
      child(dbRef, `campaigns/${campaignId}/categories/${categoryId}/tabs`),
      tab
    );
    return;
  }
  // add to player
  push(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs`
    ),
    tab
  );
};

export const deleteTab = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  playerId: string
) => {
  if (playerId === "") {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}`
      ),
      null
    );
    return;
  }
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${tabId}`
    ),
    null
  );
  return;
};

export const deleteCategory = async (
  campaignId: string,
  categoryId: string,
  playerId: string
) => {
  if (playerId === "") {
    set(child(dbRef, `campaigns/${campaignId}/categories/${categoryId}`), null);
    return;
  }
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}`
    ),
    null
  );
  return;
};

export const saveTabContent = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  playerId: string,
  content: string
) => {
  if (playerId === "") {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content`
      ),
      content
    );
    return;
  }
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${tabId}/content`
    ),
    content
  );
  return;
};

export const getTabContent = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  playerId: string
) => {
  if (playerId === "") {
    const content = await get(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content`
      )
    );
    if (content.exists()) {
      return content.val();
    } else {
      return null;
    }
  }
  const content = await get(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${tabId}/content`
    )
  );
  if (content.exists()) {
    return content.val();
  } else {
    return null;
  }
};

export const acceptInvite = async (campaignId: string) => {
  set(
    child(dbRef, `campaigns/${campaignId}/players/${auth.currentUser?.uid}`),
    {
      id: auth.currentUser?.uid,
      name: auth.currentUser?.displayName,
    }
  )
    .then(() => {
      push(
        child(dbRef, `users/${auth.currentUser?.uid}/campaigns`),
        campaignId
      );
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const saveEmailUid = async () => {
  set(
    child(dbRef, `user-emails/${auth.currentUser?.email?.replace(".", "|")}`),
    auth.currentUser?.uid
  );
};

export const getUidByEmail = async (email: string) => {
  const uid = await get(child(dbRef, `user-emails/${email.replace(".", "|")}`));
  if (uid.exists()) {
    return uid.val();
  } else {
    return null;
  }
};
