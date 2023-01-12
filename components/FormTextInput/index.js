import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Box } from '@mui/material';
import classNames from 'classnames';
import styles from './index.module.scss'

const FormTextInput = (props) => {
    const {
        name,
        type,
        placeholder,
        value,
        onChange,
        label,
        className,
        error
    } = props;
    const alphaRegex = /^[A-Z a-z]+$/;

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            className={classNames(className, styles.inputField)}
        >
            <TextField 
                fullWidth 
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                type={type}
                onKeyDown={e => type === "alpha" && !e.key.match(alphaRegex) && e.preventDefault()}
                placeholder={placeholder}
                variant="standard"
            />
            {error && <label className="error">{error}</label>}
        </Box>
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