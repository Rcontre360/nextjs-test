
const {model,Schema} = require("mongoose");
const STRING = {
	type:String,
	required:true,
	trim:true
}

const UserSchema = new Schema({
	name:STRING,
	url:STRING,
});

module.exports = {
	Users:model("users",UserSchema),
	Messages:model("messages",MessageSchema),
};


