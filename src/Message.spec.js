import { mount } from '@cypress/vue'
import Message from './Message.vue'

it('works', () => {
  const stub = cy.stub()
  const onRegisterSuccess = (...args) => {
    console.log('Called with', ...args)
    stub(...args)
  }

  mount(Message, {
    props: {
      onRegisterSuccess
    }
  })

  cy.get('button').click().then(() => {
    expect(stub).to.have.been.calledWith({ foo: 'bar' })
  })
})
