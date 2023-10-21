'use client';
type Props = {
  label: any;
  defaultValue: any;
  onChange: any;
  name: any;
};

const ModalInput = ({ label, defaultValue, onChange, name }: Props) => {
  return (
    <div className="form-group flex flex-col">
      <label htmlFor={name} className="text-xs font-bold p-2">
        {label}
      </label>
      <input
        className="bg-black/50 w-24 py-2 px-4 text-sm font-bold rounded-xl focus:outline-none"
        min="1"
        max="60"
        type="number"
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default ModalInput;
