import ExpressValidator from 'express-validator';

const { body, validationResult } = ExpressValidator;

export default {
	createRules: () => {
		return [
			body('firstName', ' First Name is required').not().isEmpty(),
			body('lastName', 'Last Name is required').not().isEmpty(),
			body('email', 'Email valid email address').isEmail(),
			body('password', 'Minimum 6 Characters are required')
				.isLength({ min: 6 })
				.custom((value, { req }) => {
					if (value !== req.body.password2) {
						// trow error if passwords do not match
						throw new Error("Passwords don't match");
					} else {
						return value;
					}
				}),
		];
	},
	updateRules: () => {
		return [body('about', 'About is required').not().isEmpty()];
	},
	validate: (req, res, next) => {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			return next();
		}
		const extractedErrors = [];
		errors.array().map((err) => {
			extractedErrors.push({ [err.param]: err.msg });
		});

		return res.json({ errors: extractedErrors });
	},
};
