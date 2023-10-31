const { runQuery } = require("./runQuery")

query = `
query MyQuery {
  allContractEventSubscriptions {
    edges {
      node {
        contractId
        topic1
        topic2
        topic3
        topic4
        subscriptionId
        userId
        maxSingleSize
      }
    }
  }
}
`

variables = {

}

runQuery(query, variables)