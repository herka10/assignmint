import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`
export const SIGNUP_USER = gql`
    mutation signUpUser($name: String!, $email: String!, $password: String!) {
        signUpUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
                email
                password
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($name: String!, $email: String!, $password: String!) {
        updateUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`

export const REMOVE_USER = gql`
    mutation removeUser($name: String!, $email: String!, $password: String!) {
        removeUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`

export const ADD_GROUP = gql`
    mutation addGroup($title: String!, $name: String, $users: String!) {
        addGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

export const UPDATE_GROUP = gql`
    mutation updateGroup($title: String!, $name: String, $users: [ID]) {
        updateGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

export const REMOVE_GROUP = gql`
    mutation removeGroup($title: String!, $name: String, $users: [ID]) {
        removeGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

export const ADD_EVENT = gql`
    mutation addEvent($title: String!, $name: String, $startDate: String!, $dueDate: String!) {
        addEvent(title: $title, name: $name, startDate: $startDate, dueDate: $dueDate) {
            token
            event {
                _id
                name
            }
        }
    }
`

export const UPDATE_EVENT = gql`
    mutation updateEvent($title: String!, $name: String, $startDate: String!, $dueDate: String!) {
        updateEvent(title: $title, name: $name, startDate: $startDate, dueDate: $dueDate) {
            token
            event {
                _id
                name
            }
        }
    }
`

export const DELETE_EVENT = gql`
    mutation deleteEvent($title: String!, $name: String, $startDate: String!, $dueDate: String!) {
        deleteEvent(title: $title, name: $name, startDate: $startDate, dueDate: $dueDate) {
            token
            event {
                _id
                name
            }
        }
    }
`

export const ADD_LIST = gql`
    mutation addList($listName: String!, $createAt: string) {
        addList(listName: $listName, createAt: $createAt) {
            token
            list {
                _id
                listName
            }
        }
    }
`

export const UPDATE_LIST = gql`
    mutation updateList($listName: String!, $createAt: string) {
        updateList(listName: $listName, createAt: $createAt) {
            token
            list {
                _id
                listName
            }
        }
    }
`

export const REMOVE_LIST = gql`
    mutation removeList($listName: String!, $createAt: string) {
        removeList(listName: $listName, createAt: $createAt) {
            token
            list {
                _id
                listName
            }
        }
    }
`

export const ADD_ITEM = gql`
    mutation addItem($itemDescription: String, $quantity: Int) {
        addItem(itemDescription: $itemDescription, quantity: $quantity) {
            _id
             name
            email
            items {
                _id
                itemDescription
                quantity
            }
        }
    }
`

export const REMOVE_ITEM = gql`
    mutation removeItem($_id: ID!) {
        removeItem(_id: $_id) {
            _id
            name
           email
           items {
               _id
               itemDescription
               quantity
           }
        }
    }
`