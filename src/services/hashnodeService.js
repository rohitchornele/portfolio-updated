const query = `
    {
        publication(host: "rohitchornele.hashnode.dev") {
            title
            url
            posts(first: 6) {
            totalDocuments
                edges {
                    node {
                        title
                        url
                        publishedAt
                        seo {
                            description
                        }
                        coverImage {
                            url
                        }
                    }
                }
            }
        }
    }
`

export const fetchPosts = async () => {
    const response = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    const ApiResponse = await response.json()

    console.log("ApiResponse = ", ApiResponse)
   
    return  ApiResponse.data.publication.posts.edges

}
