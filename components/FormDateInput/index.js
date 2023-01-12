import React from 'react';

import DatePicker from 'react-datepicker';

import { format, getYear, setYear } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

const FormDateInput = ({ className, value, placeholder, onChange, label, error }) => {

    const maxDate = setYear(new Date(), getYear(new Date()) - 18);

    return (
        <div className={`date-picker ${className}`}>
            <DatePicker
                className={"date-picker__item"}
                selected={value ? new Date(value) : ''}
                onChange={(value) => onChange(format(new Date(value), "EEE MMM dd yyyy HH:mm:ss"))}
                dateFormat="MM/dd/yyyy"
                placeholderText={placeholder}
                minDate={setYear(new Date(), 1920)}
                maxDate={maxDate}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                popperModifiers={{
                    flip: {
                        boundariesElement: 'scrollParent'
                    },
                }}
            />
            {label && <label className="text-input__label">{label}</label>}
            {error && <label className="text-input__label-error">{error}</label>}
        </div>
    )

}

export default FormDateInput;