const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		validate: {
			validator: function (v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message : props => `${props.value} is not a valid email`
		},
		

	},
	password : {
		type : String,
		required : true,
		minLength : [6, "password must be at least 6 character"] ,
	},
	roles: {
		type: [String],
		required: true,
		default: ['STUDENT'],
	},
	accountStatus: {
		type: String,
		enum: ['PENDING', 'ACTIVE', 'REJECTED'],
		default: 'PENDING',
		required: true,
	},
})


const User = mongoose.model('User', userSchema);
module.exports = User