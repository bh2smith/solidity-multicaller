[![Build Status](https://travis-ci.org/bh2smith/solidity-multi-transaction.svg?branch=master)](https://travis-ci.org/bh2smith/solidity-multi-transaction)

# Solidity Multi-Transaction
Solidity testing utility for calling the same function several times in a single transaction. Such a tool can be used during unit testing to achieve _conditional coverage_ in situations that might require several transactions to be executed simultaneously.


## Practical use case


Request collection in batches having limited capacity which expire after a pre-defined amount of time. That is, the batch collection of requests "closes" (i.e. becomes inactive) and can be processed after either a pre-defined amount of time or when the batch is full/capacity reached. If the batch capacity is too large to fill in short time period (say the average time of a single block), then testing desired functionality of how the contract handle's full batches.
