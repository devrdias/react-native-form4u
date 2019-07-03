/**
 *
 * This file is to be used to perform all form validation.
 * It is keep apart on a different file for organization.
 * As validate is a JavaScript function, you can perform any kind of data manipulation/validation.
 * Return a object with errors by field.
 */

/**
 *
 * @param {*} { firstName, lastName, email, subject, password }
 * @returns errors: {}
 */
const validate = ({ firstName, lastName, email, subject, password }) => {
  const errors = {};

  if (!firstName.value) {
    errors.firstName = "First name is required";
  }
  if (!lastName.value) {
    errors.lastName = "Last name is required";
  }

  if (!email.value) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.email = "Email address is invalid";
  }

  if (!subject.value) {
    errors.subject = "A subject of interest is required.";
  }

  if (!password.value) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validate;
