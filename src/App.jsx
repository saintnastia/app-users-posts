import React from "react";
import {Route, Routes} from "react-router-dom";

import NotFound from "./screens/NotFound";
import AllUsers from "./screens/AllUsers";
import User from "./screens/User";

const App = () => {
  return(
      <>
          <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/all-users/">
                  <Route index element={<AllUsers/>}/>
                  <Route path=":id" element={<User/>}/>
              </Route>
          </Routes>
      </>
  )
}

export default App;
