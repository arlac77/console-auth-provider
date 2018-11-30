import test from 'ava';

import  ConsoleAuthProvider from '../src/auth-provider';

test('provider initialize', async t => {
  const ap = new ConsoleAuthProvider();

  t.is(await ap.provideCredentials(), undefind);

});
