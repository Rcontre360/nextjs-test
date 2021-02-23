const app = require("./server/appInitServer");

app.listen(process.env.PORT,()=>{
	console.log("listening at port 3001");
});