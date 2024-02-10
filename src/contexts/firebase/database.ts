import { child } from "firebase/database";
import { get, push, set } from "./databaseSetup";
import auth, { dbRef } from "./firebase";
import {
  ActiveEffectType,
  CampaignType,
  CategoryType,
  CombatType,
  CombatantType,
  InventoryItemType,
  TabType,
} from "../../pages/Campaign/campaignTypes";
import { CharSheetType } from "../../pages/Campaign/id/details/components/character-sheet/CharSheetType";
import { ListItemWithId } from "../../pages/Campaign/id/ContentSelectionDragND";
import { CombatantTypeWithID } from "../../pages/Campaign/id/details/components/cambat-tracker/CombatTrackerRowsDragNDrop";

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
    // @ts-ignore
    push(child(dbRef, `users/${campaign.creatorId}/campaigns`), ref.key);
    return ref;
  });
};

export const getCampaignInvites = async (email: string) => {
  const invites = await get(
    child(dbRef, `campaign-invites/players/${email.replaceAll(".", "|")}`)
  );
  if (invites.exists()) {
    return invites.val();
  } else {
    return null;
  }
};

export const getLanguage = async (userId: string) => {
  const language = await get(child(dbRef, `users/${userId}/language`));
  if (language.exists()) {
    return language.val();
  } else {
    return null;
  }
};

export const setLanguage = async (userId: string, language: string) => {
  set(child(dbRef, `users/${userId}/language`), language);
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
    get(child(dbRef, `campaigns/${campaignId}/combat`)),
  ]).then((values) => {
    const campaign = {
      backdropImage: values[0].val(),
      creatorId: values[1].val(),
      description: values[2].val(),
      name: values[3].val(),
      categories: values[4].val(),
      combat: values[5].val(),
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
  push(child(dbRef, `campaign-invites/players/${email.replaceAll(".", "|")}`), {
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
  content: string | CharSheetType
) => {
  if (playerId === "") {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content`
      ),
      content
    );
    push(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/contentHistory`
      ),
      {
        content,
        timestamp: Date.now(),
        author: auth.currentUser?.displayName,
      }
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
  push(
    child(
      dbRef,
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${tabId}/contentHistory`
    ),
    {
      content,
      timestamp: Date.now(),
    }
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
    child(
      dbRef,
      `user-emails/${auth.currentUser?.email?.replaceAll(".", "|")}`
    ),
    auth.currentUser?.uid
  );
};

export const getUidByEmail = async (email: string) => {
  const uid = await get(
    child(dbRef, `user-emails/${email.replaceAll(".", "|")}`)
  );
  if (uid.exists()) {
    return uid.val();
  } else {
    return null;
  }
};

export const addItemToInventory = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  Item: InventoryItemType
) => {
  push(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory`
    ),
    Item
  );
};

export const deleteItemCampaign = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  itemId: string
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory/${itemId}`
    ),
    null
  );
};

export const updateGold = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  gold: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/playerGold`
    ),
    gold
  );
};

export const updateSilver = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  silver: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/playerSilver`
    ),
    silver
  );
}

export const updateCopper = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  copper: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/playerCopper`
    ),
    copper
  );
}

export const updateStrength = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  strength: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/playerStrength`
    ),
    strength
  );
}

export const updateUniqueItemWeight = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  itemId: string,
  weight: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory/${itemId}/item/weight`
    ),
    weight
  );
};

export const updateNumberOfItems = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  itemId: string,
  numberOfItems: number
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory/${itemId}/numberOfItems`
    ),
    numberOfItems
  );
};

export const updateNameOfItem = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  itemId: string,
  name: string
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory/${itemId}/item/name`
    ),
    name
  );
};

export const updateItemType = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  itemId: string,
  type: string
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/inventory/${itemId}/item/type`
    ),
    type
  );
};

export const editCampaignNameDescription = async (
  campaignId: string,
  name: string,
  description: string
) => {
  set(child(dbRef, `campaigns/${campaignId}/name`), name);
  set(child(dbRef, `campaigns/${campaignId}/description`), description);
};

export const saveCharImageInventory = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  image: string
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/content/playerAvatar`
    ),
    image
  );
};

