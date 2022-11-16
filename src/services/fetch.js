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
                        postCategory {
                            name
                        }
                        postTags {
                            name
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
            posts (orderBy: title_DESC, first:1000) {
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
                postCategory {
                    name
                }
                postTags {
                    name
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getDevelopmentPosts = async () => {
    const query = `
        query MyQuery {
            posts (orderBy: title_DESC, first:1000, where: {postCategory: {name: "Web Development"}}) {
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
                postCategory {
                    name
                }
                postTags {
                    name
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getDesignPosts = async () => {
    const query = `
        query MyQuery {
            posts (orderBy: title_DESC, first:1000, where: {postCategory: {name: "Web Design"}}) {
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
                postCategory {
                    name
                }
                postTags {
                    name
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getProjectPosts = async () => {
    const query = `
        query MyQuery {
            posts (orderBy: title_DESC, first:1000, where: {postCategory: {name: "Projects"}}) {
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
                postCategory {
                    name
                }
                postTags {
                    name
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getAllProjects = async () => {
    const query = `
        query MyQuery {
            projects {
            title
            slug
            createdAt
                thumbnail {
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.projects;
}

export const getDesignBookmarks = async () => {
    const query = `
        query MyQuery {
            bookmarks (where: {bookmarkCategory: {name: "Design-Reference"}}) {
                name
                description
                siteUrl
                thumbnail {
                    url
                }
                bookmarkCategory {
                    name
                }
            }
        }
      
    `

    const result = await request(graphqlAPI, query);
    return result.bookmarks;
}

export const getColorBookmarks = async () => {
    const query = `
        query MyQuery {
            bookmarks (where: {bookmarkCategory: {name: "Color & Gradation"}}) {
                name
                description
                siteUrl
                thumbnail {
                    url
                }
                bookmarkCategory {
                    name
                }
            }
        }
    
    `

    const result = await request(graphqlAPI, query);
    return result.bookmarks;
}

export const getImageBookmarks = async () => {
    const query = `
        query MyQuery {
            bookmarks (where: {bookmarkCategory: {name: "Free Stock Images"}}) {
                name
                description
                siteUrl
                thumbnail {
                    url
                }
                bookmarkCategory {
                    name
                }
            }
        }
    
    `

    const result = await request(graphqlAPI, query);
    return result.bookmarks;
}

export const getCodingBookmarks = async () => {
    const query = `
        query MyQuery {
            bookmarks (where: {bookmarkCategory: {name: "Coding"}}) {
                name
                description
                siteUrl
                thumbnail {
                    url
                }
                bookmarkCategory {
                    name
                }
            }
        }
    
    `

    const result = await request(graphqlAPI, query);
    return result.bookmarks;
}

export const getPost = async (slug) => {
    const query = `
        query MyQuery {
            post(where: {slug: "${slug}"}) {
                thumbnail {
                    url
                }
                author {
                    name
                    photo {
                        url
                    }
                }
                title
                createdAt
                content {
                    raw
                }
                postTags {
                    name
                }
            }
        }
    
    `
    const result = await request(graphqlAPI, query);
    console.log(result);
    return result.post;
}