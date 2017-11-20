// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Peter',
    title: 'Being the Cheif apostle is pretty cool',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'James',
    title: 'Show me by your works the evidence of your faith',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'John',
    title: 'My gospel is better than your gospel yo.',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Thomas',
    title: 'I doubt this ressurection thing till I see it with my own eyes',
    body: 'Blog post number 4'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

//get rate page
app.get('/getrate', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('rate', { posts: posts })
})

app.listen(8080)

console.log('listening on port 8080')
