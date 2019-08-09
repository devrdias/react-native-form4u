/**
 *
 * This file contains default validations for fields by type
 * Return a object with errors by field.
 */

const validate = (fields) => {
  const arrErrors = fields.map(({
    type, value, name, label, required,
  }) => {
    const errors = {};

    switch (type) {
      case 'email':
        if (!value) {
          errors[name] = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors[name] = 'Email address is invalid';
        }
        break;

      default:
        break;
    }

    if (required) {
      if (!value) {
        errors[name] = `${label} is required`;
      }
    }

    return errors;
  });

  debugger;

  return arrErrors.reduce((objs, o) => o, {});
};

export default validate;
