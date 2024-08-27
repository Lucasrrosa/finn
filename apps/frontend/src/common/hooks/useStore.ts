import { RootState } from '@/configs/store/store'
import { useSelector } from 'react-redux'

// eslint-disable-next-line no-unused-vars
type StoreSelector<T> = (state: RootState) => T


export function useStore<T>(selector: StoreSelector<T>): T {
    const selected = useSelector(selector)
    return selected
}
