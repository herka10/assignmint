const typeDefs = `
type User {
    _id: ID
    firstName:String
    email: String
    events: [Event]
    groups: [Group]
}

type Event {
    _id: ID
    title: String
    firstName: String
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
    user(firstName: String!): User
    lists(firstName: String!): [List]
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
    updateUser(name: String!, email: String!, password: String!, groups: [ID], events: [ID]): User
    removeUser(name: String!, email: String!, password: String!, groups: [ID], events: [ID]): User
    addGroup(title: String!, firstName: String, users: String!): Group
    updateGroup(title: String!, firstName: String, users: [ID]): Group
    removeGroup(title: String!, firstName: String, users: [ID]): Group
    addEvent(title: String!, firstName: String, startDate: String!, dueDate: String!): Event
    updateEvent(title: String!, firstName: String, startDate: String!, dueDate: String!): Event
    deleteEvent(title: String!, firstName: String, startDate: String!, dueDate: String!): Event
    addList(listName: String!, createAt: String): List
    updateList(listName: String!, createAt: String): List
    removeList(listName: String!, createAt: String): List
    addItem(itemDescription: String, quantity: Int): Item
    removeItem(itemDescription: String, quantity: Int): Item
}
`

module.exports = typeDefs