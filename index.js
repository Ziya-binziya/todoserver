const jsonServer=require('json-server')
const MPserver=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()
const PORT=3000||process.env.PORT
MPserver.use(middleware)
MPserver.use(router)
MPserver.listen(PORT,()=>{
    console.log(`ToDoApp server running at :${PORT}`);
})