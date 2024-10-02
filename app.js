

const web3 = require("web3")
const web3 = new Web3("http://localhost:8545")

web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })