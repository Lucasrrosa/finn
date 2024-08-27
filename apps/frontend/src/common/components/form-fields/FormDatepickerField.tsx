import { DatePicker } from '@mui/x-date-pickers'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
}

export default function FormDatepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label }: Props<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DatePicker
                    label={label}
                    value={value}
                    onChange={onChange}
                    closeOnSelect
                    timezone='UTC'
                    format='dd/MM/yyyy'
                    slotProps={{
                        textField: {
                            error: !!error,
                            helperText: error?.message,
                        },
                    }}
                />
            )}
        />
    )
}
