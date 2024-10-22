import { ReactNode } from 'react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

export type FormFieldBaseProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
    readOnly?: boolean
}

export type OptionType<T> = T & {
    value: string
    label: ReactNode
}
