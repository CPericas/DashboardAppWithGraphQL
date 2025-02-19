import { gql } from "@apollo/client";

export const GET_USER_PROFILE = gql`
    query GetUserProfile($id: ID!) {
        user(id: $id) {
            id
            username
            email
            address {
                geo {
                    lat
                    lng
                }
            }
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts($id: ID!) {
        user(id: $id) {
            posts {
                data {
                    id
                    title
                }
                
            }
        }  
    }
`;

export const GET_POST_DETAILS = gql`
    query GetPostDetails($id: ID!) {
        post(id: $id) {
            id
            title
            body
        }
    }
`;

export const GET_ALBUM = gql`
  query GetAlbum($id: ID!) {
    album(id: $id) {
      id
      title
    }
  }
`;

export const GET_TODO = gql`
    query GetTodo($id: ID!) {
        todo(id: $id) {
        id
        title
        completed
        }
    }
`;
  


