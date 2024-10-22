import FormDatepickerField from '@/common/components/form-fields/pickers/FormDatepickerField'
import { dayjsSchemaValidator } from '@/common/validators/dayjs-schema-validator'
import { IdDescricaoSchema } from '@/common/validators/id-descricao-schema'
import ContaBancariaAutocomplete from '@/modules/contas-bancarias/components/ContaBancariaAutocomplete'
import { IFiltroTransacao } from '@finn/api-contracts'
import { zodResolver } from '@hookform/resolvers/zod'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

type Props = {
    onSubmitFilter: (filter: IFiltroTransacao) => void
}


const filtroSchema = z.object({
    contasBancarias: z.array(IdDescricaoSchema).min(0),
    categorias: z.array(IdDescricaoSchema).min(0),
    dataInicio: dayjsSchemaValidator.optional(),
    dataFim: dayjsSchemaValidator.optional()
})

type FiltroType = z.infer<typeof filtroSchema>

export default function FiltroListaTransacao({ onSubmitFilter }: Props) {
    const [expanded, setExpanded] = useState(false)

    const { handleSubmit, control, reset } = useForm<FiltroType>({
        resolver: zodResolver(filtroSchema),
        defaultValues: {
            contasBancarias: [],
            categorias: []
        }
    })

    const dataInicio = useWatch({ control, name: 'dataInicio'})
    const dataFim = useWatch({ control, name: 'dataFim'})

    const onSubmit = (formValues: FiltroType) => {
        console.log('filtro', formValues)
        onSubmitFilter({
            page: 1,
            pageSize: 10,
            categoriasId: formValues.categorias.map(item => item.id),
            contasBancariasId: formValues.contasBancarias.map(item => item.id),
            dataFim: formValues.dataFim?.toDate(),
            dataInicio: formValues.dataInicio?.toDate()
        })
    }

    return (
        <Accordion expanded={expanded} onChange={(_, isExpanded) => setExpanded(isExpanded)} > 
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                Filtro
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction={'column'} gap={2}>
                    <ContaBancariaAutocomplete
                        control={control}
                        name='contasBancarias'
                        label='Contas bancarias'
                        multiple
                        fullWidth
                    />
                    <Stack direction={'row'} gap={2}>
                        <FormDatepickerField maxDate={dataFim} control={control} name='dataInicio' label='Data inicio'/>
                        <FormDatepickerField minDate={dataInicio} control={control} name='dataFim' label='Data fim'/>
                    </Stack>
                </Stack>
            </AccordionDetails>
            <AccordionActions>
                <Button variant='outlined' color='primary' onClick={() => reset()}>Limpar</Button>
                <Button onClick={handleSubmit(onSubmit)} variant='contained' color='primary'>Filtrar</Button>
            </AccordionActions>
        </Accordion>
    )
}
