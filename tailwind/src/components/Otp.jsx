import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

export function Otp({ number }) {
  const ref = useRef([]);
  const [values, setValues] = useState(Array(number).fill(""));
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center">
        {Array(number)
          .fill(0)
          .map((_, index) => (
            <SubOtpBox
              key={index}
              index={index}
              reference={(e) => (ref.current[index] = e)}
              onDone={() => {
                if (index + 1 < number) {
                  ref.current[index + 1]?.focus();
                }
              }}
              goBack={() => {
                if (index > 0) {
                  ref.current[index - 1]?.focus();
                }
              }}
              onChangeValue={(val) => {
                const updated = [...values];
                updated[index] = val;
                setValues(updated);
                setDisabled(updated.some((v) => v === ""));
              }}
              clearPrevValue={() => {
                if (index > 0) {
                  const updated = [...values];
                  updated[index - 1] = "";
                  setValues(updated);
                }
              }}
              value={values[index]}
            />
          ))}
      </div>
      <br />
      <Button disabled={disabled}>Sign up</Button>
    </div>
  );
}

export function SubOtpBox({
  reference,
  onDone,
  goBack,
  onChangeValue,
  clearPrevValue,
  index,
  value,
}) {
  const [inputBoxValue, setInputBoxValue] = useState(value || "");

  useEffect(() => {
    setInputBoxValue(value);
  }, [value]);

  return (
    <div>
      <input
        maxLength={1}
        value={inputBoxValue}
        ref={reference}
        onKeyDown={(e) => {
          if (e.key == "Backspace") {
            if (inputBoxValue !== "") {
              setInputBoxValue("");
              onChangeValue("");
              e.preventDefault();
            } else {
              goBack();
              clearPrevValue();
            }
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d$/.test(val)) {
            setInputBoxValue(val);
            onChangeValue(val);
            onDone();
          } else {
            setInputBoxValue("");
            onChangeValue("");
          }
        }}
        type="text"
        inputMode="numeric"
        className="m-1 w-[40px] h-[50px] rounded-2xl bg-[#19406a] outline-none px-4 text-white text-center text-xl"
      />
    </div>
  );
}
