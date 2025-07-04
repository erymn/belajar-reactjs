import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "resume"],
  blackList: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);
export { store, persistor };
