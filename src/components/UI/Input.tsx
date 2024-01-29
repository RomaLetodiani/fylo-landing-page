type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  hasError?: boolean;
  errorMessage?: string;
};

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  hasError,
  errorMessage,
}: Props) => {
  return (
    <div className="w-full min-w-44">
      <input
        className={`${
          hasError ? 'border-red-500' : 'border-gray-300'
        } border rounded-md p-3 w-full outline-none`}
        type={type ?? 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && (
        <p className="absolute text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
