
const asyncExpressHandler = (callback)=>{
	return (req,res,nxt)=>{
		callback(req,res,nxt).catch(nxt);
	}
}

const customErrorHandler = (err,req,res,nxt)=>{
	if (!err.status){
		console.log("ERROR AT: ",err.stack)
		err.status = 500;
	}

	console.log("ERROR: ",err.message)

	res.status(err.status).json({
		message:"there was an error",
		error:err.message
	});
}

module.exports = {
	customErrorHandler,
	asyncExpressHandler
};
