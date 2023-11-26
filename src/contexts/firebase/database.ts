import {
  get,
  child,
  // set
} from "firebase/database";
import { dbRef } from "./firebase";

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
