"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from 'react-redux'
import {appStore} from "../stateManagment/appStore"

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Provider store ={appStore}>
        {children}

        </Provider>
        </body>
    </html>
  );
}
