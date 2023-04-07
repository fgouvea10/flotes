import { Router, Route } from "electron-router-dom";

import { DefaultLayout } from "./layouts/default";
import { Blank } from "./pages/blank";
import { Document } from "./pages/document";

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  );
}
