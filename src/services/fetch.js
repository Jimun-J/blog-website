import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_APIKEY

export const getRecentPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection (first: 3, orderBy: createdAt_DESC) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        thumbnail {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getAllPosts = async () => {
    const query = `
        query MyQuery {
            posts (orderBy: title_DESC) {
                author {
                    name
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                thumbnail {
                    url
                }
                categories {
                    name
                    slug
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}