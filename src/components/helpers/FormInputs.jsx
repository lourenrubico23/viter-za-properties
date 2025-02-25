import { useField } from "formik";

// INPUT
export const InputText = ({
  label = "",
  required = true,
  className = "text-[12px] outline-none  focus:border-primary ",
  onChange = null,
  refVal = null,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label !== "" && (
        <label
          htmlFor={props.id || props.name}
          className={meta.touched && meta.error ? `error-show` : ""}
        >
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        autoComplete="off"
        ref={refVal}
      />

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

// -> FORM INPUTS
export const InputSelect = ({ label, onChange = null, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "custom error-show" : "custom"}
      >
        {label}
      </label>

      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
      />

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputTextArea = ({
  label,
  required = true,
  className = "focus:border-primary text-[12px]",
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        {required && <span className="text-alert"></span>}
        {label}
      </label>
      <textarea
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        {...field}
        {...props}
        autoComplete="off"
      ></textarea>
      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

//upload photo
export const InputPhotoUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputTextOnChange = ({ label, onChange, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "custom error-show" : "custom"}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
        autoComplete="off"
        onChange={(e) => {
          onChange(e);
          field.onChange(e);
        }}
      />
      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label !== "" && typeof label !== "undefined" && (
        <label
          className="text-xs text-textNav -top-4 absolute"
          htmlFor={props.id || props.name}
        >
          {/* {required && <span className='text-alert'>*</span>} */}
          {label}
        </label>
      )}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};
