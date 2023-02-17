import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
 } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn.js";
import Calendar from "./pages/Calendar";
import List from "./pages/List";
import Header from './components/Header'

//import { StoreProvider } from "./utils/GlobalState";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/list" element={<List />} />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
    );
  }
  
  export default App;
  
  // <div className="App">
   //   <header className="App-header">
   //     <img src={logo} className="App-logo" alt="logo" />
   //     <p>
   //       Edit <code>src/App.js</code> and save to reload.
   //     </p>
   //     <a
   //       className="App-link"
   //       href="https://reactjs.org"
   //       target="_blank"
   //       rel="noopener noreferrer"
   //     >
   //       Learn React
   //     </a>
   //   </header>
   // </div>