import React, { useState } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  clearable?: boolean;
  type?: string;
  showPasswordToggle?: boolean;
}

const sizeClasses = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3 text-base',
  lg: 'py-3 px-4 text-lg',
};

const variantClasses = {
  filled: 'bg-gray-100 border border-gray-300 focus:border-blue-500',
  outlined: 'bg-transparent border border-gray-400 focus:border-blue-500',
  ghost: 'bg-transparent border-none',
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  loading = false,
  clearable = false,
  type = 'text',
  showPasswordToggle = false,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-semibold text-primary dark:text-primary-dark tracking-wide" htmlFor={rest.id}>{label}</label>
      )}
      <div className="relative flex items-center">
        <input
          id={rest.id}
          className={`w-full rounded-lg outline-none transition duration-150 font-sans shadow-soft ${sizeClasses[size]} ${variantClasses[variant]} ${invalid ? 'border-red-500' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} focus:ring-2 focus:ring-primary focus:border-primary`}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid}
          aria-disabled={disabled}
          aria-busy={loading}
          type={inputType}
          {...rest}
        />
        {loading && (
          <span className="absolute right-2 animate-spin text-gray-400" aria-label="Loading">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          </span>
        )}
        {clearable && (value !== '' || internalValue !== '') && !disabled && !loading && (
          <button type="button" onClick={handleClear} className="absolute right-2 text-gray-400 hover:text-gray-600" aria-label="Clear input">
            ×
          </button>
        )}
        {showPasswordToggle && type === 'password' && !disabled && !loading && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-8 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {helperText && !invalid && <span className="text-xs text-gray-500">{helperText}</span>}
      {invalid && errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
