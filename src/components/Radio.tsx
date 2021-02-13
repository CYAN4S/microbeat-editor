interface RadioProps {
  name: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  state: any;
}

function Radio(props: { env: RadioProps; value: any }) {
  return (
    <input
      type="radio"
      name={props.env.name}
      value={props.value}
      onChange={props.env.onChange}
      checked={props.env.state == props.value ? true : false}
    ></input>
  );
}

export default Radio;
