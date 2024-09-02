import { child, Database, get, ref, set } from "firebase/database";

export const createUser = async (
  database: Database,
  email: string,
  uid: string,
) => {
  try {
    await set(ref(database, "users/" + uid), {
      email: email,
      workouts: {},
    });
  } catch (error) {
    throw error;
  }
};

export const getUser = async (database: Database, uid: string) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users/${uid}`));

    if (!snapshot.exists()) {
      throw new Error("No data available");
    }

    return snapshot.val();
  } catch (error) {
    throw error;
  }
};
