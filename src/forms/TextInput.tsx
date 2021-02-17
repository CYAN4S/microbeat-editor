import style from "./TextInput.module.css";

interface Spec {
  label: string;
  required?: boolean;
  type?: string;
  value?: string | number | readonly string[];
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
  name?: string;
}

export default function (props: Spec) {
  return (
    <div className={style.div}>
      <label className={style.label}>{props.label}</label>
      {props.required ? (
        <label className={style.required}>*</label>
      ) : (
        <></>
      )}
      <input
        type={props.type}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
}
