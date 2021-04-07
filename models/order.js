const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
	courses: [
		{
			course: {
				type: Object,
				required: true
			},
			count: {
				type: Number,
				required: true
			}
		}
	],
	user: {
		name: String,
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
})


// orderSchema.method('toClient', function () {
// 	const course = this.toObject()

// 	course.id = course._id
// 	delete course._id

// 	return course
// })

module.exports = model('Order', orderSchema)
