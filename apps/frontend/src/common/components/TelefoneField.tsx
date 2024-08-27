import { TextField, TextFieldProps } from '@mui/material'
import React, { forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'

type Props = TextFieldProps & {
    value: string | null,
    defaultValue?: string | null,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TelefoneField = forwardRef(({value, onChange, type, ...rest}: Props, ref) =>{
    return (
        <PatternFormat
            getInputRef={ref}
            format='(##) #####-####'
            allowEmptyFormatting={false}
            value={value}
            onChange={onChange}
            type={type as unknown as 'text'}
            customInput={TextField}
            {...rest}
        />
    )
})
