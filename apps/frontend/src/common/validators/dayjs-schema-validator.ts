import dayjs, { Dayjs } from 'dayjs'
import { z } from 'zod'

export const dayjsSchemaValidator = z.custom<Dayjs>((val) => val instanceof dayjs, 'Invalid date')
