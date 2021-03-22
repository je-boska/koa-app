const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const render = require('koa-ejs')

const app = new Koa()
const router = new Router()

const things = ['Food', 'Music', 'Coding']

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
})

app.use(router.routes())

router.get('/', index)
router.get('/add', showAdd)

async function index(ctx) {
  await ctx.render('index', {
    title: 'Things:',
    things,
  })
}

async function showAdd(ctx) {
  await ctx.render('add')
}

console.log('Server is running on port 3000')
app.listen(3000)
