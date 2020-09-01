import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;
const { hashSync, genSaltSync } = bcrypt;

const userSchema = new Schema(
	{
		firstName: { type: String, trim: true, required: true },
		lastName: { type: String, trim: true, required: true },
		email: { type: String, unique: true, trim: true, required: true },
		hashedPassword: { type: String, trim: true, required: true },
		about: { type: String, trim: true, default: '' },
		photo: { data: Buffer, contentType: String },
		following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	},
	{ timestamps: true }
);

//Virtualize password
userSchema
	.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.hashingPass(password, this.salt);
	})
	.get(function () {
		return this._password;
	});

//Method for virtual
userSchema.methods = {
	makeSalt: function () {
		return genSaltSync(10);
	},
	hashingPass: function (password, salt) {
		if (!password) return '';
		try {
			return hashSync(password, salt);
		} catch (err) {
			return '';
		}
	},
	comparePassword: function (password) {
		return compareSync(password, this.hashedPassword);
	},
};

export default model('User', userSchema);
