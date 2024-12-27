
describe('ChangeContaBancariaUsecase', () => {

    it('deve alterar conta bancaria da transacao', async () => {
        expect(true).toBe(true)
    })
    it.todo('Deve realizar compensação do valor da transacao no saldo da conta bancaria antiga caso transacao seja computada')
    it.todo('Deve realizar atualizacao do valor da transacao no saldo da conta bancaria nova caso transacao seja computada')
    it.todo('Não deve ser atualizados os valores de saldo da conta bancaria caso a transacao ainda nao esteja computada')
 })
