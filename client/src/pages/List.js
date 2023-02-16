import * as React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_LISTS, QUERY_ME } from "../utils/queries";
import List from "../components/List";

const Lists = () => {
  const { loading, data } = useQuery(QUERY_LISTS);
  const { data: userData } = useQuery(QUERY_ME);
  const lists = data?.lists || [];

  const loggedIn = Auth.loggedIn();

  return (
    <div>
      <List lists={lists} title="List of User..." />
    </div>
  );
};

export default Lists;