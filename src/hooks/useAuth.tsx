import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js'

const getAccessToken = async () => {
    try {
      var authenticationData = {
        Username: 'xxxxxx',
        Password: 'xxxxxxxxxx',
      }
      const userPool = new CognitoUserPool({
        UserPoolId: 'xxxxxxxxxxx',
        ClientId: 'xxxxxxxxxxxxxxxxxx',
      })
  
      const user = new CognitoUser({ Username: 'xxxxxxxxxxxxxxxxxxxxxxxx', Pool: userPool })
      const authenticationDetails = new AuthenticationDetails(authenticationData)
  
      return new Promise((resolve, reject) => {
        user.authenticateUser(authenticationDetails, {
          onSuccess: function (result: any) {
            resolve(result.getAccessToken().getJwtToken())
          },
  
          onFailure: function (err: any) {
            reject(err)
          },
        })
      })
    } catch (error: any) {
      console.log('Failed to get access token: ', error)
      return null
    }
  }

  export { getAccessToken }