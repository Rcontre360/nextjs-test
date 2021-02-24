const next = require("next");
const url = require('url');
const app = require("./server/appInitServer");
const {Users} = require("./server/schemas");
const {asyncExpressHandler} = require("./server/error_handlers")

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare()
    .then(() => {

    app.get("/App",(req,res)=>{
		return nextApp.render(req, res, '/App', req.query)
	});

	app.get("/:nameA.example:domain.com/:nameB",asyncExpressHandler(async (req,res)=>{
		console.log(req.params)
        const {nameA,nameB} = req.params;

        const response = (await Users.find({name:nameA}))[0];

        if (!response || nameA!==nameB){
          console.log("invalid link or user doesnt exist");
          return res.redirect("/App");
        }

    		return nextApp.render(req, res, '/User', req.params)
	}))

	app.post("/newUser",asyncExpressHandler(async (req,res)=>{
		console.log(req.body)
        const {userName} = req.body

        const response = (await Users.find({name:userName}))[0];
        if (response){
          console.log("user already exist")
          return res.json({error:"user already created"});
        }

        const user = await Users.create({
          name:userName,
          url:`/${userName}.example:domain.com/${userName}`
        });
        res.json({message:"success"});
	}))

	app.get('*', (req, res) => {
          const parsedUrl = url.parse(req.url, true);
          nextHandler(req, res, parsedUrl);
    });

    app.listen(process.env.PORT, (err) => {
          if (err) throw err;
          console.log(`Listening on http://localhost:${process.env.PORT}`);
    });
});
