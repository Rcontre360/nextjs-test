const next = require("next");
const url = require('url');
const app = require("./server/appInitServer");

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare()
    .then(() => {

    app.get("/App",(req,res)=>{
		return nextApp.render(req, res, '/App', req.query)
	});

	app.get("/:log.example:domain.com/:name",(req,res)=>{
		console.log(req.params)
		return nextApp.render(req, res, '/User', req.params)
	})

	app.post("/newUser",(req,res)=>{
		console.log(req.body)
		return nextApp.render(req, res, '/App', req.query)
	})

	 app.get('*', (req, res) => {
        // res.set({
        //   'Cache-Control': 'public, max-age=3600'
        // });
        const parsedUrl = url.parse(req.url, true);
        nextHandler(req, res, parsedUrl);
      });

    app.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`Listening on http://localhost:${process.env.PORT}`);
    });
});