export const updateCategoryListOrder = async (
  campaignId: string,
  playerId: string,
  content: ListItemWithId[]
) => {
  if (playerId === "") {
    content.forEach((item, i) => {
      set(
        child(dbRef, `campaigns/${campaignId}/categories/${item.id}/listIndex`),
        i
      );
    });
    return;
  }
  content.forEach((item, i) => {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/players/${playerId}/categories/${item.id}/listIndex`
      ),
      i
    );
  });
  return;
};

export const updateTabListOrder = async (
  campaignId: string,
  categoryId: string,
  playerId: string,
  content: ListItemWithId[]
) => {
  if (playerId === "") {
    content.forEach((item, i) => {
      set(
        child(
          dbRef,
          `campaigns/${campaignId}/categories/${categoryId}/tabs/${item.id}/listIndex`
        ),
        i
      );
      return;
    });
  }
  content.forEach((item, i) => {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${item.id}/listIndex`
      ),
      i
    );
  });
  return;
};

export const getPastVersions = async (
  campaignId: string,
  categoryId: string,
  tabId: string,
  playerId: string
) => {
  if (playerId === "") {
    const content = await get(
      child(
        dbRef,
        `campaigns/${campaignId}/categories/${categoryId}/tabs/${tabId}/contentHistory`
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
      `campaigns/${campaignId}/players/${playerId}/categories/${categoryId}/tabs/${tabId}/contentHistory`
    )
  );
  if (content.exists()) {
    return content.val();
  } else {
    return null;
  }
};

export const getCombatDetails = async (campaignId: string) => {
  const combat = await get(child(dbRef, `campaigns/${campaignId}/combat`));
  if (combat.exists()) {
    return combat.val();
  } else {
    return null;
  }
};

export const updateCombatDetails = async (
  campaignId: string,
  combat: CombatType | null
) => {
  set(child(dbRef, `campaigns/${campaignId}/combat`), combat);
};

export const addCombatant = async (
  campaignId: string,
  combatant: CombatantType
) => {
  push(child(dbRef, `campaigns/${campaignId}/combat/combatants`), combatant);
};

export const updateCombatantListOrder = async (
  campaignId: string,
  combatants: CombatantTypeWithID[]
) => {
  combatants.forEach((combatant, i) => {
    set(
      child(
        dbRef,
        `campaigns/${campaignId}/combat/combatants/${combatant.id}/orderIndex`
      ),
      i
    );
    return;
  });
};

export const updateCombatTurn = async (campaignId: string, turn: number) => {
  set(child(dbRef, `campaigns/${campaignId}/combat/turn`), turn);
};

export const updateCombatRound = async (campaignId: string, round: number) => {
  set(child(dbRef, `campaigns/${campaignId}/combat/round`), round);
};

export const updateCombatantHp = async (
  campaignId: string,
  combatantId: string,
  hp: number
) => {
  set(
    child(dbRef, `campaigns/${campaignId}/combat/combatants/${combatantId}/hp`),
    hp
  );
};

export const updateCombatant = async (
  campaignId: string,
  combatantId: string,
  combatant: CombatantType | null
) => {
  set(
    child(dbRef, `campaigns/${campaignId}/combat/combatants/${combatantId}`),
    combatant
  );
};

export const addConditionToCombatant = async (
  campaignId: string,
  combatantId: string,
  condition: ActiveEffectType
) => {
  push(
    child(
      dbRef,
      `campaigns/${campaignId}/combat/combatants/${combatantId}/activeEffects`
    ),
    condition
  );
};

export const updateCombatantCondition = async (
  campaignId: string,
  combatantId: string,
  conditionId: string,
  condition: ActiveEffectType | null
) => {
  set(
    child(
      dbRef,
      `campaigns/${campaignId}/combat/combatants/${combatantId}/activeEffects/${conditionId}`
    ),
    condition
  );
};

export const updateCombatDmNotes = async (
  campaignId: string,
  notes: string
) => {
  set(child(dbRef, `campaigns/${campaignId}/combat/dmNotes`), notes);
};
