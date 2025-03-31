import React from "react";
import { ErrorMessage } from "formik";

import { Input, Textarea } from "@material-tailwind/react";

const InputComp = ({ type, name, label, placholder, className, ...props }) => {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <div>
            <Textarea
              className={className}
              variant="static"
              style={{ fontSize: 20, height: 100 }}
              size="lg"
              label={label}
              name={name}
              placeholder={placholder}
              value={props.values[name]}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.touched[name] && props.errors[name] ? true : false}
            />
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        );
      default:
        return (
          <div>
            <Input
              style={{ fontSize: 20 }}
              className={className}
              label={label}
              name={name}
              variant="static"
              placeholder={placholder}
              value={props.values[name]}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.touched[name] && props.errors[name] ? true : false}
            />
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        );
    }
  };
  return renderInput();
};

export default InputComp;
