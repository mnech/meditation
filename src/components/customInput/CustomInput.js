import { useField } from "formik";

function CustomInput(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default CustomInput;
