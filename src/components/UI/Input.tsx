

import React, { useEffect, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import clsx from "clsx";

type InputProps = {
  id?: string,
  name?: string,
  className?: string,
  type?: string,
  value?: string,
  placeholder: string,
  onChange?: (e: string) => void
  required?: boolean,
  placeHolderClass?: string,
  disabled?: Boolean,
}

function Input({ id, name, className, type = "text", placeholder, value, onChange, required = false, placeHolderClass, disabled = false }: InputProps) {
  const uid = id || `input-${(Math.random() * 100).toFixed(1)}`

  // handle input
  const [input, setInput] = useState<string>(value || "");
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState<string>(type);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (value !== undefined && value !== input)
      setInput(value);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // handle input change 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    onChange?.(val);
  };

  // habdle password type input
  useEffect(() => {
    if (type === "password")
      setInputType(showPassword ? "text" : "password")
  }, [showPassword]);

  return (
    <div className="flex w-full items-center relative">
      <label
        htmlFor={uid}
        className={clsx(
          'absolute ml-3 text-[1em] transition-all duration-200 cursor-text text-gray-400',
          placeHolderClass,
          (isFocused || input) && "text-[0.8em] -translate-y-6 bg-white px-2 text-[var(--primary)]! ml-3"
        )}
      >
        {placeholder}
      </label>
      <input
        name={name}
        type={inputType}
        data-slot="input"
        id={uid}
        onChange={handleChange}
        className={clsx(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-border flex h-12 w-full min-w-0 rounded-md border px-3 py-1 bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-[var(--primary)] focus-visible:ring-[var(--primary)]/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        value={input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        disabled={disabled as boolean}
      />
      {type === "password" &&
        <label htmlFor={uid} className="cursor-pointer absolute right-3" onClick={() => setShowPassword(!showPassword)}>{!showPassword ? <EyeClosed size={17} /> : <Eye size={17} />}</label>
      }
    </div>
  );
}

export { Input };