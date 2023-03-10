import { gql } from '@apollo/client';

export const QUERY_LIST = gql`
query allLists {
    lists{
        _id
        listName
        items
    }
}
`;

export const QUERY_GROUPS = gql`
query allGroups {
    groups{
        _id
        users
    }
}
`;

export const QUERY_ME = gql `
query me {
    me {
        _id
        name
        items {
            _id
            itemDescription
            quantity
        }
    }
}
`
