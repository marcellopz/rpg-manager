import {
  DataSnapshot,
  get as firebaseGet,
  push as firebasepush,
  set as firebaseSet,
} from "firebase/database";
import allCampaignsMocks, { allCampaignsType } from "./campaignMock";

function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getNestedProperty(obj: allCampaignsType, keys: string[]) {
  let result = obj;
  for (let key of keys) {
    if (result && key in result) {
      // @ts-ignore
      result = result[key];
    } else {
      return {
        val: () => null,
        exists: () => false,
      };
    }
  }
  return {
    val: () => result,
    exists: () => true,
  };
}

function setNestedProperty(obj: allCampaignsType, keys: string[], value: any) {
  let result = obj;
  for (let key of keys.slice(0, -1)) {
    if (result && key in result) {
      // @ts-ignore
      result = result[key];
    } else {
      return false;
    }
  }
  // @ts-ignore
  result[keys[keys.length - 1]] = value;
  return true;
}

export const get = (dbRef: any) => {
  if (
    window.location.pathname.startsWith("/demo-campaign") &&
    dbRef._path.pieces_[0] === "campaigns"
  ) {
    return new Promise((resolve) => {
      const result = getNestedProperty(allCampaignsMocks, dbRef._path.pieces_);
      resolve(result);
    }) as unknown as Promise<DataSnapshot>;
  }
  return firebaseGet(dbRef);
};
// export const push = firebasepush;
// export const set = firebaseSet;

export const push = (dbRef: any, obj: any) => {
  if (
    window.location.pathname.startsWith("/demo-campaign") &&
    dbRef._path.pieces_[0] === "campaigns"
  ) {
    const newKey = generateRandomString(10);
    return new Promise((resolve) => {
      setNestedProperty(
        allCampaignsMocks,
        [...dbRef._path.pieces_, newKey],
        obj as allCampaignsType
      );
      resolve(null);
    });
  }
  return firebasepush(dbRef, obj);
};
export const set = (dbRef: any, obj: any) => {
  if (
    window.location.pathname.startsWith("/demo-campaign") &&
    dbRef._path.pieces_[0] === "campaigns"
  ) {
    return new Promise((resolve) => {
      setNestedProperty(
        allCampaignsMocks,
        dbRef._path.pieces_,
        obj as allCampaignsType
      );
      resolve(null);
    }) as unknown as Promise<DataSnapshot>;
  }
  return firebaseSet(dbRef, obj);
};

export const isDemo = () => {
  return window.location.pathname.startsWith("/demo-campaign");
}