import { RegistrarUsecase } from '@/modules/auth/usecases/registrar/registrar.usecase'
describe('RegistrarUseCase', () => {
    it('Deve estar definido', () => {
        const usecase = new RegistrarUsecase()
        expect(usecase).toBeDefined()
    })
})
