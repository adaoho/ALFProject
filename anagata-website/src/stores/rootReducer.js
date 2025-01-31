import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { toast } from "sonner";
import storage from "redux-persist/lib/storage";
import mainReducer from "./mainSlices";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_APP_CREDENTIALS || "",
  onError: function (error) {
    toast.error("Invalid Credentials Key");
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
};

const appReducer = combineReducers({
  main: mainReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
