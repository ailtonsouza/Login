export default function getValidationErros(err) {
  const validationErrors = {};

  err.inner.forEach((e) => {
    validationErrors[e.path] = e.message;
  });

  return validationErrors;
}
