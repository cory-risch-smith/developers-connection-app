/** @format */

import ExpressValidator from 'express-validator';

const { body, validationResult } = ExpressValidator;

export default {
  createRules: () => {
    return [
      body('firstName', ' First Name is required').not().isEmpty(),
      body('lastName', 'Last Name is required').not().isEmpty(),
      body('email', 'Email valid email address').isEmail(),
      body('password', 'Minimum 6 Characters are required').isLength({ min: 6 }),
    ];
  },
  updateRules: () => {
    return [
      body('firstName', ' First Name is required').not().isEmpty(),
      body('lastName', 'Last Name is required').not().isEmpty(),
      body('email', 'Email valid email address').isEmail(),
      body('about', 'About is required').not().isEmpty(),
      body('password', 'Minimum 6 Characters are required').isLength({ min: 6 }),
    ];
  },
  loginRules: () => {
    return [
      body('email', 'Email valid email address').isEmail(),
      body('password', 'Password is required').not().isEmpty(),
    ];
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
