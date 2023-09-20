import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
export const client = new QueryClient();

root.render(
  // <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </RecoilRoot>
  // </React.StrictMode>
);
