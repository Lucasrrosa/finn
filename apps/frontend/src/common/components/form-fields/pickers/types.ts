import { FormFieldBaseProps } from '@/common/components/form-fields/types'
import { Dayjs } from 'dayjs'
import { FieldPath, FieldValues } from 'react-hook-form'

export type FormDateFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = 
FormFieldBaseProps<TFieldValues, TName> &
{
    minDate?: Dayjs
    maxDate?: Dayjs
}
