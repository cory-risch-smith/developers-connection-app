import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const postSchema = new Schema(
	{
		text: { type: String, required: true },
		photo: { data: Buffer, contentType: String },
		like: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		comments: [
			{
				text: String,
				created: { type: Date, default: Date.now },
				postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
			},
		],
		postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

export default model('Post', postSchema);
