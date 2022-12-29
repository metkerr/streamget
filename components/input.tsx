import clsx from "clsx";
import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

interface CheckboxProps {
  name: string;
  id: string;
  className?: string;
  styles?: object;
  hideLabel?: boolean;
}
export const Checkbox = ({
  name,
  id,
  className,
  styles,
  hideLabel = false,
}: CheckboxProps) => {
  return (
    <label className={`checkbox-container ${className}`} style={styles}>
      <input type="checkbox" name={name} id={id} />
      <span className="checkmark" />
      {!hideLabel && name}
    </label>
  );
};

interface OptionProps {
  labels: any[];
  className?: string;
  getValue?: Function;
}
export const Option = ({ labels, className, getValue }: OptionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [optionValue, setOptionValue] = useState(labels[0] || null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (value: any) => {
    setIsMenuOpen(false);
    setOptionValue(value);
    getValue && getValue(value);
  };

  return (
    <div className={`select text-sm ${className}`}>
      <div className="select-wrapper relative">
        <div
          className="select-none select-menu flex items-center max-w-fit gap-1 justify-between border rounded py-[0.225rem] px-1.5 cursor-pointer hover:opacity-80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{optionValue}</span>
          <FaAngleDown />
        </div>
        <div
          ref={dropdownRef}
          className={clsx({
            ["select-dropdown-container bg-slate-800 rounded mt-1 absolute z-50 min-w-max py-2 max-h-56 overflow-y-auto"]:
              true,
            ["hidden"]: !isMenuOpen,
          })}
        >
          {labels.map((label) => {
            return (
              <div
                className="select-dropdown py-1 px-3 cursor-pointer hover:bg-slate-600"
                key={label}
                onClick={() => handleMenuClick(label)}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ColorPickerProps {
  id: string;
  label: string;
}

export const ColorPicker = ({ id, label }: ColorPickerProps) => {
  return (
    <div className="color-picker-container flex items-center cursor-pointer gap-3 w-full justify-between">
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
      <input
        type="color"
        name={id}
        id={id}
        className="w-[2rem] bg-transparent rounded border px-1 cursor-pointer"
        defaultValue="#ffffff"
      />
    </div>
  );
};
