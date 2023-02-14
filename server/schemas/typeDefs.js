const typeDefs = `
type User {
    _id: ID
    firstName:String
    email: string
    events: [Events]
    groups: [Groups]
}

type Event {
    _id: ID
    title: String
    firstName: String
    startDate: Date
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
    users: [Users]
    quantity: Int
    events: [Events]
}

type Query {
    me: User
    user: [Users]
    user(firstName: String!): User
    lists(firstName: String!): [List]
    list(_id: ID!): Lists
    items: [Items]
    item(_id: ID!): Item
    events: [Event]
    evnt(title: String!): Event
    groups: [Group]
    group(title: String!): Group
}
`

module.exports = typeDefs