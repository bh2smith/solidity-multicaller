/*eslint no-undef: "off"*/

const MultiCaller = artifacts.require("MultiCaller.sol")

module.exports = async function (deployer) {
  await deployer.deploy(MultiCaller)
}