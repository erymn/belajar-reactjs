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
   
   - buat file `redux\actions.js`
   
   - buat file `redux\stores.js`
   
   - buat file `redux\reducers.js`
   
   ![](assets/2025-07-03-10-51-53-image.png)

4. 
