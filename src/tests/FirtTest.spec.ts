import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Erisvaldo'

  expect(user.name).toEqual('Erisvaldo')
})
