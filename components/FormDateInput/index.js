import React, { useEffect, useState } from 'react';
import { TextField, Stack } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classNames from 'classnames';
import styles from './index.module.scss';
import dayjs from 'dayjs';

const FormDateInput = ({ className, value, onChange, label, error }) => {
    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    var today = dayjs(new Date()).format('DD/MM/YYYY');
    console.log({ today, screenWidth })
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} className={classNames(className, styles.dateInput)}>
                <Stack>
                    {screenWidth > 850 ? <DesktopDatePicker
                        label={label}
                        defaultDate={today}
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} variant="standard" />}
                    />
                        : <MobileDatePicker
                            label={label}
                            defaultDate={today}
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={onChange}
                            renderInput={(params) => <TextField {...params} variant="standard" />}
                        />}
                </Stack>
            </LocalizationProvider>
            {error && <label className="text-input__label-error">{error}</label>}
        </>
    )

}

export default FormDateInput;