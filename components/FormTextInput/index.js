import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import Icon from '../../utils/icons'

const FormTextInput = (props) => {
    const {
        name,
        type,
        placeholder,
        value,
        onChange,
        label,
        className,
        beforeLabel,
        active,
        isBorderless,
        error,
        inlineError,
        disabled,
        iconAfter,
        onAfterIconClick
    } = props;
    const mask = type === 'default' ? '(999) 999-9999' : type === 'tel' ? '999-999-9999' : '';
    const alphaRegex = /^[A-Z a-z]+$/;

    return (
        <div
            className={classNames(
                inlineError ? 'text-input text-input-inline' : 'text-input',
                className,
                {
                    'text-input_active': active,
                    'text-input_borderless': isBorderless,
                    'text-input_disabled': disabled
                }
            )}>
            <div className="text-input__container">
                {beforeLabel && <label className="text-input__before">{beforeLabel}</label>}
                <InputMask mask={mask} maskChar={null} value={value} onChange={onChange} >
                    {(inputProps) => (
                        <div className="text-input__container" {...inputProps}>
                            <input
                                className="text-input__value"
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange}
                                disabled={disabled}
                                onKeyPress={e => type === 'alpha' && !e.key.match(alphaRegex) && e.preventDefault()}
                            />
                            <label className="text-input__label">
                                {label && label}
                            </label>
                        </div>
                    )}
                </InputMask>
                {iconAfter && <span className="text-input__afterIcon  " onClick={onAfterIconClick}>{Icon[iconAfter]}</span>}
            </div>
            {error && <label className="text-input__label-error">{error}</label>}
            {inlineError && (
                <label className="text-input-inline__inline-error">{inlineError}</label>
            )}
        </div>
    );
}

export default FormTextInput;

FormTextInput.defaultProps = {
    type: 'text',
    disabled: false
};

FormTextInput.propTypes = {
    isBorderless: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.string
};