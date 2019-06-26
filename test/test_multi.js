const MultiCaller = artifacts.require("MultiCaller")
const DummyContract = artifacts.require("DummyContract")

contract("MultiCaller", async (accounts) => {

  describe("No attribute multi-call", () => {
    
    it("execute()", async () => {
      const dummy = await DummyContract.new()
      const multiCaller = await MultiCaller.new()

      const valueBefore = (await dummy.value.call()).toNumber()
      const numCalls = 100
      await multiCaller.execute(dummy.address, numCalls, "incrementValue()")
      const valueAfter = (await dummy.value.call()).toNumber()

      assert.equal(valueAfter, valueBefore + numCalls, "Something went wrong with value increment!")
    })
  })
})