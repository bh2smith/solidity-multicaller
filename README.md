[![Build Status](https://travis-ci.org/bh2smith/solidity-multi-transaction.svg?branch=master)](https://travis-ci.org/bh2smith/solidity-multi-transaction)
[![npm version](https://badge.fury.io/js/solidity-multicall.svg)](https://badge.fury.io/js/solidity-multicall)

# Solidity Multi-Transaction
Solidity testing utility for calling the same function several times in a single transaction. Such a tool can be used during unit testing to achieve _conditional coverage_ in situations that might require several transactions to be executed simultaneously.

## Installation & Usage

```bash
npm install -g solidity-multicall
```


See [test file](https://github.com/bh2smith/solidity-multi-transaction/blob/master/test/test_multi.js) for example usage

## Practical use case


Request collection in batches having limited capacity which expire after a pre-defined amount of time. That is, the batch collection of requests "closes" (i.e. becomes inactive) and can be processed after either a pre-defined amount of time or when the batch is full/capacity reached. If the batch capacity is too large to fill in short time period (say the average time of a single block), then testing desired functionality of how the contract handle's full batches.
