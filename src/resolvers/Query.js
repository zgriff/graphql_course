const Query = {
    users(parent, args, {db}, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, {db}, info) {
        if (!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    comments(parent,args,{db},info) {
        return db.comments
    },
    me() {
        return {
            id: 123,
            name: 'zz',
            email: 'zz@zz.com'
        }
    },
    post() {
        return {
            id: 1234,
            title: 'Yes hello',
            body: 'good afternoon everybody',
            published: true
        }
    }
}

export {Query as default}