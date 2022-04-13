const { Wallet } =  require ("ethers")
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/f25d55e910291a3ece3d39b8/eth/rinkeby")

const PRIVATE_KEY_2=""
const ADDRESS_2=""
const ADDRESS_3=""

//new wallet instance
const wallet = new Wallet(PRIVATE_KEY_2, provider)

//send ether
const send = async ()=>{

    //balances before transaction
    let ADDRESS_2_BALANCE = await provider.getBalance(ADDRESS_2)
    let ADDRESS_3_BALANCE = await provider.getBalance(ADDRESS_3)
    console.log(`Balance of address 2 = ${parseInt(ADDRESS_2_BALANCE)} and address 3 = ${ADDRESS_3_BALANCE}`);
    


    //send transaction
    const tx = await wallet.sendTransaction({to:ADDRESS_3, value: ethers.utils.parseEther("0.023") })

    //wait for transaction to be mined
    await tx.wait()
    console.log(`Your transaction was successful, \n\n Here is your transaction hash: ${tx.hash}`);

    //balances after transaction
    let ADDRESS_2_BALANCE_AFTER = await provider.getBalance(ADDRESS_2)
    let ADDRESS_3_BALANCE_AFTER = await provider.getBalance(ADDRESS_3)
    console.log(`Balance of address 2 = ${ADDRESS_2_BALANCE_AFTER} and address 3 = ${ADDRESS_3_BALANCE_AFTER}`);

}


send()