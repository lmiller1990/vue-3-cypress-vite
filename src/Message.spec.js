import { mount } from '@cypress/vue'
import Message from './Message.vue'

it('works', () => {
  mount(Message, {
    global: {
      provide: {
        msg: 'world!'
      }
    }
  })

  cy.get('div').contains('Hello, world!')
})
