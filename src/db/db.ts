import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

export const db = SQLite.openDatabase({
  name: "adhkar.db",
  location: "default",
});
