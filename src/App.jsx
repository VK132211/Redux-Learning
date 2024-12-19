import React from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./state/store";
function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
      </>
    </Provider>
  );
}

export default App;
