function check_req_fields_from_schema(schema) {
  const requiredFields = [];
  const paths = schema.paths;

  for (const path in paths) {
    if (paths[path].isRequired === true) {
      requiredFields.push(path);
    }
  }
  return requiredFields;
}

export {check_req_fields_from_schema}