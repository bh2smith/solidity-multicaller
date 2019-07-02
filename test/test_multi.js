const MultiCaller = artifacts.require("MultiCaller")
const DummyContract = artifacts.require("DummyContract")

const truffleAssert = require("truffle-assertions")

contract("MultiCaller", async () => {


  describe("executeWithFunctionName()", () => {
    
    it("should call function without arguments by name repeatedly", async () => {
      const dummy = await DummyContract.new()
      const multiCaller = await MultiCaller.new()

      const numCalls = 100
      await multiCaller.executeWithFunctionName(dummy.address, numCalls, "incrementValue()")
      const valueAfter = (await dummy.value.call()).toNumber()

      assert.equal(valueAfter, numCalls, "Expected value should be numCalls")
    })

    it("should fail when calling non-existent function", async () => {
      const dummy = await DummyContract.new()
      const multiCaller = await MultiCaller.new()

      await truffleAssert.reverts(
        multiCaller.executeWithFunctionName(dummy.address, 1, "nonExistantFunction()"), 
        "One or more of the transactions failed!"
      )
    })

    it("should fail when calling function that reverts", async () => {
      const dummy = await DummyContract.new()
      const multiCaller = await MultiCaller.new()

      await truffleAssert.reverts(
        multiCaller.executeWithFunctionName(dummy.address, 1, "alwaysRevert()"), 
        "One or more of the transactions failed!"
      )
    })
  })

  describe("executeWithCalldata()", () => {
    it("should call function with arguments repeatedly", async () => {
      const dummy = await DummyContract.new()
      const multiCaller = await MultiCaller.new()

      const numCalls = 100
      const increment = 42
      const calldata = dummy.contract.methods.incrementBy(increment).encodeABI()

      await multiCaller.executeWithCalldata(dummy.address, numCalls, calldata)
      const valueAfter = (await dummy.value.call()).toNumber()

      assert.equal(
        valueAfter, numCalls * increment, 
        "Expected value should be increment * numCalls"
      )
    })
  })
})