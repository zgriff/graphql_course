const Subscription = {
    comment: {
        subscribe(parent,{postId},{db,pubsub},info) {
            const post = db.posts.find(post => post.id === postId && post.published)
            if (!post) {
                throw new Error('post not found')
            }

            return pubsub.asyncIterator(`comment ${postId}`)

        }
    },
    post: {
        subscribe(parent,{postId},{db,pubsub},info) {
            return pubsub.asyncIterator(`posts`)
        }
    }
}

export {Subscription as default}  