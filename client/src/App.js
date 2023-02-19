import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
 } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login.js";
import Calendar from "./pages/Calendar";
import List from "./pages/List";
import Header from './components/Header'
import Layout from './components/Layout'

//import { StoreProvider } from "./utils/GlobalState";


function App() {
  // const [loggedIn, setIsLoggedIn] = React.useState(false)
  const httpLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
  });
  
  const token = localStorage.getItem('id_token')
  const authentication = !token;
  const authLink = setContext((_, { headers }) => {
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
  
  

  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Header/>
            <Layout>
              <Routes>
                <Route 
                  exact path="/"
                  element={<Login />} />
                <Route 
                  path="/signup" 
                  element={authentication ? <Navigate to="/" /> : <SignUp />} />
                <Route 
                  path="/home" 
                  element={authentication ? <Navigate to="/" /> : <Home />} />
                <Route 
                  path="/calender" 
                  element={authentication ? <Navigate to='/' /> : <Calendar />} />
                <Route 
                  path="/todo" 
                  element={authentication ? <Navigate to='/' /> : <List />} />
              </Routes>
            </Layout>
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