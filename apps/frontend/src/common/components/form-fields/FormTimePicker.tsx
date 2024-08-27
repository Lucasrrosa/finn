import { TimePicker } from '@mui/x-date-pickers'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
    fullWidth?: boolean
}

export default function FormTimePicker<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, fullWidth }: Props<TFieldValues, TName>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TimePicker
                    value={value}
                    onChange={onChange}
                    label={label}
                    slotProps={{
                        textField: {
                            fullWidth,
                            error: !!error,
                            helperText: error?.message,
                        },
                    }}
                />
            )}
        />
    )
}
