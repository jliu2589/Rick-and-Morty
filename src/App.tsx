import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div>Rick and Morty</div>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
