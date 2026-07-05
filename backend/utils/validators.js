const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateRequired = (fields, body) =>
  fields.filter((field) => body[field] === undefined || body[field] === "");

module.exports = { isEmail, validateRequired };
