
function validateFields(body, requiredFields = []) {
  console.log(requiredFields)
  console.log(body)
  const missing = [];

  requiredFields.forEach(field => {
    console.log(body[field]);
    if (!body[field]) {
      missing.push(field);
    }
  });

  if (missing.length > 0) {
    return {
      valid: false,
      message: `Missing fields: ${missing.join(', ')}`
    };
  }

  return { valid: true };
}

export { validateFields }