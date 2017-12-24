// 按照官方示例
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next)=>{
  const a = await 1
  const b = await 2
  console.log('hello world', a, b)
});


app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
