// const { readFileSync } = require ("fs");

// export const { ethers } = require("ethers");

// export const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/636b8c25a2f04a5a8075e41f63e12580");
// const address = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
// const abi = JSON.parse(readFileSync(`shibaInu/abi.json`, "utf8"))

// const contract = new ethers.Contract(address, abi, provider)

// const main = async () => {
//   let name = await contract.name()
//   console.log("name ", name);

//   let symbol = await contract.symbol()
//   console.log("symbol ", symbol)

//   let totalSupply = await (contract.totalSupply())
//   console.log("total supply ", (parseInt(totalSupply._hex)))

//   let balance = await contract.balanceOf(address)
//   console.log(`The balance of ${name} = ${balance}`)
//   console.log(`The balance of formatted ${name} = ${ethers.utils.formatEther(balance)}`)
  
// };



// main()