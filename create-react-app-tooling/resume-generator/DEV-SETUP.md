# Belajar React - Project - Resume Builder

Disini akan dijelaskan step by step untuk setup solusi Resume Builder dengan React.

Setup dan Instalasi:

1. Buat project react dengan npx
   
   ```powershell
   npx create-react-app resume-generator
   ```

2. Clean up file yang tidak diperlukan
   
   delete file-file yang tidak diperlukan seperti:
   
   ```js
   App.test.js
   index.css
   logo.svg
   reportWebVitals.js
   setupTest.js
   ```
   
   ![](assets/2025-07-02-10-59-00-image.png)
   
   buka file` index.js` dan hapus beberapa reference di import ...:
   
   ![](assets/2025-07-02-11-07-41-image.png)
   
   Hapus file-file:
   
   ```jsx
   import './index.css';
   import reportWebVitals from './reportWebVitals';
   reportWebVitals();
   ```
   
   buka file `App.js` dan hapus:
   
   ```js
   import logo from './logo.svg';
   
   <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header>
   ```
   
   Setelah semua sudah dihapus, lakukan start aplikasi untuk melihat apakah masih ada yang error atau tidak.
   
   ```powershell
   npm start
   ```
   
   ![](assets/2025-07-02-11-20-57-image.png)

3. Install semua file dependensi yang diperlukan
   
   yang perlu diinstall:
   
   ```powershell
   axios
   redux
   react-redux
   redux-thunk
   redux-persist
   ```
   
   ```powershell
   npm i axios redux react-redux redux-thunk redux-persist
   ```

Part selanjutnya adalah membuat aplikasi (Part 1) dengan langkah-langkah sebagai berikut:

1. Install library untuk style
   
   install Radix-UI
   
   ```powershell
   npm i @radix-ui/themes
   ```
   
   Buka file` index.js` untuk add reference radix ui yang sebelumnya telah terinstall (**import css reference**)
   
   ```powershell
   import "@radix-ui/themes/styles.css";
   ```
   
   ![](assets/2025-07-02-11-50-32-image.png)
   
   Langkah selanjutnya adalah Add Theme Component di index.js
   
   ```powershell
   import { Theme } from "@radix-ui/themes";
   ```
   
    ![](assets/2025-07-02-11-53-42-image.png)

2. Buat form untuk create resume
   
   Langkah-langkah yang diperlukan:
   
   - buat folder components
     
     ![](assets/2025-07-02-11-55-57-image.png)
   
   - buat jsx form
     
     ![](assets/2025-07-02-12-46-01-image.png)
   
   - 

3. Simpan semua input ke redux
   
   Implementasi redux untuk menyimpan semua dari textarea.
   
   - buat folder `redux`
   
   - buat sub folder `redux\actions`
   
   - buat file `redux\actions\resumeActions.js`
   
   - buat file `redux\actions\userActions.js`
   
   - buat sub folder `redux\reducers`
   
   - buat file `redux\reducers\resumeReducers.js`
   
   - buat file `redux\reducers\userReducers.js`
   
   ![](assets/2025-07-03-13-15-09-image.png)
   
   buat file rootReducers.js untuk menggabungkan resumeReducers dan userReducers agar bisa diakses secara global.
   
   - buat file rootReducers.js
   
   - masukkan code seperti dibawah ini:
     
     ```jsx
     import { combineReducers } from "redux";
     import userReducer from "./reducers/userReducers";
     import resumeReducer from "./reducers/resumeReducers";
     
     const rootReducer = combineReducers({
       user: userReducer,
       resume: resumeReducer,
     });
     
     export default rootReducer;
     ```
   
   implement rootReducer ke file stores.js
   
   - import library yang diperlukan
     
     ```jsx
     import { applyMiddleware, legacy_createStore } from "redux";
     import rootReducer from "./rootReducer";
     import { persistStore, persistReducer } from "redux-persist";
     import storage from "redux-persist/lib/storage";
     import {thunk} from "redux-thunk";
     ```
   
   - Tambahkan beberapa line code untuk implementasinya
     
     ```jsx
     const persistConfig = {
       key: "root",
       storage: storage,
       whitelist: ["user", "resume"],
       blackList: [],
     };
     
     const persistedReducer = persistReducer(persistConfig, rootReducer);
     
     const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
     
     let persistor = persistStore(store);
     export { store, persistor };
     ```
   
   - Buka file index.js
     
     supaya store.js bisa diakses secara global, maka lakukan penambahan di index.js. yang perlu ditambahkan adalah:
     
     ```jsx
     import {Provider} from "react-redux";
     import { PersistGate } from "redux-persist/integration/react"
     import { store, persistor } from "./redux/stores";
     ```
   
   - Ubah code dari sebelumnya:
     
     ```jsx
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(
       <React.StrictMode>
         <Theme>
           <App />
         </Theme>
       </React.StrictMode>
     );
     ```
     
     menjadi
     
     ```jsx
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(
       <React.StrictMode>
         <Theme>
           <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
               <App />
             </PersistGate>
           </Provider>
         </Theme>
       </React.StrictMode>
     ```
   
   - Buka Form.jsx dan tambahkan implementasi dari redux
   
   - 
   
   - 
