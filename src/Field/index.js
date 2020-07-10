import React from "react";
import { default as PT } from "prop-types";
import cx from "classnames";

const Field = ({id,label,hint,error,description,disabled,children,maxCharacter,}) => {
  let str;
  const handleContent = (ev) => {
    if (maxCharacter) {
      str = ev.target.value.length;
      if (ev.target.value.length > maxCharacter) {
        console.log("limit");
      }
      return str;
    }
  };

  if (maxCharacter) {
    return (
      <div className={cx("ola_field", { error }, { "is-disabled": disabled })}>
        <label htmlFor={id} className="ola_field-label"> {hint && (<span className="ola_field-hint">hola </span>)}
        </label>
        <div className="ola_field-input">
          {React.cloneElement(children, {id: id,error,disabled,onChange: handleContent,})}
        </div>
        {description && (<p className={cx({"ola_field-error": error,"ola_field-description": !error,})}>{description}</p>
        )}
      </div>
    );
  }
  return (
    <div
      className={cx("ola_field",{ "is-invalid": error },{ "is-disabled": disabled })}>
      <label htmlFor={id} className="ola_field-label">
        {label}
        {hint && <span className="ola_field-hint">{hint}</span>}
      </label>
      <div className="ola_field-input">
        {React.cloneElement(children, {id: id,error,disabled,onChange: handleContent,})}
      </div>
      {description && (<p className={cx({"ola_field-error": error,"ola_field-description": !error,})}>{description}</p>)}
    </div>
  );
};

Field.defaultProps = {
  error: false,
  hint: null,
  description: null,
  disabled: false,
};

Field.propTypes = {
  /** Id for Input and Label*/
  id: PT.string.isRequired,
  /** Label */
  label: PT.string.isRequired,
  /** Disabled input children */
  disabled: PT.bool,
  /** Hint */
  hint: PT.oneOfType([PT.arrayOf(PT.node), PT.node, PT.string]),
  /** Description */
  description: PT.oneOfType([PT.arrayOf(PT.node), PT.node, PT.string]),
  /** Error variant */
  error: PT.bool,
  /** Childen input node */
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired,
};

export default Field;
