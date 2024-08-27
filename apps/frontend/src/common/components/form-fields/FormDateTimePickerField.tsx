import { DateTimePicker } from '@mui/x-date-pickers'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
}

export default function FormDateTimepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label }: Props<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DateTimePicker
                    label={label}
                    value={value || null}
                    onChange={onChange}
                    closeOnSelect
                    format='DD/MM/YYYY HH:mm'
                    timezone='UTC'
                    ampm={false}
                    ampmInClock={false}
                    minutesStep={5}
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
