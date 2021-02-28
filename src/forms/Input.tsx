import style from "./Input.module.css";

interface Spec {
  label?: string;
  required?: boolean;
  type?: string;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;

  checked?: boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export default function (props: Spec) {
  return (
    <div className={style.div}>
      <label className={style.label}>
        {props.label}
        {props.required ? <label className={style.required}>*</label> : <></>}
      </label>
      <div className={style.container}>
        <input
          type={props.type}
          required={props.required}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          className={style.input}
        />
        {props.type == "checkbox" ? (
          <>
            <div className={style.checkbox}></div>
            {props.checked ? (
              <label className={style.trueLabel}>{props.trueLabel}</label>
            ) : (
              <label className={style.falseLabel}>{props.falseLabel}</label>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
