const Router = require('koa-router')

const router=module.exports=new Router()

router
    .get('/',async function(ctx){
        await ctx.render('index')
    })
    .get('/stulogin',async function(ctx){
        await ctx.render('login',{user_option:'Student'}) 
    })
    .get('/prologin',async function(ctx){
        await ctx.render('login',{user_option:'Professor'})
    })
    .get('/Student_register',async function(ctx){
        await ctx.render('register',{user_option:'Student'})
    })
    .get('/Professor_register',async function(ctx){
        await ctx.render('register',{user_option:'Professor'})
    })
    .get('/face',async function(ctx){
        await ctx.render('face')
        
    })
    .get('/Professoruser',async function(ctx){
        await ctx.render('user-pro',{user_option:'professor'})
    })
    .get('/Studentuser',async function(ctx){
        await ctx.render('user-stu',{user_option:'student'})
    })