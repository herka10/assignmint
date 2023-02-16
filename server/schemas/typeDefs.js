const typeDefs = `
type User {
    _id: ID
    firstName:String
    email: string
    events: [Event]
    groups: [Group]
}

type Event {
    _id: ID
    title: String
    firstName: String
    dueDate: Date
    dueDate: Date
}

type Lists {
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

type Groups {
    _id: ID
    title: String
    user: [User]
    quantity: Int
    events: [Event]
}

type Query {
    me: User
    user: [User]
    user(firstName: String!): User
    lists(firstName: String!): [List]
    list(_id: ID!): List
    items: [Item]
    item(_id: ID!): Item
    events: [Event]
    evnt(title: String!): Event
    groups: [Group]
    group(title: String!): Group
}
`

module.exports = typeDefs