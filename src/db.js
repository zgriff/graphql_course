const users = [{
    id:'1',
    name:'Zach',
    email:'zz@zz.com',
    age:23
},{
    id:'2',
    name:'Elyse',
    email:'ee@zz.com'
},{
    id:'3',
    name:'Michey',
    email:'mich@zz.com'
}]

const posts = [{
    id:'1',
    title:'Hello world',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero.',
    published:true,
    author:'1'
},{
    id:'2',
    title:'goodnight moon',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, explicabo ex voluptatum nihil tempora tempore expedita iste. Dolore, laborum.',
    published:true,
    author:'1'
},{
    id:'3',
    title:'the mourning son',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati facilis eum nostrum et id. Non porro consectetur debitis, quam temporibus, soluta earum quae laborum tenetur eum pariatur, cumque natus minima ducimus laboriosam ea. Ducimus totam impedit nostrum sit sequi ratione, eveniet accusamus, cumque dolorum doloremque tenetur dolor, non quam.',
    published:true,
    author:'2'
}]

const comments = [{
    id:'1',
    text: '*** ipsum dolor sit amet consectetur adipisicing elit. Libero, vero.',
    author:'2',
    post:'1'
},{
    id:'2',
    text: '*** ipsum dolor sit amet consectetur adipisicing elit. Modi vel, explicabo ex voluptatum nihil tempora tempore expedita iste. Dolore, laborum.',
    author:'1',
    post:'2'
},{
    id:'3',
    text: '*** ipsum dolor sit amet consectetur adipisicing elit. At obcaecati facilis eum nostrum et id. Non porro consectetur debitis, quam temporibus, soluta earum quae laborum tenetur eum pariatur, cumque natus minima ducimus laboriosam ea. Ducimus totam impedit nostrum sit sequi ratione, eveniet accusamus, cumque dolorum doloremque tenetur dolor, non quam.',
    author:'2',
    post:'1'
},{
    id:'4',
    text: 'pickles',
    author:'3',
    post:'3'
}]

const db = {
    users,
    posts,
    comments
}
export {db as default}