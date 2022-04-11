const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

//create web3 instance and connect to provider
const web3 = new Web3(ganache.provider());
// class Car {
//   park() {
//     return "stopped";
//   }
//   drive() {
//     return "vroom";
//   }
// }
// let car;
// beforeEach(() => {
//   car = new Car();
// });
// describe("car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });
//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });

let accounts;
let inbox;
beforeEach(async () => {
  //get a list of accounts to deploy
  accounts = await web3.eth.getAccounts();

  //use 1 of the accounts to deploy and deploy
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hey fuckr"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    //check if inbox.options.address is valid
    assert.ok(inbox.options.address);
  });
  //check if contract has initial message
  it("has initial message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "");
  });
  //check if it can update initial message
  it("can update initial message", async () => {
    await inbox.methods.setMessage("bye").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "bye");
  });
});
