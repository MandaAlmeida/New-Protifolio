import { Field } from "formik";

interface InputProps {
  text: string;
  placeholder: string;
  type: string;
  as?: string;
}

function Input(props: InputProps) {
  const { text, placeholder, type, as } = props;
  return (
    <section>
      <label
        className=" text-gray1 dark:text-white text-base font-bold"
        htmlFor={type}
      >
        {text}
      </label>
      <Field
        className="w-full border border-black dark:border-white p-3 rounded-xl text-gray2 text-xs font-bold mt-2 outline-none max-h-32"
        type={type}
        name={type}
        placeholder={placeholder}
        as={as}
      />
    </section>
  );
}

export default Input;
