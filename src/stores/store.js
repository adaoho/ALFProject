import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const clearPersistedStateOnce = async () => {
  const hasClearedCache = localStorage.getItem("hasClearedCache");
  if (!hasClearedCache) {
    await storage.removeItem("persist:root");
    localStorage.setItem("hasClearedCache", "true");
    window.location.reload();
  }
};

clearPersistedStateOnce();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
