/**
 * Provide credentials from consoile input
 */
export class ConsoleAuthProvider {
  async provideCredentials(realm) {
    const title = realm && realm.Basic ? realm.Basic.realm : '???';

    const response = await prompt(
      [{
        type: "input",
        name: "user",
        message: `What is your user? (${title})`
      },
      {
        type: "password",
        name: "password",
        message: `What is your password? (${title})`
      }]
    );

    return response;
  }
}