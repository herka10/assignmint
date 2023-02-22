const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    password: String
    events: [Event]
    groups: [Group]
    items: [Item]
}

type Event {
    _id: ID
    title: String
    name: String
    startDate: String
    dueDate: String
}

type List {
    _id: ID
    listName: String
    createdAt: String
    itemsCount: Int
    items: [Item]
}

type Item {
    _id:ID
    itemDescription: String
    quantity: Int
}

type Group {
    _id: ID
    title: String
    users: [User]
    quantity: Int
    events: [Event]
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
    users: [User]
    user(name: String!): User
    lists(name: String!): [List]
    list(_id: ID!): List
    items: [Item]
    item(_id: ID!): Item
    events: [Event]
    event(title: String!): Event
    groups: [Group]
    group(title: String!): Group
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    signUpUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String!, email: String!, password: String!, groups: [ID], events: [ID]): User
    removeUser(name: String!, email: String!, password: String!, groups: [ID], events: [ID]): User
    addGroup(title: String!, name: String, users: String!): Group
    updateGroup(title: String!, name: String, users: [ID]): Group
    removeGroup(title: String!, name: String, users: [ID]): Group
    addEvent(title: String!, name: String, startDate: String!, dueDate: String!): Event
    updateEvent(title: String!, name: String, startDate: String!, dueDate: String!): Event
    deleteEvent(title: String!, name: String, startDate: String!, dueDate: String!): Event
    addList(listName: String!, createAt: String): List
    updateList(listName: String!, createAt: String): List
    removeList(listName: String!, createAt: String): List
    addItem(itemDescription: String, quantity: Int): User
    removeItem(_id: ID!): User
}
`;

module.exports = typeDefs