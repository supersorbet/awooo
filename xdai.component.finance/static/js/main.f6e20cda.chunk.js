(this["webpackJsonpcomponent-frontend"] =
  this["webpackJsonpcomponent-frontend"] || []).push([
  [0],
  {
    162: function (e) {
      e.exports = JSON.parse(
        '[{"constant":false,"inputs":[{"name":"newSellPrice","type":"uint256"},{"name":"newBuyPrice","type":"uint256"}],"name":"setPrices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minBalanceForAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"amount","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minimumBalanceInFinney","type":"uint256"}],"name":"setMinBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sell","outputs":[{"name":"revenue","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"freeze","type":"bool"}],"name":"freezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"centralMinter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"FrozenFunds","type":"event"}]'
      );
    },
    459: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address[]","name":"_assets","type":"address[]"},{"internalType":"uint256[]","name":"_assetWeights","type":"uint256[]"},{"internalType":"address[]","name":"_derivativeAssimilators","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"numeraire","type":"address"},{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"uint256","name":"weight","type":"uint256"}],"name":"AssetIncluded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"derivative","type":"address"},{"indexed":true,"internalType":"address","name":"numeraire","type":"address"},{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"assimilator","type":"address"}],"name":"AssimilatorIncluded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isFrozen","type":"bool"}],"name":"FrozenSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"alpha","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"epsilon","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lambda","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"omega","type":"uint256"}],"name":"ParametersSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"PartitionRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"partitioned","type":"bool"}],"name":"PoolPartitioned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"address","name":"origin","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"uint256","name":"originAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"targetAmount","type":"uint256"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"allowance_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success_","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_derivative","type":"address"}],"name":"assimilator","outputs":[{"internalType":"address","name":"assimilator_","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chi","outputs":[{"internalType":"contract IFreeFromUpTo","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"derivatives","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_assimilator","type":"address"}],"name":"excludeAssimilator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"frozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint256","name":"total_","type":"uint256"},{"internalType":"uint256[]","name":"individual_","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"numeraires","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_origin","type":"address"},{"internalType":"address","name":"_target","type":"address"},{"internalType":"uint256","name":"_originAmount","type":"uint256"},{"internalType":"uint256","name":"_minTargetAmount","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"originSwap","outputs":[{"internalType":"uint256","name":"targetAmount_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_origin","type":"address"},{"internalType":"address","name":"_target","type":"address"},{"internalType":"uint256","name":"_originAmount","type":"uint256"},{"internalType":"uint256","name":"_minTargetAmount","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"originSwapDiscountCHI","outputs":[{"internalType":"uint256","name":"targetAmount_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"partition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"partitionTickets","outputs":[{"internalType":"bool","name":"initialized","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"partitioned","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"partitionedWithdraw","outputs":[{"internalType":"uint256[]","name":"withdrawals_","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"prime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_deposit","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"proportionalDeposit","outputs":[{"internalType":"uint256","name":"shellsMinted_","type":"uint256"},{"internalType":"uint256[]","name":"deposits_","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_shellsToBurn","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"proportionalWithdraw","outputs":[{"internalType":"uint256[]","name":"withdrawals_","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reserves","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_derivatives","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256","name":"_minShells","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"selectiveDeposit","outputs":[{"internalType":"uint256","name":"shellsMinted_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_derivatives","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256","name":"_maxShells","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"selectiveWithdraw","outputs":[{"internalType":"uint256","name":"shellsBurned_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_toFreezeOrNotToFreeze","type":"bool"}],"name":"setFrozen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_alpha","type":"uint256"},{"internalType":"uint256","name":"_beta","type":"uint256"},{"internalType":"uint256","name":"_feeAtHalt","type":"uint256"},{"internalType":"uint256","name":"_epsilon","type":"uint256"},{"internalType":"uint256","name":"_lambda","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"shell","outputs":[{"internalType":"int128","name":"alpha","type":"int128"},{"internalType":"int128","name":"beta","type":"int128"},{"internalType":"int128","name":"delta","type":"int128"},{"internalType":"int128","name":"epsilon","type":"int128"},{"internalType":"int128","name":"lambda","type":"int128"},{"internalType":"int128","name":"omega","type":"int128"},{"internalType":"uint256","name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"_interface","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"supports_","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_origin","type":"address"},{"internalType":"address","name":"_target","type":"address"},{"internalType":"uint256","name":"_maxOriginAmount","type":"uint256"},{"internalType":"uint256","name":"_targetAmount","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"targetSwap","outputs":[{"internalType":"uint256","name":"originAmount_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"totalSupply_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success_","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success_","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_origin","type":"address"},{"internalType":"address","name":"_target","type":"address"},{"internalType":"uint256","name":"_originAmount","type":"uint256"}],"name":"viewOriginSwap","outputs":[{"internalType":"uint256","name":"targetAmount_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"viewPartitionClaims","outputs":[{"internalType":"uint256[]","name":"claims_","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_deposit","type":"uint256"}],"name":"viewProportionalDeposit","outputs":[{"internalType":"uint256","name":"shellsToMint_","type":"uint256"},{"internalType":"uint256[]","name":"depositsToMake_","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_shellsToBurn","type":"uint256"}],"name":"viewProportionalWithdraw","outputs":[{"internalType":"uint256[]","name":"withdrawalsToHappen_","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_derivatives","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"viewSelectiveDeposit","outputs":[{"internalType":"uint256","name":"shellsToMint_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_derivatives","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"viewSelectiveWithdraw","outputs":[{"internalType":"uint256","name":"shellsToBurn_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewShell","outputs":[{"internalType":"uint256","name":"alpha_","type":"uint256"},{"internalType":"uint256","name":"beta_","type":"uint256"},{"internalType":"uint256","name":"delta_","type":"uint256"},{"internalType":"uint256","name":"epsilon_","type":"uint256"},{"internalType":"uint256","name":"lambda_","type":"uint256"},{"internalType":"uint256","name":"omega_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_origin","type":"address"},{"internalType":"address","name":"_target","type":"address"},{"internalType":"uint256","name":"_targetAmount","type":"uint256"}],"name":"viewTargetSwap","outputs":[{"internalType":"uint256","name":"originAmount_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    460: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"address","name":"_cmp","type":"address"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"uint256","name":"_duration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Airdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cmp","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lp","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unitVault","outputs":[{"internalType":"contract IVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vaultDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    484: function (e, t, n) {},
    492: function (e, t) {},
    507: function (e, t) {},
    509: function (e, t) {},
    535: function (e, t) {},
    537: function (e, t) {},
    551: function (e, t) {},
    552: function (e, t) {},
    573: function (e, t) {},
    574: function (e, t) {},
    596: function (e, t) {},
    598: function (e, t) {},
    782: function (e, t) {},
    784: function (e, t) {},
    791: function (e, t) {},
    792: function (e, t) {},
    815: function (e, t) {},
    822: function (e, t) {},
    900: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        s = n(34),
        r = n.n(s),
        l = (n(484), n(952)),
        c = n(468),
        o = 100,
        u = !1,
        d = {
          dark: "rgba(255,66, 161, .8)",
          light: "#00fff3 ",
          main: "#ff42a1",
        },
        p = Object(c.a)({
          palette: {
            grey: {
              50: "#f0f4f8",
              100: "#D9E2EC",
              200: "#BCCCDC",
              300: "#9FB3C8",
              600: "#486581",
              800: "#182027",
              900: "#0a0f13",
              1e3: "#00010f",
            },
            primary: d,
          },
          shape: { borderRadius: 16 },
        });
      p.overrides = {
        MuiTextField: {
          root: { background: "#e9cff9", borderRadius: p.shape.borderRadius },
        },
        MuiButton: { disabled: { cursor: "no-drop" } },
        MuiInput: { underline: { "&:before": { display: "none" } } },
      };
      var m,
        h,
        b,
        f = p,
        y = n(6),
        x = n(7),
        j = n(248),
        g = n.n(j),
        v = n(437),
        w = n.n(v),
        O = n(15),
        k = n(1),
        T = x.a.div(
          m ||
            (m = Object(y.a)([
              "\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: ",
              ";\n  padding: 0 24px;\n  width: 100%;\n  @media (max-width: 512px) {\n    padding: 0;\n  }\n",
            ])),
          function (e) {
            return e.full ? "100%" : "700px";
          }
        ),
        D = function (e) {
          var t = e.children,
            n = e.full;
          return Object(k.jsx)(T, { full: n, children: t });
        },
        S = x.a.div(
          h ||
            (h = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  font-size: 24px;\n  font-weight: 700;\n  margin-right: auto;\n  cursor: pointer;\n  @media screen and (max-width: 512px) {\n    margin-left: 5px;\n  }\n",
            ]))
        ),
        C = x.a.span(
          b ||
            (b = Object(y.a)([
              "\n  color: ",
              ";\n  margin-top: -.15em;\n  margin-left: .6em;\n  font-size: 1.2em;\n  @media screen and (max-width: 340px) {\n    display: none;\n  }\n",
            ])),
          "rgb(0,0,0)"
        ),
        A = function (e) {
          var t = e.onClick;
          return Object(k.jsx)(S, {
            onClick: t,
            children: Object(k.jsx)(C, { children: "AWOOO finance (beta)" }),
          });
        },
        F = n(36),
        M = n.n(F);
      M.a.config({
        ROUNDING_MODE: M.a.ROUND_DOWN,
        EXPONENTIAL_AT: 1e9,
        DECIMAL_PLACES: 18,
      });
      var B,
        I,
        P,
        E,
        U,
        _,
        z = function (e) {
          return new M.a(e);
        },
        R = i.a.createContext({
          account: void 0,
          allowances: {},
          balances: {},
          contracts: {},
          shell: {},
          liquidity: {},
          totalShells: z(0),
          updateAllState: function () {},
          presentDeposit: function () {},
          presentWithdraw: function () {},
          walletBalances: {},
          web3: void 0,
          engine: {},
          state: {},
          login: {},
          rewards: {},
        }),
        L = n(132),
        W = n(469),
        N = n(956),
        H = [
          "disabled",
          "children",
          "onClick",
          "outlined",
          "withInput",
          "small",
          "fullWidth",
        ],
        V = Object(N.a)(
          x.a.button(
            B ||
              (B = Object(y.a)([
                "\n  align-items: center;\n  background: ",
                ";\n  border: none;\n  border-radius: ",
                "px;\n  box-sizing: border-box;\n  color: ",
                ";\n  display: flex;\n  font-size: ",
                ";\n  font-weight: 700;\n  height: ",
                "px;\n  padding: 0 ",
                "px;\n  transition: background-color .2s, border-color .2s;\n  pointer-events: ",
                ";\n  opacity: ",
                ";\n  margin: ",
                ";\n  max-width: ",
                ";\n  width: ",
                ";\n  justify-content: center;\n  outline: none;\n  cursor: ",
                ";\n  &:hover {\n    background-color: ",
                ";\n    border-color: ",
                ";\n    color: ",
                ";\n  }\n  @media screen and (min-width: 512px) {\n    height: ",
                "px;\n    padding: 0 ",
                "px;\n    font-size: ",
                ";\n  }\n",
              ])),
            function (e) {
              return e.outlined ? "#e9cff9" : "#ff42a1";
            },
            function (e) {
              return e.withInput ? 8 : e.theme.shape.borderRadius;
            },
            function (e) {
              return e.outlined ? e.theme.palette.primary.main : "#FFF";
            },
            function (e) {
              return e.withInput ? "0.8rem" : e.small ? "1rem" : "1.2rem";
            },
            function (e) {
              return e.withInput ? 24 : e.small ? 32 : 60;
            },
            function (e) {
              return e.withInput ? 8 : e.small ? 30 : 32;
            },
            function (e) {
              return e.disabled ? "none" : "all";
            },
            function (e) {
              return e.disabled ? 0.8 : 1;
            },
            function (e) {
              return e.fullWidth
                ? "20px auto 70px"
                : e.withInput
                ? "0 12px 0 0"
                : "";
            },
            function (e) {
              return e.fullWidth ? "460px" : "auto";
            },
            function (e) {
              return e.fullWidth ? "90%" : "auto";
            },
            function (e) {
              return e.disabled ? "not-allowed" : "pointer";
            },
            function (e) {
              if (e.outlined) return "#FFF";
            },
            function (e) {
              return e.outlined ? e.theme.palette.primary.main : "transparent";
            },
            function (e) {
              return e.outlined ? e.theme.palette.primary.main : "#000";
            },
            function (e) {
              return e.withInput ? 30 : e.small ? 32 : 60;
            },
            function (e) {
              return e.withInput ? 12 : e.small ? 30 : 32;
            },
            function (e) {
              return e.small ? "1rem" : "1.2rem";
            }
          )
        ),
        q = function (e) {
          var t = e.disabled,
            n = e.children,
            a = e.onClick,
            i = e.outlined,
            s = e.withInput,
            r = e.small,
            l = e.fullWidth,
            c = Object(W.a)(e, H);
          return Object(k.jsx)(
            V,
            Object(L.a)(
              Object(L.a)(
                {
                  disabled: t,
                  onClick: a,
                  outlined: i,
                  small: r,
                  withInput: s,
                  fullWidth: l,
                  type: "button",
                },
                c
              ),
              {},
              { children: n }
            )
          );
        },
        Y = x.a.div(
          I ||
            (I = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  padding: 40px 0 30px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n",
            ]))
        ),
        J = x.a.a(
          P ||
            (P = Object(y.a)([
              "\n  color: ",
              ";\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 15px;\n  white-space: nowrap;\n  &:hover {\n    text-decoration: underline;\n  }\n",
            ])),
          "#ff42a1"
        ),
        G = x.a.span(
          E ||
            (E = Object(y.a)([
              "\n  white-space: nowrap;\n  color: ",
              ";\n  font-weight: bold;\n  text-decoration: none;\n  font-size: 20px;\n  margin-right: 20px;\n",
            ])),
          "#ff42a1"
        ),
        K = x.a.div(
          U ||
            (U = Object(y.a)([
              "\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px 10px;\n  background: ",
              ";\n  border-radius: 10px;\n  position: relative;\n  margin-right: 10px;\n  display: flex;\n  cursor: pointer;\n  > span {\n    display: block;\n    width: 8px;\n    height: 8px;\n    background: ",
              ";\n    border-radius: 50%;\n    &:nth-child(1),\n    &:nth-child(2) {\n      margin-right: 4px;\n    }\n  }\n",
            ])),
          "rgba(255,255,255,0.6)",
          "#ff42a1"
        ),
        X = x.a.div(
          _ ||
            (_ = Object(y.a)([
              "\n  position: absolute;\n  right: 0;\n  top: calc(100% + 12px);\n  width: auto;\n  background: ",
              ";\n  z-index: 10;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px 2px rgba(0, 0, 255, .2);\n  display: flex;\n  flex-direction: column;\n",
            ])),
          "#fcefff"
        ),
        Z = function (e) {
          var t = e.goToIndexTab,
            n = Object(a.useContext)(R),
            i = n.engine,
            s = n.loggedIn,
            r = n.selectWallet,
            l = n.disconnect,
            c = Object(a.useState)(!1),
            o = Object(O.a)(c, 2),
            d = o[0],
            p = o[1],
            m = Object(a.useRef)(d);
          return (
            Object(a.useEffect)(function () {
              document.addEventListener("click", function () {
                m.current && ((m.current = !1), p(!1));
              });
            }, []),
            Object(k.jsx)(D, {
              children: Object(k.jsxs)(Y, {
                children: [
                  Object(k.jsx)(A, {
                    onClick: function () {
                      return t();
                    },
                  }),
                  i &&
                    i.farming &&
                    i.farming.cmpPrice &&
                    Object(k.jsxs)(G, {
                      children: ["AWOOO price: $", i.farming.cmpPrice.toFixed(2)],
                    }),
                  Object(k.jsxs)(K, {
                    onClick: function (e) {
                      e.stopPropagation(),
                        e.nativeEvent.stopImmediatePropagation(),
                        (m.current = !d),
                        p(!d);
                    },
                    children: [
                      Object(k.jsx)("span", {}),
                      Object(k.jsx)("span", {}),
                      Object(k.jsx)("span", {}),
                      d &&
                        Object(k.jsxs)(X, {
                          onClick: function (e) {
                            e.stopPropagation();
                          },
                          children: [
                            Object(k.jsx)(J, {
                              href: "https://omni.xdaichain.com/bridge",
                              target: "_blank",
                              children: "ETH/BSC bridge",
                            }),
                            Object(k.jsx)(J, {
                              href: "https://component.finance/",
                              target: "_blank",
                              children: "AWOOO on ETH",
                            }),
                            Object(k.jsx)(J, {
                              href: "https://bsc.component.finance/",
                              target: "_blank",
                              children: "AWOOO on BSC",
                            }),
                            !1,
                            Object(k.jsx)(J, {
                              href: "https://ftm.component.finance/",
                              target: "_blank",
                              children: "AWOOO on FTM",
                            }),
                            Object(k.jsx)(J, {
                              href:
                                "https://app.uniswap.org/#/swap?inputCurrency=0x9f20ed5f919dc1c1695042542c13adcfc100dcab&outputCurrency=ETH",
                              target: "_blank",
                              children: "AWOOO on Uniswap",
                            }),
                            Object(k.jsx)(J, {
                              href:
                                "https://app.balancer.fi/#/trade/ether/0x9f20ed5f919dc1c1695042542c13adcfc100dcab",
                              target: "_blank",
                              children: "AWOOO on Balancer",
                            }),
                            u,
                            Object(k.jsx)(J, {
                              href:
                                "https://app.sushi.com/swap?inputCurrency=0x911F196Ed489e41C8B45B5C56FEce021C27a6159&outputCurrency=0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
                              target: "_blank",
                              children: "AWOOO on SushiSwap",
                            }),
                            Object(k.jsx)(J, {
                              href: "https://docs.component.finance/",
                              target: "_blank",
                              children: "Docs",
                            }),
                            Object(k.jsx)(q, {
                              onClick: function () {
                                s ? l() : r(), p(!1);
                              },
                              children: s ? "Disconnect" : "Connect",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Q = n(2),
        $ = n.n(Q),
        ee = n(5),
        te = n(467),
        ne = n(51),
        ae = n(116),
        ie = n.n(ae),
        se = n(458),
        re = n.n(se),
        le = {
          defaultWeb3Provider:
            "https://little-wispy-sun.xdai.quiknode.pro/b3fea81156c1abb58de12e3819e9de382216c99c/",
          infuraId: Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_CHAIN_ID: "100",
            REACT_APP_RPC_URL:
              "https://little-wispy-sun.xdai.quiknode.pro/b3fea81156c1abb58de12e3819e9de382216c99c/",
            REACT_APP_BLOCKNATIVE_KEY: "70a8519d-1a7c-4bc5-bf62-5b38617208ff",
          }).REACT_APP_INFURA_ID,
          blocknative: "70a8519d-1a7c-4bc5-bf62-5b38617208ff",
          cmpAddress: {
            1: "0x9f20ed5f919dc1c1695042542c13adcfc100dcab",
            56: "0x96124f7382a0ed672bba8f9b92208434eabcfb40",
            100: "0x911F196Ed489e41C8B45B5C56FEce021C27a6159",
          },
          pools: {
            1: [
              {
                shell: "0x49519631B404E06ca79C9C7b0dC91648D86F08db",
                name: "50% USDP 25% USDt 25% USDc",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN1",
                hideapy: !0,
                assets: [
                  {
                    address: "0x1456688345527bE1f37E9e627DA0837D6f08C925",
                    decimals: 18,
                    icon: "usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                    decimals: 6,
                    icon: "usdc.svg",
                    name: "USD Coin",
                    symbol: "USDC",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                    decimals: 6,
                    icon: "usdt.svg",
                    name: "Tether Stablecoin",
                    symbol: "USDT",
                    weight: ".25",
                    approveToZero: !0,
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
              {
                shell: "0x6477960dd932d29518D7e8087d5Ea3D11E606068",
                name: "50% USDP 25% DAI 25% sUSD",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN2",
                hideapy: !0,
                assets: [
                  {
                    address: "0x1456688345527bE1f37E9e627DA0837D6f08C925",
                    decimals: 18,
                    icon: "usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "MultiCollateral Dai",
                    symbol: "DAI",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
                    decimals: 18,
                    icon: "susd.svg",
                    name: "Synthetix USD",
                    symbol: "SUSD",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
            ],
            56: [
              {
                shell: "0xcf76a0ceDf50DA184FDef08A9d04E6829D7FefDF",
                name: "50% USDP 25% BUSD 25% USDC",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN1",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0xDACD011A71f8c9619642bf482f1D4CeB338cfFCf",
                    decimals: 18,
                    icon: "usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    decimals: 18,
                    icon: "busd.svg",
                    name: "BUSD",
                    symbol: "BUSD",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0x55d398326f99059fF775485246999027B3197955",
                    decimals: 18,
                    icon: "usdt.svg",
                    name: "USDT",
                    symbol: "USDT",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
              {
                shell: "0x3Bb6Bf6EcBC71f8f78D1Eec9c91de4f8Fd5C891c",
                name: "45% BUSD 45% USDT 10% USDC",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN2",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    decimals: 18,
                    icon: "busd.svg",
                    name: "BUSD",
                    symbol: "BUSD",
                    weight: ".45",
                    derivatives: [],
                  },
                  {
                    address: "0x55d398326f99059fF775485246999027B3197955",
                    decimals: 18,
                    icon: "usdt.svg",
                    name: "USDT",
                    symbol: "USDT",
                    weight: ".45",
                    derivatives: [],
                  },
                  {
                    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                    decimals: 18,
                    icon: "usdc.svg",
                    name: "USDC",
                    symbol: "USDC",
                    weight: ".10",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
            ],
            100: [
              {
                shell: "0x53De001bbfAe8cEcBbD6245817512F8DBd8EEF18",
                name: "50% USDP 25% WXDAI 25% USDc",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN1",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0xFe7ed09C4956f7cdb54eC4ffCB9818Db2D7025b8",
                    decimals: 18,
                    icon: "usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "Wrapped XDAI",
                    symbol: "WXDAI",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
                    decimals: 6,
                    icon: "usdc.svg",
                    name: "USD Coin",
                    symbol: "USDC",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
              {
                shell: "0xF82fc0ecBf3ff8e253a262447335d3d8A72CD028",
                name: "50% WXDAI 50% DAI",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN2",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "Wrapped XDAI",
                    symbol: "WXDAI",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0xFc8B2690F66B46fEC8B3ceeb95fF4Ac35a0054BC",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "Dai Token on xDai",
                    symbol: "DAI (BSC)",
                    weight: ".5",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".002",
                  lambda: "1",
                },
              },
              {
                shell: "0xfbbd0F67cEbCA3252717E66c1Ed1E97ad8B06377",
                name: "25% DAI(bsc) 25% USDC(bsc) 25% USDC 25% WXDAI",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN3",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0xFc8B2690F66B46fEC8B3ceeb95fF4Ac35a0054BC",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "Dai Token on xDai",
                    symbol: "DAI (BSC)",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xD10Cc63531a514BBa7789682E487Add1f15A51E2",
                    decimals: 18,
                    icon: "usdc.svg",
                    name: "USD Coin on xDai",
                    symbol: "USDC (BSC)",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
                    decimals: 6,
                    icon: "usdc.svg",
                    name: "USD Coin",
                    symbol: "USDC",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "Wrapped XDAI",
                    symbol: "WXDAI",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".002",
                  lambda: "1",
                },
              },
            ],
            250: [
              {
                shell: "0xddca02ddd94f97eefe07fccde780fd2fbdc85b23",
                name: "50% USDP 25% USDC 25% DAI",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN1",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0x3129ac70c738d398d1d74c87eab9483fd56d16f8",
                    decimals: 18,
                    icon: "/images/fantom/usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "DAI",
                    symbol: "DAI",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
                    decimals: 6,
                    icon: "usdc.svg",
                    name: "USD Coin",
                    symbol: "USDC",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
              {
                shell: "0x238139bf999f389063444e397cdfadf780ec57db",
                name: "50% USDP 25% MIM 25% FRAX",
                displayDecimals: 2,
                swapDecimals: 2,
                tag: "STABLECOIN2",
                hideapy: !0,
                farming: !1,
                assets: [
                  {
                    address: "0x3129ac70c738d398d1d74c87eab9483fd56d16f8",
                    decimals: 18,
                    icon: "/images/fantom/usdp.png",
                    name: "Unit Protocol Stablecoin",
                    symbol: "USDP",
                    weight: ".5",
                    derivatives: [],
                  },
                  {
                    address: "0x82f0b8b456c1a451378467398982d4834b6829c1",
                    decimals: 18,
                    icon: "dai.svg",
                    name: "MIM",
                    symbol: "MIM",
                    weight: ".25",
                    derivatives: [],
                  },
                  {
                    address: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
                    decimals: 18,
                    icon: "frax.png",
                    name: "FRAX",
                    symbol: "FRAX",
                    weight: ".25",
                    derivatives: [],
                  },
                ],
                params: {
                  alpha: ".95",
                  beta: ".45",
                  delta: ".05",
                  epsilon: ".0004",
                  lambda: "1",
                },
              },
            ],
          },
          farmingPools: {
            1: [
              {
                managerAddress: "0x7351A6D36FdE5c7D5D2a23eE0a26feB8083F91B5",
                underlyingPoolAddress:
                  "0x49519631b404e06ca79c9c7b0dc91648d86f08db",
                name: "USDP/USDC/USDT",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0x2BE4d20b9eeB7d625FA68112568F94c615Af376B",
                underlyingPoolAddress:
                  "0x6477960dd932d29518D7e8087d5Ea3D11E606068",
                name: "USDP/DAI/SUSD",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0x5D4066ed92F0FE565747FB75C128995e0b757d7d",
                underlyingPoolAddress:
                  "0x6f21eea19c917fd5ce48cabfeb3bd723dfa508a6",
                name: "CMP/ETH",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
            ],
            56: [
              {
                managerAddress: "0xEAc13bda20A0A81f5Cb0ADdC4a091d00344C2E1b",
                underlyingPoolAddress:
                  "0xcf76a0ceDf50DA184FDef08A9d04E6829D7FefDF",
                name: "USDP/BUSD/USDT",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0xB56689C8746A14e8ba1d8050e55eF241268178eB",
                underlyingPoolAddress:
                  "0x3Bb6Bf6EcBC71f8f78D1Eec9c91de4f8Fd5C891c",
                name: "BUSD/USDT/USDC",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0x53De001bbfAe8cEcBbD6245817512F8DBd8EEF18",
                underlyingPoolAddress:
                  "0x696741234737f93FA45017E4891DEa87070896d8",
                name: "CMP/BNB",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
            ],
            100: [
              {
                managerAddress: "0x79876b5062160C107e02826371dD33c047CCF2de",
                underlyingPoolAddress:
                  "0x53De001bbfAe8cEcBbD6245817512F8DBd8EEF18",
                name: "USDP/WXDAI/USDC",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0xdbd9aC0802544F6D293B293ee15E82d3Ec410CCb",
                underlyingPoolAddress:
                  "0xF82fc0ecBf3ff8e253a262447335d3d8A72CD028",
                name: "WXDAI/DAI(BSC)",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0xF3aC78AF33B79E3106e1d31c769cd1D54C487E69",
                underlyingPoolAddress:
                  "0xfbbd0F67cEbCA3252717E66c1Ed1E97ad8B06377",
                name: "DAI(BSC)/USDC(BSC)/USDC/WXDAI",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
              {
                managerAddress: "0xc2004547637240d4d8DC376B0fe8C08C563224F9",
                underlyingPoolAddress:
                  "0xd51Ecf96357aB928227Ef25179d12731C986Ca0b",
                name: "AWOOO/XDAI",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
            ],
            250: [],
          },
          stakingPools: {
            1: [
              {
                managerAddress: "0x79876b5062160C107e02826371dD33c047CCF2de",
                underlyingPoolAddress:
                  "0x9f20ed5f919dc1c1695042542c13adcfc100dcab",
                name: "CMP",
                icon: "logo.png",
                displayDecimals: 4,
                decimals: 18,
                periodDuration: 2592e3,
              },
            ],
            56: [],
            100: [],
            250: [],
          },
        },
        ce = n(194),
        oe = n(10),
        ue = n(16),
        de = n(76),
        pe = n(19),
        me = n(18),
        he = n(162),
        be = (function () {
          function e() {
            Object(oe.a)(this, e);
          }
          return (
            Object(ue.a)(e, [
              {
                key: "getNumeraireFromDisplay",
                value: function (e) {
                  return (e = e.replace(",", "")), z("" === e ? 0 : e);
                },
              },
              {
                key: "getAllFormatsFromDisplay",
                value: function (e) {
                  return {
                    display: (e = e.replace(",", "")),
                    numeraire: this.getNumeraireFromDisplay(e),
                    raw: this.getRawFromDisplay(e),
                  };
                },
              },
              {
                key: "getNumeraireFromRaw",
                value: function (e) {
                  return z(e).dividedBy(Math.pow(10, this.decimals));
                },
              },
              {
                key: "getAllFormatsFromNumeraire",
                value: function (e) {
                  return {
                    display: this.getDisplayFromNumeraire(e),
                    numeraire: e,
                    raw: this.getRawFromNumeraire(e),
                  };
                },
              },
              {
                key: "getAllFormatsFromRaw",
                value: function (e) {
                  return {
                    raw: (e = z(e)),
                    display: this.getDisplayFromRaw(e),
                    numeraire: this.getNumeraireFromRaw(e),
                  };
                },
              },
              {
                key: "getRawFromNumeraire",
                value: function (e) {
                  return e.multipliedBy(Math.pow(10, this.decimals));
                },
              },
              {
                key: "getRawFromDisplay",
                value: function (e) {
                  return (
                    (e = e.replace(",", "")),
                    z(e).multipliedBy(Math.pow(10, this.decimals))
                  );
                },
              },
              {
                key: "getDisplayFromRaw",
                value: function (e, t) {
                  return (
                    (t = t || this.displayDecimals),
                    Number(
                      z(e).dividedBy(Math.pow(10, this.decimals)).toFixed(t)
                    ).toLocaleString("en-US", { minimumFractionDigits: t })
                  );
                },
              },
              {
                key: "getDisplayFromNumeraire",
                value: function (e, t) {
                  return (
                    (t = t || this.displayDecimals),
                    Number(e.toFixed(t)).toLocaleString("en-US", {
                      minimumFractionDigits: t,
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        fe = (function (e) {
          Object(pe.a)(n, e);
          var t = Object(me.a)(n);
          function n(e, a, i, s, r, l) {
            var c;
            return (
              Object(oe.a)(this, n),
              ((c = t.call(this)).contract = new e.eth.Contract(he, a)),
              (c.address = a),
              (c.name = i),
              (c.symbol = s),
              (c.icon = r),
              (c.decimals = l),
              c
            );
          }
          return (
            Object(ue.a)(n, [
              {
                key: "approve",
                value: function (e, t) {
                  return this.contract.methods.approve(e, t);
                },
              },
              {
                key: "allowance",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n) {
                      var a;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.contract.methods.allowance(t, n).call()
                                );
                              case 2:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.getAllFormatsFromRaw(a)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "balanceOf",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.contract.methods.balanceOf(t).call()
                                );
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.getAllFormatsFromRaw(n)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(be),
        ye = n(459),
        xe = z(1),
        je = (function (e) {
          Object(pe.a)(n, e);
          var t = Object(me.a)(n);
          function n(e, a, i, s, r, l) {
            var c;
            return (
              Object(oe.a)(this, n),
              ((c = t.call(this)).contract = new e.eth.Contract(ye, a)),
              (c.address = a),
              (c.name = i),
              (c.symbol = s),
              (c.icon = r),
              (c.decimals = l),
              c
            );
          }
          return (
            Object(ue.a)(n, [
              {
                key: "query",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n,
                        a,
                        i,
                        s,
                        r,
                        l,
                        c,
                        o,
                        u,
                        d,
                        p,
                        m,
                        h,
                        b,
                        f,
                        y = this;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.address),
                                  (e.next = 3),
                                  this.balanceOf(t)
                                );
                              case 3:
                                return (
                                  (a = e.sent), (e.next = 6), this.totalSupply()
                                );
                              case 6:
                                return (
                                  (i = e.sent),
                                  (s = i.raw.isZero()
                                    ? i.raw
                                    : a.raw.dividedBy(i.raw)),
                                  (e.next = 10),
                                  this.liquidity()
                                );
                              case 10:
                                return (
                                  (r = e.sent),
                                  (l = r[0]),
                                  (c = this.getAllFormatsFromRaw(
                                    r[0].raw.multipliedBy(s)
                                  )),
                                  (o = r[1]),
                                  (u = r[1].map(function (e) {
                                    return y.getAllFormatsFromRaw(
                                      e.raw.multipliedBy(s)
                                    );
                                  })),
                                  (d = this.calculateUtilities(r[0], r[1])),
                                  (p = Object(O.a)(d, 3)),
                                  (m = p[0]),
                                  (h = p[1]),
                                  p[2],
                                  (b = h.map(function (e) {
                                    return y.getAllFormatsFromRaw(
                                      e.raw.multipliedBy(s)
                                    );
                                  })),
                                  (f = this.getAllFormatsFromNumeraire(
                                    m.numeraire.multipliedBy(s)
                                  )),
                                  e.abrupt("return", {
                                    address: n,
                                    liquiditiesOwned: u,
                                    liquiditiesTotal: o,
                                    liquidityOwned: c,
                                    liquidityTotal: l,
                                    shellsOwned: a,
                                    shellsTotal: i,
                                    utilitiesOwned: b,
                                    utilitiesTotal: h,
                                    utilityOwned: f,
                                    utilityTotal: m,
                                  })
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "calculateUtilities",
                value: function (e, t) {
                  for (var n = z(0), a = [], i = [], s = 0; s < t.length; s++) {
                    var r = t[s].numeraire,
                      l = e.numeraire.multipliedBy(this.weights[s]),
                      c = z(0);
                    if (r.isGreaterThan(l)) {
                      var o = l.multipliedBy(xe.plus(this.beta));
                      r.isGreaterThan(o) && (c = r.minus(o));
                    } else {
                      var u = l.multipliedBy(xe.minus(this.beta));
                      u.isGreaterThan(r) && (c = u.minus(r));
                    }
                    if (c.isZero())
                      (n = n.plus(r)),
                        a.push(this.getAllFormatsFromNumeraire(r)),
                        i.push(this.getAllFormatsFromNumeraire(z(0)));
                    else {
                      var d = c.dividedBy(l).multipliedBy(this.delta);
                      d.isGreaterThan(this.max) && (d = this.max),
                        (d = d.multipliedBy(c)),
                        i.push(this.getAllFormatsFromNumeraire(d));
                      var p = r.minus(d);
                      (n = n.plus(p)),
                        a.push(this.getAllFormatsFromNumeraire(p));
                    }
                  }
                  return [(n = this.getAllFormatsFromNumeraire(n)), a, i];
                },
              },
              {
                key: "getParams",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.contract.viewShell();
                              case 2:
                                return e.abrupt("return", e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "balanceOf",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.contract.methods.balanceOf(t).call()
                                );
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.getAllFormatsFromRaw(n)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "totalSupply",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      var t;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.contract.methods.totalSupply().call()
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.getAllFormatsFromRaw(t)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "liquidity",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      var t,
                        n = this;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.contract.methods.liquidity().call()
                                );
                              case 2:
                                return (
                                  ((t = e.sent)[0] = this.getAllFormatsFromRaw(
                                    t[0]
                                  )),
                                  (t[1] = t[1].map(function (e) {
                                    return n.getAllFormatsFromRaw(e);
                                  })),
                                  e.abrupt("return", t)
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "viewSelectiveDeposit",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n) {
                      var a;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.t0 = z),
                                  (e.next = 4),
                                  this.contract.methods
                                    .viewSelectiveDeposit(
                                      t,
                                      n.map(function (e) {
                                        return e.raw.integerValue().toFixed();
                                      })
                                    )
                                    .call()
                                );
                              case 4:
                                return (
                                  (e.t1 = e.sent),
                                  (a = (0, e.t0)(e.t1)),
                                  e.abrupt(
                                    "return",
                                    this.getNumeraireFromRaw(a)
                                  )
                                );
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t2 = e.catch(0)),
                                  e.abrupt("return", !1)
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "selectiveDeposit",
                value: function (e, t, n, a) {
                  return this.contract.methods.selectiveDeposit(
                    e,
                    t.map(function (e) {
                      return e.raw.integerValue().toFixed();
                    }),
                    n,
                    a
                  );
                },
              },
              {
                key: "viewSelectiveWithdraw",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n) {
                      var a;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.t0 = z),
                                  (e.next = 4),
                                  this.contract.methods
                                    .viewSelectiveWithdraw(
                                      t,
                                      n.map(function (e) {
                                        return e.raw.integerValue().toFixed();
                                      })
                                    )
                                    .call()
                                );
                              case 4:
                                return (
                                  (e.t1 = e.sent),
                                  (a = (0, e.t0)(e.t1)),
                                  e.abrupt(
                                    "return",
                                    this.getNumeraireFromRaw(a)
                                  )
                                );
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t2 = e.catch(0)),
                                  e.abrupt("return", !1)
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "selectiveWithdraw",
                value: function (e, t, n, a) {
                  return this.contract.methods.selectiveWithdraw(e, t, n, a);
                },
              },
              {
                key: "proportionalWithdraw",
                value: function (e, t) {
                  return this.contract.methods.proportionalWithdraw(e, t);
                },
              },
              {
                key: "viewOriginSwap",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.t0 = z),
                                  (e.next = 4),
                                  this.contract.methods
                                    .viewOriginSwap(t, n, a)
                                    .call()
                                );
                              case 4:
                                return (
                                  (e.t1 = e.sent),
                                  e.abrupt("return", (0, e.t0)(e.t1))
                                );
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t2 = e.catch(0)),
                                  e.abrupt("return", !1)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "viewTargetSwap",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.t0 = z),
                                  (e.next = 4),
                                  this.contract.methods
                                    .viewTargetSwap(t, n, a)
                                    .call()
                                );
                              case 4:
                                return (
                                  (e.t1 = e.sent),
                                  e.abrupt("return", (0, e.t0)(e.t1))
                                );
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t2 = e.catch(0)),
                                  e.abrupt("return", !1)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "originSwap",
                value: function (e, t, n, a, i) {
                  return this.contract.methods.originSwap(e, t, n, a, i);
                },
              },
              {
                key: "targetSwap",
                value: function (e, t, n, a, i) {
                  return this.contract.methods.targetSwap(e, t, n, a, i);
                },
              },
            ]),
            n
          );
        })(be),
        ge =
          "3.963877391197344453575983046348115674221700746820753546331534351508065746944e+75",
        ve = (function () {
          function e() {
            Object(oe.a)(this, e);
          }
          return (
            Object(ue.a)(e, [
              {
                key: "viewOriginSwap",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      var i,
                        s,
                        r,
                        l,
                        c,
                        o,
                        u,
                        d = this;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = this.pairsToShells[t.address][
                                    n.address
                                  ]),
                                  (e.next = 3),
                                  Promise.all(
                                    i.map(
                                      (function () {
                                        var e = Object(ee.a)(
                                          $.a.mark(function e(i) {
                                            return $.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      d.shells[
                                                        i
                                                      ].viewOriginSwap(
                                                        t.address,
                                                        n.address,
                                                        t
                                                          .getRawFromDisplay(a)
                                                          .integerValue()
                                                          .toFixed()
                                                      )
                                                    );
                                                  case 2:
                                                    return e.abrupt(
                                                      "return",
                                                      e.sent
                                                    );
                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 3:
                                (s = e.sent), (c = z(0)), (o = 0);
                              case 6:
                                if (!(o < i.length)) {
                                  e.next = 13;
                                  break;
                                }
                                if (s[o] && s[o].toString() !== ge) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("continue", 10);
                              case 9:
                                s[o].isGreaterThan(c) &&
                                  ((c = s[o]), (r = i[o]));
                              case 10:
                                o++, (e.next = 6);
                                break;
                              case 13:
                                if (void 0 != r) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error("reverted");
                              case 15:
                                u = 0;
                              case 16:
                                if (!(u < this.shells[r].derivatives.length)) {
                                  e.next = 23;
                                  break;
                                }
                                if (
                                  this.shells[r].derivatives[u].address !==
                                  t.address
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                return (l = u), e.abrupt("break", 23);
                              case 20:
                                u++, (e.next = 16);
                                break;
                              case 23:
                                return e.abrupt("return", {
                                  originAmount: {
                                    numeraire: t.getNumeraireFromDisplay(a),
                                    display: a,
                                    raw: t.getRawFromDisplay(a),
                                  },
                                  targetAmount: {
                                    numeraire: n.getNumeraireFromRaw(c),
                                    display: n.getDisplayFromRaw(
                                      c,
                                      n.swapDecimals
                                    ),
                                    raw: c,
                                  },
                                  _shellIx: r,
                                  _shellDerivativeIx: l,
                                });
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "viewTargetSwap",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      var i,
                        s,
                        r,
                        l,
                        c,
                        o,
                        u,
                        d = this;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = this.pairsToShells[t.address][
                                    n.address
                                  ]),
                                  (e.next = 3),
                                  Promise.all(
                                    i.map(
                                      (function () {
                                        var e = Object(ee.a)(
                                          $.a.mark(function e(i) {
                                            return $.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      d.shells[
                                                        i
                                                      ].viewTargetSwap(
                                                        t.address,
                                                        n.address,
                                                        n
                                                          .getRawFromDisplay(a)
                                                          .integerValue()
                                                          .toFixed()
                                                      )
                                                    );
                                                  case 2:
                                                    return e.abrupt(
                                                      "return",
                                                      e.sent
                                                    );
                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 3:
                                (s = e.sent), (c = z(1e80)), (o = 0);
                              case 6:
                                if (!(o < i.length)) {
                                  e.next = 13;
                                  break;
                                }
                                if (s[o] && s[o].toString() !== ge) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("continue", 10);
                              case 9:
                                s[o].isLessThan(c) && ((c = s[o]), (r = i[o]));
                              case 10:
                                o++, (e.next = 6);
                                break;
                              case 13:
                                if (void 0 != r) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error("reverted");
                              case 15:
                                u = 0;
                              case 16:
                                if (!(u < this.shells[r].derivatives.length)) {
                                  e.next = 23;
                                  break;
                                }
                                if (
                                  this.shells[r].derivatives[u].address !==
                                  t.address
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                return (l = u), e.abrupt("break", 23);
                              case 20:
                                u++, (e.next = 16);
                                break;
                              case 23:
                                return e.abrupt("return", {
                                  originAmount: {
                                    display: t.getDisplayFromRaw(
                                      c,
                                      t.swapDecimals
                                    ),
                                    numeraire: t.getNumeraireFromRaw(c),
                                    raw: c,
                                  },
                                  targetAmount: {
                                    numeraire: n.getNumeraireFromDisplay(a),
                                    raw: n.getRawFromDisplay(a),
                                    display: a,
                                  },
                                  _shellIx: r,
                                  _shellDerivativeIx: l,
                                });
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "executeOriginSwap",
                value: function (e, t, n, a, i) {
                  a = t.getRawFromDisplay(a);
                  var s = n.getRawFromDisplay(i);
                  s = s.multipliedBy(z(0.99));
                  var r = Math.floor(Date.now() / 1e3 + 900);
                  return this.shells[e].originSwap(
                    t.address,
                    n.address,
                    a.integerValue().toFixed(),
                    s.integerValue().toFixed(),
                    r
                  );
                },
              },
              {
                key: "executeTargetSwap",
                value: function (e, t, n, a, i) {
                  i = n.getRawFromDisplay(i);
                  var s = t.getRawFromDisplay(a);
                  s = s.multipliedBy(z(1.01));
                  var r = Math.floor(Date.now() / 1e3 + 900);
                  return this.shells[e].targetSwap(
                    t.address,
                    n.address,
                    s.integerValue().toFixed(),
                    i.integerValue().toFixed(),
                    r
                  );
                },
              },
            ]),
            e
          );
        })(),
        we = n(945),
        Oe =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACcZJREFUeNrsXetR4zoUlj38v9kKgA6SCnBuA0AFJBVAKmBTQUIFCRUQGlhMBXgriKlg08FeneznvYqQbUmWbDlwZjRmdjZ6fTpPHUkRC5x+//uY8M+Ql1N8B/jqUMbLDt93+kY/btKQxxsFNvk02QTABb5DT00RQATMK305SLsvQA5BuOLlEt8uaMPLM327BifqEAjigBuAMAhkge4AzmNXoi3qAIgJgEgCV18pgFkfJSAcCOKEBS9nrF+U8zLjwGyOAhAOxBBAJKzflAKYrJeAQFnf83LHjouWvMx9Kf/Yo8J+CwAMmrQ5L+e8fIPCbko0pjeMMXwO4R1dBAAEyf0HXtbiSuZ9I/21dcktvP5ZkIBgsE8enbnGlhEMiycPTuY1bzMPBhAo7peO/QmS699rzO2Fpz4SF45dKPzIARg00FUAynYsO3MwLO7g97Rhbk+b+i0nRwIGg6hMBfF530EUYMXbZk1AiToGo+j4xNGEFFbUVceLw5pToo7ASNHpHPXdQb4fE1mBErcMRg6LZCxZJRk7PlphrvwBAmvKBowdrKDzkpjQDTtOWmHO3IssKMo3CyVJnDBShRrg7S469l3aiBaMdP0UEyvrydJieZTBALiLAJRvGzTA3I2ciSyEQ2xX8anoF/DyHZz2GcD4a5JjDpuLLIiVFwfm7XuLDprKHP7ZYfulzqsRIPB031j/NpUOwOCTcC2M6Q5OYxdhnlJ9qiuy7gMBg0LoUwzIlH4erMAfN7SfQeH4ZQfjKCII5hwCc+0tJAfLsk+lgT8YF2TGJy2PaVQWiKzikEVIYAgsb2Pl0IbSd4hgkVtyclL5n032NHbgthn+1qGFkcjCvkESGBhNFwmJim2J97y2rHOD1T6DKJxq/i7BHGtzyCI0MPgASLRMGtY7gPcsb8FOLLiCQkDyxpTJPvtCS4cEEFL3BYaKUojBiSFXTBXO7gDzdtVkrCpPvcu40rpFMJiFWFZGcMFtKwuL9EYWl7Gi4sRila0dTdBZi2DY+DPyYhnAA3+xdA8SOfh40pA7/mZd8IrnrHl8KsEAKfH5NrDwypnC8Fk5cDBvRWMgkmTg1rAB1T62Lfv2wutnf9KLXC4W0kXnhU4SRZbN/vPtByuBA0T7HoZ2eV/oCuLJJecOxPpEQC5tOqgwIeUQxTHuBrqmywORBXH1ywE7z+SNGE/JacdI30hsxZbmXxk7bxUhCp+6ZAcrTyx9FZOJaGVdOKyYQhS3HBRSfv8w93m+ORTrpmxbFEHDK+i4vhgXF/sxYQAUQQ19X3sHkWjk83hOIXVJdEJ4VIis0MHIYBoaO6D4TR+Miz0GkaMtWt/hlKmLiiw9/xwlaWGs4zhw7shcgQFumRpySopcMtozGcNo8MolBMhpwDpj7GMVGlhiz5LDO2b2W8k6dBoyh8x8nONDnbo7hBclOolyrOYeTOxhFKiFlSP84o34uLeaJnHKSk7fejg1loXKIQ8BtUHKnMJDK9WePGu2H6/UIY3NUQ9mZRuH9E3bmBSRCOnfnfo3JLJ+uzBHHaYN7Xi939pgQ97nX5YTmkOHMNdOp+2RtiLLQiRXIYo2HbjM0r+gsXrJOzAFhKyKqXzGo8G5kS+SKDZk07ECjAnr/kj0pwRkKpt+UHCrLzC6EVm5AMQAymziI3zQ4viDM/lNrKwNwgYD5v8KjXNXV1VUWFikmLehAWIismjD5xcG0QQM8nyvUbKKtnxTkCe4TjApbbAuATEX04bo1gOm3m+nnT7f5zduA8RjHzrZtQDEGGfTU4UZrbTzbc54G4irO9bO1u4OYn4sOJLVTrHH+62KDPG0QoZX6aKDBDKHYNgkBNqMnWJlS+m+rrpA7pJE1runTs1UYAgXw9RxwAD+zchxv3z6TEogDOj9xGOoYmcJxIFZSlFWx1u4vvTlvAwI4f7JurazIuvkt4cOZuhkDgU6aVjX2FZ8YUJeNCYkZ3b75/uMkZJ27zD+Wq7kdUSxMGAfThfpiDcHDiTVtbVR9FDgOqY6zcEI27SjhpxYXJCwZfpHsPcYFBwSwsWVJhEDH4lyB1cEWlwZNYdFmehyhKzQ92cV0Xhf8293Cu4eWirtD2KHz8tTiw4kWaSbWPAV+kjF8xZisbWgVPeR+MwwUflrf0InUJYb9kV34nFlzMt1C+1uVAd2nh0gvIQsLcqa9e98yAo6qACF+j/z3Ob/+V8NPVgC4aHu5YAeZqOr9MnWU98PIhKRwnGaaAIxt3n0pEfZ6OKBVhcHmsroIFlEBiRh9YnXlTdIGzhqTyz8JyxIBL9qetm2dHARjeomh5eKiZq6fHEmsHPoXVCRL/yXVBtUj22AAYU5Ze4uHegjfZjrWDFJa4XtvfT4FtOMfc6TurlqTuOKSZK9Xy9kmI1eZ62QzKcgZESF/YlJzTw4d8U7iGkDp1o55qob5WRdcu3zYayG+oRWWuXxBQT77hv6WY+s5K1DOJS3mobKB92hA4icq+tlB0/yVWyyQLSPvFlePVXcyr3UbCNh9VeLmF/xhx+InRgwj+miiNya6pLcRNxBZm8MwRjrgoE2UojKrMK/KR1nXRrQXJK/Vz6TDyzCNw8WHDszBCOzWFzFcbxcsYAqkx1ijYplcbAwvWDeUE6b0MaSE3XamTd8wuhMEY2Y1i2gWJMFP4gu+TSRK1PQYnJt6FXDJLXOCxOu+xtIoqp2IcSaA5d9hSHzcLbdd/qoiShs+Hs5vSnTfV7PJJX0mh1mkgxhqh4jbRpwh3wxs9GeSmy4emXbeeIBlMzx/2uNU0t8qbFJfbFhRzOFkncNiq5if/aER+oQjKmpYRBbrJ61Z1AeWH2+8Y51c5m+KRhr07piS5YuA+WtqfUliMZdhSU29hUxMLWmEGJyAoY1IBWg7K2vpn4K2HwELkiFMqsKO7QMRmFpJq7A2I/dQcdU8SGry8ZanMxJRRioNjZWsQ3deM/I9+PEGx3vtCNQVEcDKl9Uq7jf3dnjxE4euBdEjNyh4mLMEI+PkZ5aC7pqU2WiYgxbBRiZSzHa5gP3KSu5VSdkAvcvmHqfI9wH7qVBJKx8T4BW5TygMEnZGKjvZedZcoji1HW7kccBFYdUyrLqCZiH0DgGHFF1nmWJBeVFL0Yds3whg4vjBbuOQCjuX79l5fkDrYjcqMVBXwGYs4r/tkFIxDs4AgiXrPrIQQ4gWklGjzpYjSQKblh9MkCR2UF7F1lTnQOdQKv/Am3XOa/U9mPbvlTEOiJBVps8k1Eo0VfJB8iESIFYV3GJZaJZf3EsozPd1hkgFqLDJ7UmKoMHRAFOYiBWbEkUh2lIkYSgAKnwaQiYU0EkDQ0mvhBp79BFacjj/U+AAQC9MY5tuk4dNAAAAABJRU5ErkJggg==",
        ke = n(460),
        Te = (function (e) {
          Object(pe.a)(n, e);
          var t = Object(me.a)(n);
          function n(e, a, i, s) {
            var r;
            Object(oe.a)(this, n),
              (r = t.call(this)),
              Object.assign(Object(de.a)(r), i),
              (r.web3 = e);
            try {
              r.shell = s.shell;
            } catch (l) {}
            return (
              (r.account = r.web3.utils.toChecksumAddress(a)),
              (r.managerContract = new e.eth.Contract(ke, i.managerAddress)),
              (r.underlyingPoolContract = new e.eth.Contract(
                he,
                i.underlyingPoolAddress
              )),
              (r.cmpToken = new e.eth.Contract(he, le.cmpAddress[100])),
              (r.underlyingBalance = null),
              (r.userLockedValue = null),
              (r.allowance = null),
              (r.totalLockedValue = null),
              (r.apr = null),
              (r.CMPEarned = null),
              (r.claim = r.claim.bind(Object(de.a)(r))),
              (r.exit = r.exit.bind(Object(de.a)(r))),
              (r.withdraw = r.withdraw.bind(Object(de.a)(r))),
              (r.deposit = r.deposit.bind(Object(de.a)(r))),
              r
            );
          }
          return (
            Object(ue.a)(n, [
              {
                key: "init",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n) {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getUserUnderlyingTokensBalance()
                                );
                              case 2:
                                return (e.next = 4), this.calculateAPR(t, n);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUserUnderlyingTokensBalance",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      var t, n, a, i, s, r;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = z),
                                  (e.next = 3),
                                  this.managerContract.methods
                                    .balanceOf(this.account)
                                    .call()
                                );
                              case 3:
                                return (
                                  (e.t1 = e.sent),
                                  (t = (0, e.t0)(e.t1)),
                                  (this.userLockedValue = this.getAllFormatsFromRaw(
                                    t
                                  )),
                                  (e.t2 = z),
                                  (e.next = 9),
                                  this.underlyingPoolContract.methods
                                    .balanceOf(this.account)
                                    .call()
                                );
                              case 9:
                                return (
                                  (e.t3 = e.sent),
                                  (n = (0, e.t2)(e.t3)),
                                  (this.underlyingBalance = this.getAllFormatsFromRaw(
                                    n
                                  )),
                                  (e.t4 = z),
                                  (e.next = 15),
                                  this.underlyingPoolContract.methods
                                    .allowance(
                                      this.account,
                                      this.managerAddress
                                    )
                                    .call()
                                );
                              case 15:
                                return (
                                  (e.t5 = e.sent),
                                  (a = (0, e.t4)(e.t5)),
                                  (this.allowance = this.getAllFormatsFromRaw(
                                    a
                                  )),
                                  (e.t6 = z),
                                  (e.next = 21),
                                  this.underlyingPoolContract.methods
                                    .balanceOf(this.managerAddress)
                                    .call()
                                );
                              case 21:
                                return (
                                  (e.t7 = e.sent),
                                  (i = (0, e.t6)(e.t7)),
                                  (this.totalLockedValue = this.getAllFormatsFromRaw(
                                    i
                                  )),
                                  (e.t8 = z),
                                  (e.next = 27),
                                  this.managerContract.methods
                                    .earned(this.account)
                                    .call()
                                );
                              case 27:
                                return (
                                  (e.t9 = e.sent),
                                  (s = (0, e.t8)(e.t9)),
                                  (this.CMPEarned = this.getAllFormatsFromRaw(
                                    s
                                  )),
                                  (e.next = 32),
                                  this.managerContract.methods
                                    .periodFinish()
                                    .call()
                                );
                              case 32:
                                return (
                                  (this.periodFinish = e.sent),
                                  (e.t10 = z),
                                  (e.next = 36),
                                  this.managerContract.methods
                                    .rewardRate()
                                    .call()
                                );
                              case 36:
                                (e.t11 = e.sent),
                                  (r = (0, e.t10)(e.t11)),
                                  (this.rewardRate = this.getAllFormatsFromRaw(
                                    r
                                  ));
                              case 39:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "calculateAPR",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n) {
                      var a, i, s, r, l;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.shell) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (i = this.shell.liquidityTotal.raw),
                                  (e.next = 4),
                                  this.underlyingPoolContract.methods
                                    .totalSupply()
                                    .call()
                                );
                              case 4:
                                (s = e.sent), (a = i.div(s)), (e.next = 19);
                                break;
                              case 8:
                                if ("CMP" !== this.name) {
                                  e.next = 12;
                                  break;
                                }
                                (a = z(t)), (e.next = 19);
                                break;
                              case 12:
                                return (
                                  (e.next = 14),
                                  this.underlyingPoolContract.methods
                                    .totalSupply()
                                    .call()
                                );
                              case 14:
                                return (
                                  (r = e.sent),
                                  (e.next = 17),
                                  this.cmpToken.methods
                                    .balanceOf(this.underlyingPoolAddress)
                                    .call()
                                );
                              case 17:
                                (l = e.sent),
                                  (a = z(l).times(t).times(2).div(r));
                              case 19:
                                (this.totalLockedValueUsd = this.totalLockedValue.numeraire
                                  .times(a)
                                  .toFixed(2)),
                                  (this.depositValueUsd = this.userLockedValue.numeraire
                                    .times(a)
                                    .toFixed(2)),
                                  0 === +this.periodFinish
                                    ? (this.apr = "TBA")
                                    : n > this.periodFinish
                                    ? (this.apr = "Ended")
                                    : (this.apr = z(this.periodDuration)
                                        .times(this.rewardRate.numeraire)
                                        .times(t)
                                        .times(12)
                                        .times(100)
                                        .div(
                                          this.totalLockedValue.numeraire.times(
                                            a
                                          )
                                        )
                                        .toFixed(2));
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approve",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.underlyingPoolContract.methods
                                    .approve(
                                      this.managerAddress,
                                      "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                                    )
                                    .send({ from: this.account })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "deposit",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a, i) {
                      var s, r, l;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (s = z(i).times(z(10).pow(18))),
                                  (e.next = 3),
                                  this.web3.eth.getGasPrice()
                                );
                              case 3:
                                return (
                                  (r = e.sent),
                                  (e.next = 6),
                                  this.managerContract.methods
                                    .deposit(s.toString())
                                    .estimateGas({ from: this.account })
                                );
                              case 6:
                                return (
                                  (l = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.managerContract.methods
                                      .deposit(s.toString())
                                      .send({
                                        from: this.account,
                                        gasPrice: r,
                                        gas: l,
                                      })
                                      .once("transactionHash", t)
                                      .on("confirmation", n)
                                      .on("error", a)
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a, i) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "withdraw",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a, i) {
                      var s, r, l;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (s = z(i).times(z(10).pow(18))),
                                  (e.next = 3),
                                  this.web3.eth.getGasPrice()
                                );
                              case 3:
                                return (
                                  (r = e.sent),
                                  (e.next = 6),
                                  this.managerContract.methods
                                    .withdraw(s.toString())
                                    .estimateGas({ from: this.account })
                                );
                              case 6:
                                return (
                                  (l = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.managerContract.methods
                                      .withdraw(s.toString())
                                      .send({
                                        from: this.account,
                                        gasPrice: r,
                                        gas: l,
                                      })
                                      .once("transactionHash", t)
                                      .once("confirmation", n)
                                      .on("error", a)
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a, i) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "exit",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      var i, s;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.web3.eth.getGasPrice()
                                );
                              case 2:
                                return (
                                  (i = e.sent),
                                  (e.next = 5),
                                  this.managerContract.methods
                                    .exit()
                                    .estimateGas({ from: this.account })
                                );
                              case 5:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.managerContract.methods
                                      .exit()
                                      .send({
                                        from: this.account,
                                        gasPrice: i,
                                        gas: s,
                                      })
                                      .once("transactionHash", t)
                                      .on("confirmation", n)
                                      .on("error", a)
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "claim",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t, n, a) {
                      var i, s;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.web3.eth.getGasPrice()
                                );
                              case 2:
                                return (
                                  (i = e.sent),
                                  (e.next = 5),
                                  this.managerContract.methods
                                    .claim()
                                    .estimateGas({ from: this.account })
                                );
                              case 5:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    this.managerContract.methods
                                      .claim()
                                      .send({
                                        from: this.account,
                                        gasPrice: i,
                                        gas: s,
                                      })
                                      .once("transactionHash", t)
                                      .on("confirmation", n)
                                      .on("error", a)
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(be),
        De = n(461),
        Se = n.n(De),
        Ce = (function () {
          function e(t, n, a) {
            Object(oe.a)(this, e),
              (this.web3 = t),
              (this.shells = a),
              (this.account = this.web3.utils.toChecksumAddress(n)),
              (this.farms = {}),
              (this.stakes = {}),
              (this.cmpPrice = {});
          }
          return (
            Object(ue.a)(e, [
              {
                key: "init",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      var t;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getCmpPrice();
                              case 2:
                                return (e.next = 4), this.getCurrentTime();
                              case 4:
                                return (
                                  (e.next = 6),
                                  Promise.all([
                                    this.formPools(le.farmingPools[100]),
                                    this.formPools(le.stakingPools[100]),
                                  ])
                                );
                              case 6:
                                (t = e.sent),
                                  (this.farms = t[0]),
                                  (this.stakes = t[1]);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getCmpPrice",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      var t;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Se.a.get(
                                    "https://api.coingecko.com/api/v3/simple/price?ids=component&vs_currencies=usd"
                                  )
                                );
                              case 2:
                                (t = e.sent),
                                  (this.cmpPrice = t.data.component.usd);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getCurrentTime",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e() {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.web3.eth.getBlock("latest")
                                );
                              case 2:
                                this.blockTime = e.sent.timestamp;
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "formPools",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n,
                        a = this;
                      return $.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {}),
                                (e.next = 3),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      var e = Object(ee.a)(
                                        $.a.mark(function e(t) {
                                          var i, s;
                                          return $.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (i = a.shells.find(
                                                      function (e) {
                                                        return (
                                                          e.shell.address.toLowerCase() ===
                                                          t.underlyingPoolAddress.toLowerCase()
                                                        );
                                                      }
                                                    )),
                                                    (s = new Te(
                                                      a.web3,
                                                      a.account,
                                                      t,
                                                      i
                                                    )),
                                                    (e.next = 4),
                                                    s.init(
                                                      a.cmpPrice,
                                                      a.blockTime
                                                    )
                                                  );
                                                case 4:
                                                  n[s.managerAddress] = s;
                                                case 5:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 3:
                              return e.abrupt("return", n);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        Ae = (function (e) {
          Object(pe.a)(n, e);
          var t = Object(me.a)(n);
          function n(e, a, i) {
            var s;
            Object(oe.a)(this, n), (s = t.call(this));
            var r = Object(de.a)(s);
            (s.state = i),
              (s.web3 = e),
              (s.setState = a),
              (s.shells = []),
              (s.assets = []),
              (s.derivatives = []),
              (s.overlaps = {}),
              (s.pairsToShells = {}),
              (s.staking = {}),
              (s.farming = {});
            var l,
              c = Object(ce.a)(le.pools[100]);
            try {
              var o = function () {
                var e = l.value,
                  t = new je(s.web3, e.shell, "AWOOO finance", "SHL", Oe, 18);
                (t.displayDecimals = e.displayDecimals),
                  (t.farming = e.farming),
                  (t.swapDecimals = e.swapDecimals),
                  (t.alpha = z(e.params.alpha)),
                  (t.beta = z(e.params.beta)),
                  (t.delta = z(e.params.delta)),
                  (t.epsilon = z(e.params.epsilon)),
                  (t.lambda = z(e.params.lambda)),
                  (t.weights = []),
                  (t.assets = []),
                  (t.derivatives = []),
                  (t.assetIx = {}),
                  (t.derivativeIx = {});
                for (var n = 0; n < e.assets.length; n++) {
                  var a = e.assets[n],
                    i = new fe(
                      s.web3,
                      a.address,
                      a.name,
                      a.symbol,
                      a.icon,
                      a.decimals
                    );
                  (i.displayDecimals = e.displayDecimals),
                    (i.swapDecimals = e.swapDecimals),
                    (i.weight = z(a.weight)),
                    (i.approveToZero = a.approveToZero),
                    (t.assetIx[a.address] = n),
                    (t.derivativeIx[a.address] = t.derivatives.length),
                    (i.derivatives = []);
                  for (var r = 0; r < a.derivatives.length; r++) {
                    var c = new fe(
                      s.web3,
                      a.derivatives[r].address,
                      a.derivatives[r].name,
                      a.derivatives[r].symbol,
                      a.derivatives[r].icon,
                      a.derivatives[r].decimals
                    );
                    (c.displayDecimals = e.displayDecimals),
                      (c.swapDecimals = e.swapDecimals),
                      i.derivatives.push(c),
                      (t.derivativeIx[i.derivatives[r].address] =
                        t.derivatives.length);
                  }
                  t.weights.push(i.weight),
                    t.assets.push(i),
                    t.derivatives.push(i),
                    (t.derivatives = t.derivatives.concat(i.derivatives)),
                    s.assets.push(i),
                    s.derivatives.push(i),
                    (s.derivatives = s.derivatives.concat(i.derivatives));
                }
                for (var o = 0; o < e.assets.length; o++)
                  for (var u = o + 1; u < e.assets.length; u++) {
                    d(e.assets[o].symbol, e.assets[u].symbol),
                      p(
                        s.shells.length,
                        e.assets[o].address,
                        e.assets[u].address
                      );
                    for (var m = 0; m < e.assets[o].derivatives.length; m++) {
                      d(e.assets[o].symbol, e.assets[o].derivatives[m].symbol),
                        p(
                          s.shells.length,
                          e.assets[o].address,
                          e.assets[o].derivatives[m].address
                        );
                      for (
                        var h = m + 1;
                        h < e.assets[o].derivatives.length;
                        h++
                      )
                        d(
                          e.assets[o].derivatives[m].symbol,
                          e.assets[o].derivatives[h].symbol
                        ),
                          p(
                            s.shells.length,
                            e.assets[o].derivatives[m].address,
                            e.assets[o].derivatives[h].address
                          );
                      for (var b = 0; b < e.assets[u].derivatives.length; b++)
                        d(
                          e.assets[o].symbol,
                          e.assets[u].derivatives[b].symbol
                        ),
                          d(
                            e.assets[o].derivatives[m].symbol,
                            e.assets[u].derivatives[b].symbol
                          ),
                          d(
                            e.assets[u].symbol,
                            e.assets[o].derivatives[m].symbol
                          ),
                          p(
                            s.shells.length,
                            e.assets[u].address,
                            e.assets[o].derivatives[m].address
                          ),
                          p(
                            s.shells.length,
                            e.assets[o].address,
                            e.assets[u].derivatives[b].address
                          ),
                          p(
                            s.shells.length,
                            e.assets[o].derivatives[m].address,
                            e.assets[u].derivatives[b].address
                          );
                    }
                  }
                e.hideapy
                  ? (t.apy = !1)
                  : ((t.apy = Object(k.jsx)(we.a, {})),
                    s.getAPY(e.shell).then(function (e) {
                      return (t.apy = e);
                    })),
                  (t.tag = e.tag),
                  s.shells.push(t);
              };
              for (c.s(); !(l = c.n()).done; ) o();
            } catch (m) {
              c.e(m);
            } finally {
              c.f();
            }
            function u(e) {
              return !this.has(e.symbol) && (this.add(e.symbol), !0);
            }
            function d(e, t) {
              var n = r.overlaps[e] ? r.overlaps[e] : [],
                a = r.overlaps[t] ? r.overlaps[t] : [];
              -1 === n.indexOf(t) && n.push(t),
                -1 === a.indexOf(e) && a.push(e),
                (r.overlaps[e] = n),
                (r.overlaps[t] = a);
            }
            function p(e, t, n) {
              var a = r.pairsToShells[t] ? r.pairsToShells[t] : {},
                i = r.pairsToShells[n] ? r.pairsToShells[n] : {};
              a[n] || (a[n] = []),
                i[t] || (i[t] = []),
                a[n].push(e),
                i[t].push(e),
                (r.pairsToShells[t] = a),
                (r.pairsToShells[n] = i);
            }
            return (
              (s.assets = s.assets.filter(u, new Set())),
              (s.derivatives = s.derivatives.filter(u, new Set())),
              s
            );
          }
          return (
            Object(ue.a)(n, [
              {
                key: "network",
                set: function (e) {
                  this.setState(this.state.set("network", e));
                },
              },
              {
                key: "getFees",
                value: function (e, t, n) {
                  for (
                    var a = this.state
                        .getIn(["shells", e, "shell", "liquidityTotal"])
                        .toObject(),
                      i = this.state
                        .getIn(["shells", e, "shell", "liquiditiesTotal"])
                        .toJS(),
                      s = a,
                      r = i,
                      l = 0;
                    l < t.length;
                    l++
                  ) {
                    var c = this.shells[e].assetIx[t[l]];
                    (r[c] = this.shells[e].getAllFormatsFromNumeraire(
                      r[c].numeraire.plus(n[l].numeraire)
                    )),
                      (s = this.shells[e].getAllFormatsFromNumeraire(
                        s.numeraire.plus(n[l].numeraire)
                      ));
                  }
                  for (
                    var o = this.shells[e].calculateUtilities(a, i),
                      u = Object(O.a)(o, 3)[2],
                      d = this.shells[e].calculateUtilities(s, r),
                      p = Object(O.a)(d, 3)[2],
                      m = [],
                      h = 0;
                    h < u.length;
                    h++
                  ) {
                    var b = u[h].numeraire.isGreaterThan(p[h].numeraire)
                      ? u[h].numeraire.minus(p[h].numeraire).negated()
                      : p[h].numeraire.minus(u[h].numeraire);
                    m.push(this.shells[e].getAllFormatsFromNumeraire(b));
                  }
                  return m;
                },
              },
              {
                key: "syncShells",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = t || this.account), (this.account = t);
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "readShell",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n, a, i, s, r, l, c, o, u;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (u = function () {
                                    return (u = Object(ee.a)(
                                      $.a.mark(function e(a) {
                                        var i, s;
                                        return $.a.wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  a.allowance(
                                                    n.account,
                                                    t.address
                                                  )
                                                );
                                              case 2:
                                                return (
                                                  (i = e.sent),
                                                  (e.next = 5),
                                                  a.balanceOf(n.account)
                                                );
                                              case 5:
                                                return (
                                                  (s = e.sent),
                                                  e.abrupt("return", {
                                                    allowance: i,
                                                    balance: s,
                                                    icon: a.icon,
                                                    symbol: a.symbol,
                                                    decimals: a.decimals,
                                                  })
                                                );
                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    )).apply(this, arguments);
                                  }),
                                  (o = function (e) {
                                    return u.apply(this, arguments);
                                  }),
                                  (n = this),
                                  (a = []),
                                  (e.next = 6),
                                  t.query(this.account)
                                );
                              case 6:
                                return (
                                  (i = e.sent),
                                  (e.next = 9),
                                  Promise.all(
                                    t.assets.map(
                                      (function () {
                                        var e = Object(ee.a)(
                                          $.a.mark(function e(t, n) {
                                            var a;
                                            return $.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (e.next = 2), o(t);
                                                  case 2:
                                                    return (
                                                      ((a =
                                                        e.sent).approveToZero =
                                                        t.approveToZero),
                                                      (a.utilityTotal =
                                                        i.utilitiesTotal[n]),
                                                      (a.utilityOwned =
                                                        i.utilitiesOwned[n]),
                                                      (a.liquidityOwned =
                                                        i.liquidityOwned[n]),
                                                      (e.next = 9),
                                                      Promise.all(
                                                        t.derivatives.map(o)
                                                      )
                                                    );
                                                  case 9:
                                                    return (
                                                      (a.derivatives = e.sent),
                                                      e.abrupt("return", a)
                                                    );
                                                  case 11:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t, n) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 9:
                                (s = e.sent), (r = Object(ce.a)(s));
                                try {
                                  for (r.s(); !(l = r.n()).done; )
                                    (c = l.value),
                                      a.push(c),
                                      (a = a.concat(c.derivatives));
                                } catch (d) {
                                  r.e(d);
                                } finally {
                                  r.f();
                                }
                                return e.abrupt("return", {
                                  assets: s,
                                  derivatives: a,
                                  shell: i,
                                });
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sync",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n, a, i, s, r, l, c, o, u;
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (o = function (e) {
                                  return (
                                    !this.has(e.icon) && (this.add(e.icon), !0)
                                  );
                                }),
                                  (t = t || this.account),
                                  (this.account = t),
                                  (n = []),
                                  (a = []),
                                  (i = []),
                                  (s = Object(ce.a)(this.shells)),
                                  (e.prev = 7),
                                  s.s();
                              case 9:
                                if ((r = s.n()).done) {
                                  e.next = 25;
                                  break;
                                }
                                return (
                                  (l = r.value),
                                  (e.prev = 11),
                                  (e.next = 14),
                                  this.readShell(l)
                                );
                              case 14:
                                (c = e.sent),
                                  (a = a.concat(c.assets)),
                                  (i = i.concat(
                                    c.assets.flatMap(function (e) {
                                      return [e].concat(e.derivatives);
                                    })
                                  )),
                                  n.push(c),
                                  (e.next = 23);
                                break;
                              case 20:
                                (e.prev = 20),
                                  (e.t0 = e.catch(11)),
                                  console.log(e.t0);
                              case 23:
                                e.next = 9;
                                break;
                              case 25:
                                e.next = 30;
                                break;
                              case 27:
                                (e.prev = 27), (e.t1 = e.catch(7)), s.e(e.t1);
                              case 30:
                                return (e.prev = 30), s.f(), e.finish(30);
                              case 33:
                                return (
                                  (a = a.filter(o, new Set())),
                                  (i = i.filter(o, new Set())),
                                  (u = new Ce(this.web3, t, n)),
                                  (e.next = 38),
                                  u.init()
                                );
                              case 38:
                                (this.farming = u),
                                  (this.state = Object(ne.fromJS)({
                                    account: t,
                                    shells: n,
                                    assets: a,
                                    derivatives: i,
                                    farming: u,
                                  })),
                                  this.setState(this.state);
                              case 41:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [7, 27, 30, 33],
                          [11, 20],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "syncShell",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      return $.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = this.state),
                                  (e.t1 = ["shells", t]),
                                  (e.next = 4),
                                  this.readShell(this.shells[t])
                                );
                              case 4:
                                (e.t2 = e.sent),
                                  (this.state = e.t0.setIn.call(
                                    e.t0,
                                    e.t1,
                                    e.t2
                                  )),
                                  this.setState(this.state);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unlock",
                value: function (e, t, n, a, i, s) {
                  var r = this;
                  this.shells[e].assets[t]
                    .approve(this.shells[e].address, n)
                    .send({ from: this.account })
                    .once("transactionHash", a)
                    .once("confirmation", function () {
                      i(), r.sync(r.account);
                    })
                    .on("error", s);
                },
              },
              {
                key: "selectiveDeposit",
                value: function (e, t, n, a, i, s) {
                  var r = this;
                  this.shells[e]
                    .selectiveDeposit(t, n, 0, Date.now() + 2e3)
                    .send({ from: this.account })
                    .on("transactionHash", a)
                    .on("confirmation", function () {
                      i(), r.sync(r.account);
                    })
                    .on("error", s);
                },
              },
              {
                key: "selectiveWithdraw",
                value: function (e, t, n, a, i, s) {
                  var r = this.state.getIn([
                    "shells",
                    e,
                    "shell",
                    "shellsOwned",
                    "raw",
                  ]);
                  this.shells[e]
                    .selectiveWithdraw(
                      t,
                      n.map(function (e) {
                        return e.raw.integerValue().toFixed();
                      }),
                      r.toFixed(),
                      Date.now() + 2e3
                    )
                    .send({ from: this.account })
                    .on("transactionHash", a)
                    .on("confirmation", i)
                    .on("error", s);
                },
              },
              {
                key: "proportionalWithdraw",
                value: function (e, t, n, a, i) {
                  this.shells[e]
                    .proportionalWithdraw(t.toFixed(), Date.now() + 2e3)
                    .send({ from: this.account })
                    .on("transactionHash", n)
                    .on("confirmation", a)
                    .on("error", i);
                },
              },
              {
                key: "getAPY",
                value: (function () {
                  var e = Object(ee.a)(
                    $.a.mark(function e(t) {
                      var n, a;
                      return $.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  "https://dashboard.shells.exchange/getAPY/" +
                                  t),
                                (a = 0),
                                (e.next = 4),
                                fetch(n)
                                  .then(function (e) {
                                    return e.text();
                                  })
                                  .then(function (e) {
                                    var t = JSON.parse(e).data;
                                    a = t[t.length - 1].percentage;
                                  })
                              );
                            case 4:
                              return e.abrupt("return", a);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(ve);
      function Fe() {
        var e, t;
        return (
          (t = navigator.userAgent || navigator.vendor || window.opera),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) &&
            (e = !0),
          e
        );
      }
      var Me,
        Be,
        Ie,
        Pe,
        Ee,
        Ue,
        _e,
        ze,
        Re,
        Le,
        We,
        Ne,
        He,
        Ve,
        qe,
        Ye,
        Je,
        Ge,
        Ke,
        Xe,
        Ze,
        Qe,
        $e,
        et,
        tt,
        nt,
        at,
        it,
        st,
        rt,
        lt,
        ct,
        ot,
        ut,
        dt,
        pt,
        mt,
        ht,
        bt,
        ft,
        yt,
        xt,
        jt,
        gt,
        vt,
        wt,
        Ot,
        kt,
        Tt,
        Dt,
        St,
        Ct,
        At,
        Ft,
        Mt,
        Bt,
        It,
        Pt,
        Et,
        Ut,
        _t,
        zt,
        Rt,
        Lt,
        Wt,
        Nt,
        Ht,
        Vt,
        qt,
        Yt,
        Jt,
        Gt,
        Kt,
        Xt,
        Zt,
        Qt,
        $t,
        en,
        tn,
        nn,
        an,
        sn,
        rn,
        ln,
        cn,
        on,
        un,
        dn,
        pn,
        mn = [
          {
            chainId: "0x64",
            chainName: "xDai",
            rpcUrls: ["https://rpc.xdaichain.com/"],
            nativeCurrency: { name: "xDai", symbol: "xDai", decimals: 18 },
            blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
          },
        ],
        hn = function (e) {
          return function (t) {
            var n = Object(a.useState)(Object(ne.Map)({})),
              i = Object(O.a)(n, 2),
              s = i[0],
              r = i[1],
              l = Object(a.useState)(!1),
              c = Object(O.a)(l, 2),
              u = c[0],
              d = c[1],
              p = (function () {
                var e = Object(ee.a)(
                  $.a.mark(function e() {
                    return $.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                !Fe() || (!window.ethereum && !window.web3))
                              ) {
                                e.next = 18;
                                break;
                              }
                              if (!window.ethereum) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.prev = 3),
                                (e.next = 6),
                                window.ethereum.send("eth_requestAccounts")
                              );
                            case 6:
                              e.next = 11;
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(3)),
                                console.log(e.t0);
                            case 11:
                              (Ee = window.ethereum), (e.next = 15);
                              break;
                            case 14:
                              window.web3 && (Ee = window.web3.currentProvider);
                            case 15:
                              (Me = new ie.a(Ee)), (e.next = 53);
                              break;
                            case 18:
                              return (e.next = 20), Pe.connect();
                            case 20:
                              return (
                                (Ee = e.sent),
                                (Me = new ie.a(Ee)),
                                (e.next = 24),
                                Me.eth.getChainId()
                              );
                            case 24:
                              if (e.sent === o || !window.ethereum) {
                                e.next = 52;
                                break;
                              }
                              return (
                                (e.prev = 26),
                                (e.next = 29),
                                window.ethereum.request({
                                  method: "wallet_switchEthereumChain",
                                  params: [{ chainId: ie.a.utils.toHex(o) }],
                                })
                              );
                            case 29:
                              (Ue = !1), (e.next = 50);
                              break;
                            case 32:
                              if (
                                ((e.prev = 32),
                                (e.t1 = e.catch(26)),
                                console.error(String(e.t1)),
                                4902 !== e.t1.code)
                              ) {
                                e.next = 49;
                                break;
                              }
                              return (
                                (e.prev = 36),
                                (e.next = 39),
                                window.ethereum.request({
                                  method: "wallet_addEthereumChain",
                                  params: mn,
                                })
                              );
                            case 39:
                              (Ue = !1), (e.next = 47);
                              break;
                            case 42:
                              (e.prev = 42),
                                (e.t2 = e.catch(36)),
                                (Ue = !0),
                                (Me = new ie.a(le.defaultWeb3Provider)),
                                console.error(String(e.t2));
                            case 47:
                              e.next = 50;
                              break;
                            case 49:
                              4001 === e.t1.code &&
                                ((Me = new ie.a(le.defaultWeb3Provider)),
                                (Ue = !0));
                            case 50:
                              e.next = 53;
                              break;
                            case 52:
                              Ue = !1;
                            case 53:
                              e.next = 59;
                              break;
                            case 55:
                              return (
                                (e.prev = 55),
                                (e.t3 = e.catch(0)),
                                console.log(
                                  "Could not get a wallet connection",
                                  e.t3
                                ),
                                e.abrupt("return")
                              );
                            case 59:
                              return (
                                Ee.on("accountsChanged", function (e) {
                                  m();
                                }),
                                Ee.on("chainChanged", function (e) {
                                  m();
                                }),
                                Ee.on("networkChanged", function (e) {
                                  m();
                                }),
                                (e.next = 64),
                                m()
                              );
                            case 64:
                              d(!Ue);
                            case 65:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [0, 55],
                        [3, 8],
                        [26, 32],
                        [36, 42],
                      ]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            function m() {
              return h.apply(this, arguments);
            }
            function h() {
              return (h = Object(ee.a)(
                $.a.mark(function e() {
                  var t;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Me.eth.getAccounts();
                        case 2:
                          return (t = e.sent), (Ie = t[0]), (e.next = 6), f();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            var b = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e() {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            Ee.close && Ee.close(),
                              Ee.disconnect && Ee.disconnect(),
                              Pe.clearCachedProvider(),
                              (Ee = void 0);
                          } catch (t) {}
                          d(!1), (Ie = void 0), g();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            function f() {
              return y.apply(this, arguments);
            }
            function y() {
              return (y = Object(ee.a)(
                $.a.mark(function e() {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (Be = new Ae(Me, r)),
                            (e.next = 3),
                            Be.sync((!Ue && Ie) || "0x".concat("0".repeat(40)))
                          );
                        case 3:
                          Ee &&
                            (Ee.isMetaMask
                              ? (Be.wallet = "MetaMask")
                              : (Be.wallet = "WalletConnect"));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function x() {
              return j.apply(this, arguments);
            }
            function j() {
              return (j = Object(ee.a)(
                $.a.mark(function e() {
                  var t;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (((t = {
                              walletconnect: { package: te.a, options: {} },
                            }).walletconnect.options = {
                              rpc: { 100: le.defaultWeb3Provider },
                            }),
                            (Pe = new re.a({
                              cacheProvider: !0,
                              providerOptions: t,
                            })),
                            (Me = new ie.a(le.defaultWeb3Provider)),
                            !Pe.cachedProvider)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 7), p();
                        case 7:
                          return (e.next = 9), f();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function g() {
              return v.apply(this, arguments);
            }
            function v() {
              return (v = Object(ee.a)(
                $.a.mark(function e() {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), x();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            return (
              Object(a.useEffect)(function () {
                g();
              }, []),
              Object(k.jsx)(k.Fragment, {
                children: Object(k.jsx)(
                  e,
                  Object(L.a)(
                    Object(L.a)({}, t),
                    {},
                    {
                      hasMetamask: !!window.ethereum,
                      selectWallet: p,
                      disconnect: b,
                      network: undefined,
                      web3: Me,
                      engine: Be,
                      loggedIn: u,
                      state: s,
                    }
                  )
                ),
              })
            );
          };
        },
        bn = n(77),
        fn = x.a.div(
          _e ||
            (_e = Object(y.a)([
              "\n  background: ",
              ";\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: ",
              ";\n",
            ])),
          function (e) {
            return e.modal ? "#fff2fe" : "rgba(255,255,255,0.6)";
          },
          function (e) {
            return e.modal ? "60px 40px 70px;" : "0";
          }
        ),
        yn = function (e) {
          var t = e.children,
            n = e.modal;
          return Object(k.jsx)(fn, { modal: n, children: t });
        },
        xn = Object(N.a)(
          x.a.div(
            ze ||
              (ze = Object(y.a)([
                "\n  align-items: center;\n  background: ",
                ";\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  flex: 1;\n  font-weight: 700;\n  height: 72px;\n  font-size: 21px;\n  justify-content: center;\n  opacity: 1;\n  pointer-events: ",
                ";\n  :nth-child(1) {\n    background: ",
                "\n  }\n  :nth-child(2) {\n    background: ",
                "\n  }\n  :nth-child(3) {\n    background: ",
                "\n  }\n  :nth-child(4) {\n    background: ",
                "\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 18px;\n  }\n",
              ])),
            function (e) {
              return e.active
                ? "rgba(255,66,161,1) !important"
                : "rgb(246, 211, 246)";
            },
            function (e) {
              return e.disabled ? "none" : "all";
            },
            "rgba(255,66,161,.9)",
            "rgba(255,66,161,.8)",
            "rgba(255,66,161,.7)",
            "rgba(255,66,161,.6)"
          )
        ),
        jn = function (e) {
          var t = e.active,
            n = e.children,
            a = e.disabled,
            i = e.onClick;
          return Object(k.jsx)(xn, {
            active: t,
            disabled: a,
            onClick: i,
            children: n,
          });
        },
        gn = Object(N.a)(
          x.a.div(
            Re ||
              (Re = Object(y.a)([
                "\n  align-items: center;\n  background-color: #fff;\n  display: flex;\n",
              ]))
          )
        ),
        vn = function (e) {
          var t = e.children;
          return Object(k.jsx)(gn, { children: t });
        },
        wn = x.a.div(
          Le ||
            (Le = Object(y.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        On = Object(N.a)(
          x.a.span(
            We ||
              (We = Object(y.a)([
                "\n  color: ",
                ";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1rem;\n  margin-top: 0.25em;\n",
              ])),
            function (e) {
              return e.theme.palette.grey[500];
            }
          )
        ),
        kn = Object(N.a)(
          x.a.h3(
            Ne ||
              (Ne = Object(y.a)([
                "\n  font-size: 1em;\n  font-weight: 400;\n  font-family: Arial;\n  margin: 0;\n  padding: 0;\n",
              ]))
          )
        ),
        Tn = function (e) {
          var t = e.label,
            n = e.value;
          return Object(k.jsxs)(wn, {
            children: [
              Object(k.jsx)(kn, { children: n }),
              Object(k.jsx)(On, { children: t }),
            ],
          });
        },
        Dn = Object(N.a)(
          x.a.div(
            He ||
              (He = Object(y.a)([
                "\n  align-items: center;\n  border-radius: ",
                "px;\n  display: flex;\n  flex: 1;\n  font-size: 36px;\n  justify-content: space-between;\n  margin: 30px 24px 24px 24px;\n  padding: 24px 0;\n  @media (max-width: 512px) {\n    margin: 24px 0;\n    padding: 12px 0;\n    flex-direction: column;\n  }\n",
              ])),
            function (e) {
              return e.theme.shape.borderRadius;
            }
          )
        ),
        Sn = function (e) {
          var t = e.children;
          return Object(k.jsx)(Dn, { children: t });
        },
        Cn = Object(N.a)(
          x.a.div(
            Ve ||
              (Ve = Object(y.a)([
                "\n  flex: 1;\n  text-align: center;\n  &:last-of-type {\n    border-right: 0;\n  }\n  @media (max-width: 512px) {\n    :first-child {\n      margin-bottom: 15px;\n    }\n  }\n",
              ]))
          )
        ),
        An = function (e) {
          var t = e.children;
          return Object(k.jsx)(Cn, { children: t });
        },
        Fn = Object(N.a)(
          x.a.div(
            qe ||
              (qe = Object(y.a)([
                "\n  align-items: center;\n  color: ",
                ";\n  display: flex;\n  font-weight: ",
                ";\n  height: ",
                "px;\n  margin: 0;\n  padding: 0 40px;\n  font-size: ",
                ";\n  @media (max-width: 512px) {\n    height: ",
                "px;\n    padding: 0 12px;\n    font-size: ",
                ";\n    .mobile-hide {\n      display: none;\n    }\n  }\n",
              ])),
            function (e) {
              return e.head ? "#000" : "inherit";
            },
            function (e) {
              return e.head ? 600 : 400;
            },
            function (e) {
              return e.head ? 40 : 80;
            },
            function (e) {
              return e.head ? "20px" : "inherit";
            },
            function (e) {
              return e.head ? 26 : 65;
            },
            function (e) {
              return e.head ? "16px" : "inherit";
            }
          )
        ),
        Mn = function (e) {
          var t = e.children,
            n = e.onClick,
            a = e.onMouseOver,
            i = e.onMouseOut,
            s = e.head,
            r = e.hideBorder,
            l = e.style;
          return Object(k.jsx)(Fn, {
            onClick: n,
            onMouseOver: a,
            onMouseOut: i,
            style: l,
            head: s,
            hideBorder: r,
            children: t,
          });
        },
        Bn = n.p + "static/media/metamask.d4e89c6c.svg",
        In = n.p + "static/media/walletConnectLogo.80a855f2.png",
        Pn = n(948),
        En = n(22),
        Un = Object(En.a)(function (e) {
          return {
            colorPrimary: { backgroundColor: e.palette.primary.dark },
            barColorPrimary: { backgroundColor: "#fff" },
          };
        })(Pn.a),
        _n = Un,
        zn = Object(x.b)(
          Ye ||
            (Ye = Object(y.a)([
              "\n  from {\n    opacity: 0;\n    transform: translateY(64px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n",
            ]))
        ),
        Rn = x.a.div(
          Je ||
            (Je = Object(y.a)([
              "\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 2rem 0;\n  z-index: 10;\n  height: 100%;\n  overflow: auto;\n  width: 100vw;\n  text-align: center;\n  @media (max-width: 512px) {\n    padding: 1rem 0;\n  }\n  &:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n",
            ]))
        ),
        Ln = x.a.div(
          Ge ||
            (Ge = Object(y.a)([
              "\n  background-color: rgba(0,0,0,0.5);\n  position: fixed;\n  top: 0; right: 0; left: 0; bottom: 0;\n",
            ]))
        ),
        Wn = x.a.div(
          Ke ||
            (Ke = Object(y.a)([
              "\n  position: relative;\n  z-index: 10;\n  animation: ",
              " .2s ease-out;\n  display: inline-block;\n  flex-direction: column;\n  max-width: 650px;\n  width: 100%;\n  padding: 60px 40px 70px;\n  background: #fff2fe;\n  border-radius: 12px;\n  vertical-align: middle;\n  @media (max-width: 512px) {\n    padding: 20px;\n  }\n",
            ])),
          zn
        ),
        Nn = function (e) {
          var t = e.children,
            n = e.onDismiss;
          return Object(k.jsxs)(Rn, {
            children: [
              Object(k.jsx)(Ln, { onClick: n }),
              Object(k.jsx)(Wn, { children: t }),
            ],
          });
        },
        Hn = Object(N.a)(
          x.a.div(
            Xe ||
              (Xe = Object(y.a)([
                "\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 40px 55px 20px;\n  min-height: 48px;\n  ",
                " {\n    margin: 0;\n  }\n  @media (max-width: 512px) {\n    margin: 20px 0;\n  }\n",
              ])),
            V
          )
        ),
        Vn = function (e) {
          var t = e.centered,
            n = e.children;
          return Object(k.jsx)(Hn, { centered: t, children: n });
        },
        qn = Object(N.a)(
          x.a.div(
            Ze ||
              (Ze = Object(y.a)([
                "\n  align-items: center;\n  background: ",
                ";\n  border-radius: 64px;\n  display: flex;\n  height: 128px;\n  justify-content: center;\n  margin: 40px auto;\n  width: 128px;\n  color: #fff;\n  flex-shrink: 0;\n  & > * {\n    font-size: 48px !important;\n  }\n",
              ])),
            function (e) {
              return e.theme.palette.primary.main;
            }
          )
        ),
        Yn = function (e) {
          var t = e.children;
          return Object(k.jsx)(qn, { children: t });
        },
        Jn = Object(N.a)(
          x.a.div(
            Qe ||
              (Qe = Object(y.a)([
                "\n  font-size: 1.75rem;\n  padding: 0 24px;\n  font-weight: bold;\n  color: ",
                ";\n",
              ])),
            "inherit"
          )
        ),
        Gn = function (e) {
          var t = e.children;
          return Object(k.jsx)(Jn, { children: t });
        },
        Kn = function (e) {
          var t = e.wallet;
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsxs)(Gn, { children: [" Confirming with ", t, " "] }),
              Object(k.jsx)(Yn, {
                children: Object(k.jsx)("img", {
                  alt: "Wallet Logo",
                  src: "MetaMask" == t ? Bn : "WalletConnect" == t ? In : "",
                  style: { height: 96 },
                }),
              }),
              Object(k.jsx)(Vn, {
                children: Object(k.jsx)("div", {
                  style: { width: "100%" },
                  children: Object(k.jsx)(_n, {}),
                }),
              }),
            ],
          });
        },
        Xn = n(463),
        Zn = n.n(Xn),
        Qn =
          (n.p, n.p + "static/media/etherscan-logo-circle-xdai.1bd1fa1a.svg"),
        $n =
          (n.p,
          x.a.div(
            $e ||
              ($e = Object(y.a)([
                "\n  font-size: 1.3em;\n  margin-bottom: 30px;\n  margin-top: 18px;\n",
              ]))
          )),
        ea = function (e) {
          var t = e.txHash,
            n = "https://blockscout.com/xdai/mainnet/tx/".concat(t);
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsx)(Gn, {
                children: " Please wait while your transaction confirms ",
              }),
              Object(k.jsx)(Yn, { children: Object(k.jsx)(Zn.a, {}) }),
              t
                ? Object(k.jsx)($n, {
                    children: Object(k.jsxs)("a", {
                      href: n,
                      style: { textDecoration: "none", color: "inherit" },
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        Object(k.jsx)("img", {
                          src: Qn,
                          style: { margin: "-3.5px 10px", width: "1.15em" },
                          alt: "",
                        }),
                        Object(k.jsx)("span", { children: "View On Explorer" }),
                      ],
                    }),
                  })
                : null,
              Object(k.jsx)(Vn, {
                children: Object(k.jsx)("div", {
                  style: { flex: 1 },
                  children: Object(k.jsx)(_n, {}),
                }),
              }),
            ],
          });
        },
        ta = n(464),
        na = n.n(ta),
        aa = x.a.div(
          et ||
            (et = Object(y.a)([
              "\n  font-size: 1.3em;\n  margin-bottom: 30px;\n  margin-top: 18px;\n  color: ",
              ";\n",
            ])),
          "inherit"
        ),
        ia = function (e) {
          var t = e.txHash,
            n = e.buttonBlurb,
            a = e.onDismiss,
            i = e.title,
            s = "https://blockscout.com/xdai/mainnet/tx/".concat(t);
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsx)(Gn, { children: i }),
              Object(k.jsx)(Yn, { children: Object(k.jsx)(na.a, {}) }),
              t
                ? Object(k.jsx)(aa, {
                    children: Object(k.jsxs)("a", {
                      href: s,
                      style: { textDecoration: "none", color: "inherit" },
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        Object(k.jsx)("img", {
                          src: Qn,
                          style: { margin: "-3.5px 10px", width: "1.15em" },
                          alt: "",
                        }),
                        Object(k.jsx)("span", { children: "View On Explorer" }),
                      ],
                    }),
                  })
                : null,
              Object(k.jsx)(Vn, {
                children: Object(k.jsx)(q, { onClick: a, children: n }),
              }),
            ],
          });
        },
        sa = n(953),
        ra = n(949),
        la = Object(N.a)(
          x.a.div(
            tt ||
              (tt = Object(y.a)([
                "\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n",
              ]))
          )
        ),
        ca = function (e) {
          var t = e.children;
          return Object(k.jsx)(la, { children: t });
        },
        oa = x.a.div(
          nt ||
            (nt = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  height: ",
              "px;\n  justify-content: center;\n  width: ",
              "px;\n  & > * {\n    height:100%;\n  }\n",
            ])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        ua = function (e) {
          var t = e.children,
            n = e.color,
            a = e.size,
            i = void 0 === a ? 36 : a;
          return Object(k.jsx)(oa, { color: n, size: i, children: t });
        },
        da = n(74),
        pa = Object(N.a)(
          x.a.div(
            at ||
              (at = Object(y.a)([
                "\n  flex: 1;\n  color: ",
                ";\n  padding: 0 40px 20px;\n  margin-top: -10px;\n  font-size: 20px;\n",
              ])),
            "red"
          )
        ),
        ma = Object(N.a)(
          x.a.div(
            it ||
              (it = Object(y.a)([
                "\n  font-size: 1.75rem;\n  margin-bottom: 6px;\n  margin-top: 24px;\n  color: ",
                ";\n  padding: 0 24px;\n",
              ])),
            "red"
          )
        ),
        ha = function (e) {
          var t = e.onCancel,
            n = e.onContinue,
            a = Object(k.jsxs)(pa, {
              children: [
                Object(k.jsx)("p", { children: " Component is in beta. " }),
                Object(k.jsx)("p", {
                  children:
                    " Please note that this is an early version of the \u0421omponent. The protocol, dapp (https://component.finance/), and all content are provided on an \"as is\" basis. While we have made reasonable efforts to ensure the \u0421omponent's security and functionality, we strongly advise anyone who chooses to use the early experimental version: Don't risk any funds you do not afford to lose. The \u0421omponent team does not give any warranties, whether express or implied, regarding the protocol's suitability or usability. The \u0421omponent will not be liable for any loss, whether such loss is direct, indirect, special, or consequential, suffered by any party due to their use of the \u0421omponent. Thank you for being an early adopter. ",
                }),
              ],
            });
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsx)(ma, { children: " Caution " }),
              a,
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    outlined: !0,
                    onClick: t,
                    children: " Cancel ",
                  }),
                  Object(k.jsx)(q, { onClick: n, children: " Continue " }),
                ],
              }),
            ],
          });
        },
        ba = x.a.div(
          st ||
            (st = Object(y.a)([
              "\n  width: 40px;\n  flex-shrink: 0;\n  @media screen and (max-width: 512px) {\n    width: 20px;\n  }\n",
            ]))
        ),
        fa =
          (x.a.div(
            rt ||
              (rt = Object(y.a)([
                "\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-width: 44px;\n  min-height: 44px;\n  margin: 0 10px;\n",
              ]))
          ),
          x.a.div(
            lt ||
              (lt = Object(y.a)([
                "\n  padding-left: 6px;\n  padding-right: 6px;\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  @media screen and (min-width: 512px) {\n    font-size: inherit;\n  }\n  span {\n    margin: 0 0 0 5px;\n    line-height: 1em;\n  }\n",
              ]))
          )),
        ya = x.a.form(
          ct ||
            (ct = Object(y.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        xa = x.a.div(
          ot ||
            (ot = Object(y.a)([
              "\n  margin: 0 5px 0 auto;\n  cursor: pointer;\n  color: ",
              ";\n  &:hover {\n    text-decoration: underline;\n  }\n",
            ])),
          "inherit"
        ),
        ja = x.a.div(ut || (ut = Object(y.a)(["\n  margin-bottom: 24px;\n"]))),
        ga = Object(N.a)(
          x.a.div(
            dt ||
              (dt = Object(y.a)([
                "\n  align-items: center;\n  display: flex;\n  height: 32px;\n  justify-content: space-between;\n  max-width: 460px;\n  margin: 0 auto;\n",
              ]))
          )
        ),
        va = x.a.div(
          pt ||
            (pt = Object(y.a)([
              "\n  padding: 20px 10px 10px 10px;\n  font-size: 22px;\n  color: ",
              ";\n",
            ])),
          "inherit"
        ),
        wa = x.a.div(
          mt ||
            (mt = Object(y.a)([
              "\n  display: flex;\n  align-items: center;\n  position: relative;\n  max-width: 460px;\n  margin: 0 auto;\n",
            ]))
        ),
        Oa = function (e) {
          var t = e.balance,
            n = e.isError,
            a = e.isAllowanceError,
            i = e.icon,
            s = e.helperText,
            r = e.onChange,
            l = (e.onAllowanceClick, e.styles),
            c = e.symbol,
            o = e.value,
            u = e.onUnlock;
          return Object(k.jsxs)(k.Fragment, {
            children: [
              Object(k.jsx)(ga, {
                style: { marginTop: "18px", marginBottom: "0px" },
                children: Object(k.jsxs)(xa, {
                  onClick: function () {
                    return r({ value: t });
                  },
                  children: [
                    "Max:",
                    Object(k.jsxs)("span", {
                      className: "number",
                      children: [" ", t, " "],
                    }),
                  ],
                }),
              }),
              Object(k.jsx)(wa, {
                children: Object(k.jsx)(da.a, {
                  fullWidth: !0,
                  allowNegative: !1,
                  customInput: sa.a,
                  defaultColor: "red",
                  error: n,
                  FormHelperTextProps: { className: l.helperText },
                  helperText: s,
                  inputMode: "numeric",
                  min: "0",
                  onValueChange: r,
                  placeholder: "0",
                  thousandSeparator: !0,
                  type: "text",
                  value: o,
                  InputProps: {
                    className: l.inputBase,
                    style: n ? { color: "red" } : null,
                    endAdornment: Object(k.jsxs)(fa, {
                      children: [
                        a
                          ? Object(k.jsx)(q, {
                              small: !0,
                              withInput: !0,
                              onClick: u,
                              children: "Approve",
                            })
                          : t !== o && "0" != t
                          ? Object(k.jsx)(q, {
                              small: !0,
                              withInput: !0,
                              onClick: function () {
                                return r({ value: t });
                              },
                              children: "MAX",
                            })
                          : null,
                        Object(k.jsxs)(ua, {
                          size: "24",
                          children: [
                            " ",
                            Object(k.jsx)("img", { alt: c, src: i }),
                            " ",
                          ],
                        }),
                        Object(k.jsx)("span", { children: c }),
                      ],
                    }),
                  },
                }),
              }),
            ],
          });
        },
        ka = function (e) {
          var t = e.engine,
            n = e.onDeposit,
            i = e.onDismiss,
            s = e.onUnlock,
            r = e.shellIx,
            l = e.state,
            c = Object(k.jsx)("span", {
              style: { color: "red", fontSize: "26px", fontWeight: "bold" },
              children: " These amounts trigger pool's Safety Check  ",
            }),
            o = Object(k.jsx)("span", {
              children: " Your rate on this deposit will be... ",
            }),
            u = Object(a.useState)(
              new ne.List(new Array(t.shells[r].assets.length).fill(""))
            ),
            d = Object(O.a)(u, 2),
            p = d[0],
            m = d[1],
            h = Object(a.useState)(
              new ne.List(new Array(t.shells[r].assets.length).fill(""))
            ),
            b = Object(O.a)(h, 2),
            f = b[0],
            y = b[1],
            x = Object(a.useState)(
              new ne.List(new Array(t.shells[r].assets.length).fill(""))
            ),
            j = Object(O.a)(x, 2),
            g = j[0],
            v = j[1],
            w = Object(a.useState)(null),
            T = Object(O.a)(w, 2),
            D = T[0],
            S = T[1],
            C = Object(a.useState)(!0),
            A = Object(O.a)(C, 2),
            F = A[0],
            B = A[1],
            I = Object(a.useState)(null),
            P = Object(O.a)(I, 2),
            E = (P[0], P[1]),
            U = Object(a.useState)(o),
            _ = Object(O.a)(U, 2),
            z = _[0],
            R = _[1],
            L = Object(a.useState)(!1),
            W = Object(O.a)(L, 2),
            N = W[0],
            H = W[1];
          Object(a.useEffect)(
            function () {
              0 ===
              p.reduce(function (e, t) {
                return e + t;
              })
                ? (B(!0), S(null), R(o))
                : (B(!1),
                  Object(ee.a)(
                    $.a.mark(function e() {
                      return $.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), V();
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )());
            },
            [p, F]
          );
          var V = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e() {
                  var n, a, i, s, o, u, d, p, m, h, b, f, y;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = Y()),
                            (a = n.addresses),
                            (i = n.amounts),
                            (e.next = 3),
                            t.shells[r].viewSelectiveDeposit(a, i)
                          );
                        case 3:
                          if (
                            !1 !== (s = e.sent) &&
                            "3.963877391197344453575983046348115674221700746820753546331534351508065746944e+57" !==
                              s.toString()
                          ) {
                            e.next = 8;
                            break;
                          }
                          return S(c), R(null), e.abrupt("return");
                        case 8:
                          S(null),
                            (o = i.reduce(function (e, t) {
                              return e.plus(t.numeraire);
                            }, new M.a(0))),
                            (u = l.getIn([
                              "shells",
                              r,
                              "shell",
                              "liquidityTotal",
                              "numeraire",
                            ])),
                            (d = o.dividedBy(u)),
                            (p = l.getIn([
                              "shells",
                              r,
                              "shell",
                              "shellsTotal",
                              "numeraire",
                            ])),
                            (m = s.dividedBy(p)),
                            (h = new M.a(1).minus(m.dividedBy(d))),
                            (b = s.multipliedBy(h)),
                            (f = h.absoluteValue().isGreaterThan(1e-4)
                              ? h.isNegative()
                                ? Object(k.jsxs)("span", {
                                    children: [
                                      "and earn a rebalance subsidy of",
                                      Object(k.jsxs)("span", {
                                        style: {
                                          paddingLeft: "4px",
                                          paddingRight: "4px",
                                        },
                                        children: [
                                          Object(k.jsx)("img", {
                                            alt: "",
                                            src: Oe,
                                            style: {
                                              width: "20px",
                                              display: "inline-block",
                                              verticalAlign: "middle",
                                            },
                                          }),
                                          " ",
                                          Math.abs(b.toFixed(8)),
                                        ],
                                      }),
                                    ],
                                  })
                                : Object(k.jsxs)("span", {
                                    children: [
                                      "and pay liquidity providers a fee of",
                                      Object(k.jsxs)("span", {
                                        style: {
                                          paddingLeft: "4px",
                                          paddingRight: "4px",
                                        },
                                        children: [
                                          Object(k.jsx)("img", {
                                            alt: "",
                                            src: Oe,
                                            style: {
                                              width: "20px",
                                              display: "inline-block",
                                              verticalAlign: "middle",
                                            },
                                          }),
                                          " ",
                                          b.toFixed(8),
                                        ],
                                      }),
                                    ],
                                  })
                              : ""),
                            (y = Object(k.jsxs)("div", {
                              children: [
                                "You will mint",
                                Object(k.jsxs)("span", {
                                  style: {
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  },
                                  children: [
                                    Object(k.jsx)("img", {
                                      alt: "",
                                      src: Oe,
                                      style: {
                                        width: "20px",
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                      },
                                    }),
                                    " " +
                                      t.shells[r].getDisplayFromNumeraire(s),
                                  ],
                                }),
                                f,
                              ],
                            })),
                            R(y);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Y = function () {
              var e = [],
                n = [];
              return (
                p.forEach(function (a, i) {
                  if (0 < a) {
                    var s = t.shells[r].assets[i];
                    e.push(s.address), n.push(s.getAllFormatsFromDisplay(a));
                  }
                }),
                { addresses: e, amounts: n }
              );
            },
            J = Object(ra.a)({
              inputBase: {
                paddingLeft: "20px",
                fontSize: "20px",
                height: "60px",
              },
              helperText: {
                color: "red",
                fontSize: "13px",
                marginLeft: "10px",
                position: "absolute",
                top: "100%",
              },
            })(),
            G = t.shells[r].assets.map(function (e, n) {
              var a = l.getIn(["shells", r, "assets", n]),
                i = a.getIn(["balance", "numeraire"]).toFixed(2),
                c = a.getIn(["allowance", "numeraire"]);
              return (
                (c = c.isGreaterThan(new M.a(1e8))
                  ? "100,000,000+"
                  : c.isGreaterThan(new M.a(1e7))
                  ? c.toExponential()
                  : a.getIn(["allowance", "display"])),
                Object(k.jsx)(Oa, {
                  available: c,
                  balance: i,
                  icon: e.icon,
                  isError: !!f.get(n),
                  isAllowanceError: g.get(n),
                  helperText: f.get(n),
                  onAllowanceClick: function () {
                    return E(n);
                  },
                  onChange: function (e) {
                    return (
                      (a = e.value),
                      (i = n),
                      m(p.set(i, a)),
                      void ((a = t.shells[r].assets[i].getNumeraireFromDisplay(
                        a
                      )).isGreaterThan(
                        l.getIn([
                          "shells",
                          r,
                          "assets",
                          i,
                          "balance",
                          "numeraire",
                        ])
                      )
                        ? y(
                            f.set(
                              i,
                              "Amount is greater than your wallet's balance"
                            )
                          )
                        : a.isGreaterThan(
                            l.getIn([
                              "shells",
                              r,
                              "assets",
                              i,
                              "allowance",
                              "numeraire",
                            ])
                          )
                        ? (y(
                            f.set(
                              i,
                              "Amount is greater than current allowance. Approve tokens first."
                            )
                          ),
                          v(g.set(i, !0)))
                        : (y(f.set(i, "")), v(f.set(i, ""))))
                    );
                    var a, i;
                  },
                  styles: J,
                  symbol: e.symbol,
                  value: p.get(n),
                  onUnlock: function () {
                    return s(
                      n,
                      "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    );
                  },
                })
              );
            });
          return Object(k.jsxs)(Nn, {
            onDismiss: i,
            children: [
              N &&
                Object(k.jsx)(ha, {
                  tag: t.shells[r].tag,
                  onCancel: function () {
                    return H(!1);
                  },
                  onContinue: function (e) {
                    for (
                      var a = Y(), i = a.addresses, s = a.amounts, c = 0;
                      c < t.shells[r].assets.length;
                      c++
                    ) {
                      var o = t.shells[r].assets[c],
                        u = i.indexOf(o.address);
                      if (u >= 0) {
                        var d = l.getIn([
                          "shells",
                          r,
                          "assets",
                          c,
                          "allowance",
                          "raw",
                        ]);
                        if (d.isZero()) return E(c);
                        if (d.isLessThan(s[u].raw)) return E(c);
                      }
                    }
                    n(i, s);
                  },
                }),
              Object(k.jsx)(Gn, { children: "Deposit Funds" }),
              Object(k.jsx)(ca, {
                children: Object(k.jsx)(ya, {
                  children: Object(k.jsxs)(ja, {
                    children: [
                      Object(k.jsxs)(va, { children: [" ", D || z, " "] }),
                      G,
                    ],
                  }),
                }),
              }),
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    outlined: !0,
                    onClick: i,
                    children: " Cancel ",
                  }),
                  Object(k.jsx)(ba, {}),
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    onClick: function () {
                      return H(!0);
                    },
                    disabled: f.filter(function (e) {
                      return e;
                    }).size,
                    children: "Deposit",
                  }),
                ],
              }),
            ],
          });
        },
        Ta = n(465),
        Da = n.n(Ta),
        Sa = x.a.div(
          ht ||
            (ht = Object(y.a)([
              "\n  font-size: 1.3em;\n  margin-bottom: 30px;\n  margin-top: 18px;\n",
            ]))
        ),
        Ca = function (e) {
          var t = e.buttonBlurb,
            n = e.onDismiss,
            a = e.title,
            i = e.txHash,
            s = "https://blockscout.com/xdai/mainnet/tx/".concat(i);
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsx)(Gn, { children: a }),
              Object(k.jsx)(Yn, { children: Object(k.jsx)(Da.a, {}) }),
              i
                ? Object(k.jsx)(Sa, {
                    children: Object(k.jsxs)("a", {
                      href: s,
                      style: { textDecoration: "none", color: "inherit" },
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        Object(k.jsx)("img", {
                          src: Qn,
                          style: { margin: "-3.5px 10px", width: "1.15em" },
                          alt: "",
                        }),
                        Object(k.jsx)("span", { children: "View On Explorer" }),
                      ],
                    }),
                  })
                : null,
              Object(k.jsx)(Vn, {
                children: Object(k.jsx)(q, { onClick: n, children: t }),
              }),
            ],
          });
        },
        Aa = function (e) {
          var t = e.shellIx,
            n = e.onDismiss,
            i = Object(a.useContext)(R),
            s = i.engine,
            r = i.state,
            l = Object(a.useState)(""),
            c = Object(O.a)(l, 2),
            o = c[0],
            u = c[1],
            d = Object(a.useState)("start"),
            p = Object(O.a)(d, 2),
            m = p[0],
            h = p[1],
            b = Object(a.useState)(
              Object(ne.fromJS)({
                assets: new Array(s.shells[t].assets.length).fill({
                  error: "",
                  input: "",
                }),
                error: "",
                feeTip: "Your rate on this deposit will be...",
              })
            ),
            f = Object(O.a)(b, 2),
            y = f[0],
            x = f[1],
            j = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(n, a) {
                  var i;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          h("confirming"),
                            x(y.delete("error")),
                            (i = !1),
                            s.selectiveDeposit(
                              t,
                              n,
                              a,
                              function (e) {
                                u(e), h("broadcasting");
                              },
                              function () {
                                (i = !0),
                                  s.sync(),
                                  h("deposit-success"),
                                  x(
                                    y
                                      .delete("fee")
                                      .delete("prompting")
                                      .update("assets", function (e) {
                                        return e.map(function (e) {
                                          return e.set("input", "");
                                        });
                                      })
                                  );
                              },
                              function () {
                                i ||
                                  (h("error"),
                                  x(
                                    y
                                      .delete("fee")
                                      .delete("prompting")
                                      .update("assets", function (e) {
                                        return e.map(function (e) {
                                          return e.set("input", "");
                                        });
                                      })
                                  ));
                              }
                            );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            g = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(n, a) {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          h("confirming"),
                            s.unlock(
                              t,
                              n,
                              a.toString(),
                              function (e) {
                                h("broadcasting"), u(e);
                              },
                              function () {
                                s.sync(), h("unlocking-success");
                              },
                              function () {
                                h("error");
                              }
                            );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            v = function () {
              u(""), h("start");
            };
          return Object(k.jsxs)(k.Fragment, {
            children: [
              "start" === m &&
                Object(k.jsx)(ka, {
                  engine: s,
                  localState: y,
                  onDeposit: j,
                  onUnlock: g,
                  onDismiss: n,
                  setLocalState: x,
                  shellIx: t,
                  state: r,
                }),
              "confirming" === m && Object(k.jsx)(Kn, { wallet: s.wallet }),
              "broadcasting" === m && Object(k.jsx)(ea, { txHash: o }),
              "unlocking-success" === m &&
                Object(k.jsx)(Ca, {
                  buttonBlurb: "Finish",
                  onDismiss: v,
                  title: "Approval Successful.",
                  txHash: o,
                }),
              "deposit-success" === m &&
                Object(k.jsx)(Ca, {
                  buttonBlurb: "Finish",
                  onDismiss: v,
                  title: "Deposit Successful.",
                  txHash: o,
                }),
              "error" === m &&
                Object(k.jsx)(ia, {
                  buttonBlurb: "Finish",
                  onDismiss: v,
                  title: "An error occurred.",
                  txHash: o,
                }),
            ],
          });
        },
        Fa = n(955),
        Ma = x.a.div(bt || (bt = Object(y.a)(["\n  margin: 24px 0;\n"]))),
        Ba = x.a.div(
          ft ||
            (ft = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-width: 44px;\n  min-height: 44px;\n  margin: 0 10px;\n",
            ]))
        ),
        Ia = x.a.div(
          yt ||
            (yt = Object(y.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  margin-top: -20px;\n  color: ",
              ";\n",
            ])),
          "inherit"
        ),
        Pa = x.a.div(
          xt ||
            (xt = Object(y.a)([
              "\n  padding-left: 6px;\n  padding-right: 12px;\n  margin: 0 10px;\n",
            ]))
        ),
        Ea = x.a.form(
          jt ||
            (jt = Object(y.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Ua = x.a.div(gt || (gt = Object(y.a)(["\n"]))),
        _a = x.a.div(
          vt ||
            (vt = Object(y.a)([
              "\n  align-items: center;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n",
            ]))
        ),
        za = x.a.img(
          wt ||
            (wt = Object(y.a)([
              "\n  height: 30px;\n  float: left;\n  margin-right: 10px;\n",
            ]))
        ),
        Ra = x.a.div(
          Ot ||
            (Ot = Object(y.a)([
              "\n  font-size: 24px;\n  font-weight: 300;\n  color: ",
              ";\n",
            ])),
          "inherit"
        ),
        La = x.a.div(
          kt ||
            (kt = Object(y.a)([
              "\n  padding: 20px 10px 10px 10px;\n  font-size: 22px;\n  color: ",
              ";\n",
            ])),
          "inherit"
        ),
        Wa = { color: "red", fontSize: "26px", fontWeight: "bold" },
        Na = x.a.div(
          Tt ||
            (Tt = Object(y.a)([
              "\n  width: 40px;\n  flex-shrink: 0;\n  @media screen and (max-width: 512px) {\n    width: 20px;\n  }\n",
            ]))
        ),
        Ha = new M.a(1),
        Va = function (e) {
          var t = e.disabled,
            n = e.error,
            a = e.icon,
            i = e.onChange,
            s = e.symbol,
            r = e.value,
            l = Object(ra.a)({
              inputBase: { fontSize: "22px", height: "60px" },
              helperText: {
                color: "red",
                fontSize: "13px",
                marginLeft: "10px",
                position: "absolute",
                top: "100%",
              },
            })();
          return Object(k.jsx)(Ma, {
            children: Object(k.jsx)(da.a, {
              fullWidth: !0,
              allowNegative: !1,
              customInput: sa.a,
              disabled: t,
              error: n,
              inputMode: "numeric",
              min: "0",
              onValueChange: i,
              placeholder: "0",
              thousandSeparator: !0,
              type: "text",
              value: r,
              InputProps: {
                className: l.inputBase,
                endAdornment: Object(k.jsx)(Pa, {
                  children: Object(k.jsxs)("span", { children: [" ", s, " "] }),
                }),
                startAdornment: Object(k.jsx)(Ba, {
                  children: Object(k.jsxs)(ua, {
                    children: [
                      " ",
                      Object(k.jsx)("img", { src: a, alt: "" }),
                      " ",
                    ],
                  }),
                }),
              },
            }),
          });
        },
        qa = function (e) {
          var t = e.engine,
            n = e.onProportionalWithdraw,
            i = e.onWithdraw,
            s = e.onDismiss,
            r = e.shellIx,
            l = e.state,
            c = Object(k.jsx)("span", {
              style: Wa,
              children: " These amounts trigger pool's Safety Check  ",
            }),
            o = Object(k.jsx)("span", {
              style: Wa,
              children: " This withdrawal exceeds your LP balance ",
            }),
            u = Object(k.jsx)("span", {
              children: " Your rate for this withdrawal will be... ",
            }),
            d = Object(a.useState)(
              new ne.List(new Array(t.shells[r].assets.length).fill(""))
            ),
            p = Object(O.a)(d, 2),
            m = p[0],
            h = p[1],
            b = Object(a.useState)(
              new ne.List(new Array(t.shells[r].assets.length).fill(""))
            ),
            f = Object(O.a)(b, 2),
            y = f[0],
            x = f[1],
            j = Object(a.useState)(u),
            g = Object(O.a)(j, 2),
            v = g[0],
            w = g[1],
            T = Object(a.useState)(!1),
            D = Object(O.a)(T, 2),
            S = D[0],
            C = D[1],
            A = Object(a.useState)(!0),
            F = Object(O.a)(A, 2),
            B = F[0],
            I = F[1],
            P = Object(a.useState)(null),
            E = Object(O.a)(P, 2),
            U = E[0],
            _ = E[1],
            z = function (e) {
              if ((e.preventDefault(), S)) {
                var t = l.getIn(["shells", r, "shell", "shellsOwned", "raw"]);
                n(t);
              } else {
                var a = R(),
                  s = a.addresses,
                  c = a.amounts;
                i(s, c);
              }
            },
            R = function () {
              var e = [],
                n = [];
              return (
                m.forEach(function (a, i) {
                  if (0 < a) {
                    var s = t.shells[r].assets[i];
                    e.push(s.address), n.push(s.getAllFormatsFromDisplay(a));
                  }
                }),
                { addresses: e, amounts: n }
              );
            },
            L = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e() {
                  var n, a, i, s, u, d, p, m, h, b, f, y, x;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!B) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (n = R()),
                            (a = n.addresses),
                            (i = n.amounts),
                            (s = i.reduce(function (e, t) {
                              return e.plus(t.numeraire);
                            }, new M.a(0))),
                            (e.next = 6),
                            t.shells[r].viewSelectiveWithdraw(a, i)
                          );
                        case 6:
                          if (
                            !1 !== (u = e.sent) &&
                            "3.963877391197344453575983046348115674221700746820753546331534351508065746944e+57" !==
                              u.toString()
                          ) {
                            e.next = 13;
                            break;
                          }
                          return _(c), w(null), e.abrupt("return");
                        case 13:
                          if (
                            !u.isGreaterThan(
                              l.getIn([
                                "shells",
                                r,
                                "shell",
                                "shellsOwned",
                                "numeraire",
                              ])
                            )
                          ) {
                            e.next = 17;
                            break;
                          }
                          return _(o), w(null), e.abrupt("return");
                        case 17:
                          (d = l.getIn([
                            "shells",
                            r,
                            "shell",
                            "liquidityTotal",
                            "numeraire",
                          ])),
                            (p = s.dividedBy(d)),
                            (m = l.getIn([
                              "shells",
                              r,
                              "shell",
                              "shellsTotal",
                              "numeraire",
                            ])),
                            (h = u.dividedBy(m)),
                            (b = new M.a(1).minus(h.dividedBy(p))),
                            (f = u.multipliedBy(b)),
                            (y = b.isNegative()
                              ? Object(k.jsxs)("div", {
                                  children: [
                                    "and pay a liquidity provider fee of",
                                    Object(k.jsxs)("span", {
                                      style: {
                                        paddingLeft: "10px",
                                        paddingRight: "4px",
                                      },
                                      children: [
                                        Object(k.jsx)("img", {
                                          alt: "",
                                          src: Oe,
                                          style: {
                                            width: "20px",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                          },
                                        }),
                                        "\xa0",
                                        Object(k.jsx)("span", {
                                          children: isNaN(f.toFixed(8))
                                            ? "0.00"
                                            : Math.abs(f.toFixed(8)),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : Object(k.jsxs)("div", {
                                  children: [
                                    "and earn a rebalancing subsidy of",
                                    Object(k.jsxs)("span", {
                                      style: {
                                        paddingLeft: "10px",
                                        paddingRight: "4px",
                                      },
                                      children: [
                                        Object(k.jsx)("img", {
                                          alt: "",
                                          src: Oe,
                                          style: {
                                            width: "20px",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                          },
                                        }),
                                        "\xa0",
                                        Object(k.jsx)("span", {
                                          children: isNaN(f.toFixed(8))
                                            ? "0.00"
                                            : f.toFixed(8),
                                        }),
                                      ],
                                    }),
                                  ],
                                })),
                            (x = Object(k.jsxs)("div", {
                              children: [
                                "You will burn",
                                Object(k.jsxs)("span", {
                                  style: {
                                    paddingLeft: "10px",
                                    paddingRight: "4px",
                                  },
                                  children: [
                                    Object(k.jsx)("img", {
                                      alt: "",
                                      src: Oe,
                                      style: {
                                        width: "20px",
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                      },
                                    }),
                                    "\xa0",
                                    " " +
                                      t.shells[r].getDisplayFromNumeraire(u),
                                  ],
                                }),
                                y,
                              ],
                            })),
                            w(x),
                            _(null);
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(
            function () {
              0 ===
              m.reduce(function (e, t) {
                return e + t;
              })
                ? (I(!0), _(null), w(u))
                : S ||
                  (I(!1),
                  Object(ee.a)(
                    $.a.mark(function e() {
                      return $.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (S) {
                                e.next = 3;
                                break;
                              }
                              return (e.next = 3), L();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )());
            },
            [m, B]
          );
          var W = Object(ra.a)(
              {
                root: {
                  "& .MuiSvgIcon-root": {
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "1.65em",
                  },
                  color: "rgba(0, 0, 0, 0.54)",
                  padding: "none",
                },
              },
              { name: "MuiCheckbox" }
            )(),
            N = t.shells[r].assets.map(function (e, t) {
              return Object(k.jsx)(Va, {
                disabled: S,
                icon: e.icon,
                onChange: function (e) {
                  return (function (e, t) {
                    var n = m.set(t, e);
                    h(n),
                      0 ===
                        n.reduce(function (e, t) {
                          return e + t;
                        }) && (I(!0), _(null), w(u));
                  })(e.value, t);
                },
                symbol: e.symbol,
                value: m.get(t),
              });
            });
          return Object(k.jsxs)(Nn, {
            onDismiss: s,
            children: [
              Object(k.jsx)(Gn, { children: "Withdraw Funds" }),
              Object(k.jsx)(ca, {
                children: Object(k.jsx)(Ea, {
                  onSubmit: z,
                  children: Object(k.jsxs)(Ua, {
                    children: [
                      Object(k.jsxs)(_a, {
                        children: [
                          Object(k.jsx)(za, { src: Oe }),
                          Object(k.jsxs)(Ra, {
                            children: [
                              " ",
                              l.getIn([
                                "shells",
                                r,
                                "shell",
                                "shellsOwned",
                                "display",
                              ]) + " LP tokens",
                              " ",
                            ],
                          }),
                        ],
                      }),
                      Object(k.jsxs)(La, { children: [" ", U || v, " "] }),
                      N,
                      Object(k.jsxs)(Ia, {
                        children: [
                          Object(k.jsx)(Fa.a, {
                            checked: S,
                            className: W.root,
                            onChange: function (e) {
                              if (e.target.checked) {
                                var n = t.shells[r].epsilon
                                    .multipliedBy(100)
                                    .toString(),
                                  a = Object(k.jsxs)("div", {
                                    children: [
                                      "You will burn",
                                      Object(k.jsxs)("span", {
                                        style: { paddingLeft: "16.5px" },
                                        children: [
                                          Object(k.jsx)("img", {
                                            alt: "",
                                            src: Oe,
                                            style: {
                                              width: "20px",
                                              display: "inline-block",
                                              verticalAlign: "middle",
                                            },
                                          }),
                                          " " +
                                            l.getIn([
                                              "shells",
                                              r,
                                              "shell",
                                              "shellsOwned",
                                              "display",
                                            ]),
                                        ],
                                      }),
                                      Object(k.jsxs)("span", {
                                        children: [
                                          " and pay a ",
                                          n,
                                          "% fee to liquidity providers for this withdrawal ",
                                        ],
                                      }),
                                    ],
                                  }),
                                  i = m.map(function (e, n) {
                                    return t.shells[r].getDisplayFromNumeraire(
                                      l
                                        .getIn([
                                          "shells",
                                          r,
                                          "shell",
                                          "liquiditiesOwned",
                                          n,
                                          "numeraire",
                                        ])
                                        .multipliedBy(
                                          Ha.minus(t.shells[r].epsilon)
                                        )
                                    );
                                  });
                                h(i),
                                  x(
                                    y.map(function () {
                                      return null;
                                    })
                                  ),
                                  w(a),
                                  I(!1),
                                  C(!0);
                              } else
                                h(
                                  m.map(function () {
                                    return "";
                                  })
                                ),
                                  x(
                                    y.map(function () {
                                      return null;
                                    })
                                  ),
                                  w(u),
                                  C(!1),
                                  I(!0);
                            },
                          }),
                          "Withdraw Everything",
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    onClick: s,
                    outlined: !0,
                    children: "Cancel",
                  }),
                  Object(k.jsx)(Na, {}),
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    onClick: z,
                    style: U ? { cursor: "no-drop" } : null,
                    disabled: U || B,
                    children: S ? "Withdraw Everything" : "Withdraw",
                  }),
                ],
              }),
            ],
          });
        },
        Ya = function (e) {
          var t = e.shellIx,
            n = e.onDismiss,
            i = Object(a.useContext)(R),
            s = i.engine,
            r = i.state,
            l = Object(a.useState)(""),
            c = Object(O.a)(l, 2),
            o = c[0],
            u = c[1],
            d = Object(a.useState)("start"),
            p = Object(O.a)(d, 2),
            m = p[0],
            h = p[1],
            b = Object(a.useState)(
              Object(ne.fromJS)({
                assets: new Array(s.shells[t].assets.length).fill({
                  error: "",
                  input: "",
                }),
                error: "",
                feeTip: "Your rate on this withdrawal will be...",
                proportional: !1,
                zero: !0,
              })
            ),
            f = Object(O.a)(b, 2),
            y = f[0],
            x = f[1],
            j = !1,
            g = function (e) {
              return h("withdrawing"), u(e);
            },
            v = function () {
              return (j = !0), s.sync(), h("success");
            },
            w = function () {
              j || h("error");
            },
            T = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(n) {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          h("confirmingMetamask"),
                            s.proportionalWithdraw(t, n, g, v, w);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(n, a) {
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          h("confirmingMetamask"),
                            s.selectiveWithdraw(t, n, a, g, v, w);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(k.jsxs)(k.Fragment, {
            children: [
              "start" === m &&
                Object(k.jsx)(qa, {
                  engine: s,
                  localState: y,
                  onDismiss: n,
                  onProportionalWithdraw: T,
                  onWithdraw: D,
                  setLocalState: x,
                  shellIx: t,
                  state: r,
                }),
              "confirmingMetamask" === m &&
                Object(k.jsx)(Kn, { wallet: s.wallet }),
              "withdrawing" === m && Object(k.jsx)(ea, { txHash: o }),
              "success" === m &&
                Object(k.jsx)(Ca, {
                  buttonBlurb: "Finish",
                  onDismiss: n,
                  title: "Withdrawal Successful.",
                  txHash: o,
                }),
              "error" === m &&
                Object(k.jsx)(ia, {
                  buttonBlurb: "Finish",
                  onDismiss: n,
                  title: "An error occurred.",
                  txHash: o,
                }),
            ],
          });
        },
        Ja = x.a.div(
          Dt ||
            (Dt = Object(y.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n",
            ]))
        ),
        Ga = x.a.span(
          St ||
            (St = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  font-size: 22px;\n  @media (max-width: 512px) {\n    font-size: 18px;\n  }\n",
            ]))
        ),
        Ka = x.a.div(
          Ct ||
            (Ct = Object(y.a)([
              "\n  width: 40px;\n  flex-shrink: 0;\n  @media screen and (max-width: 512px) {\n    width: 20px;\n  }\n",
            ]))
        ),
        Xa =
          (x.a.a(
            At ||
              (At = Object(y.a)([
                "\n  align-items: center;\n  color: #FFF;\n  display: flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n  margin-left: auto;\n",
              ]))
          ),
          x.a.div(
            Ft ||
              (Ft = Object(y.a)([
                "\n  display: flex;\n  flex: 1;\n  font-size: 22px;\n  justify-content: ",
                ";\n  @media (max-width: 512px) {\n    font-size: 18px;\n  }\n",
              ])),
            function (e) {
              return e.loggedIn ? "flex-start" : "flex-end";
            }
          )),
        Za = Object(N.a)(
          x.a.div(
            Mt ||
              (Mt = Object(y.a)([
                "\n  align-items: center;\n  display: flex;\n  padding: 10px 40px 0;\n  @media (max-width: 512px) {\n    padding: 0 12px;\n  }\n",
              ]))
          )
        ),
        Qa = x.a.div(Bt || (Bt = Object(y.a)(["\n  margin-bottom: 12px;\n"]))),
        $a = function (e) {
          var t = e.asset,
            n = e.liqOwned,
            i = e.liqTotal,
            s = Object(a.useContext)(R).loggedIn;
          return Object(k.jsxs)(Mn, {
            children: [
              Object(k.jsxs)(Ga, {
                children: [
                  Object(k.jsxs)(ua, {
                    children: [
                      " ",
                      Object(k.jsx)("img", { alt: "", src: t.icon }),
                      " ",
                    ],
                  }),
                  Object(k.jsx)("div", { style: { width: 12 } }),
                  Object(k.jsx)("span", { children: t.symbol }),
                ],
              }),
              Object(k.jsx)(Xa, {
                loggedIn: s,
                className: "number",
                children: i,
              }),
              s &&
                Object(k.jsx)(Xa, {
                  style: { justifyContent: "flex-end" },
                  children: n,
                }),
            ],
          });
        },
        ei = function (e) {
          var t = e.shellIx,
            n = Object(a.useContext)(R),
            i = n.engine,
            s = n.state,
            r = n.loggedIn,
            l = n.selectWallet,
            c = Object(a.useState)(!1),
            o = Object(O.a)(c, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useState)(!1),
            m = Object(O.a)(p, 2),
            h = m[0],
            b = m[1],
            f = i.shells[t].assets.map(function (e, n) {
              var a = s.getIn([
                  "shells",
                  t,
                  "shell",
                  "liquiditiesTotal",
                  n,
                  "display",
                ]),
                i = s.getIn([
                  "shells",
                  t,
                  "shell",
                  "liquiditiesOwned",
                  n,
                  "display",
                ]);
              return Object(k.jsx)(
                $a,
                { asset: e, liqTotal: a, liqOwned: i },
                e.symbol
              );
            }),
            y = s.getIn(["shells", t, "shell", "liquidityTotal", "display"]),
            x = s.getIn(["shells", t, "shell", "liquidityOwned", "display"]);
          return Object(k.jsxs)(k.Fragment, {
            children: [
              u &&
                Object(k.jsx)(Aa, {
                  shellIx: t,
                  onDismiss: function () {
                    return d(!1);
                  },
                }),
              h &&
                Object(k.jsx)(Ya, {
                  shellIx: t,
                  onDismiss: function () {
                    return b(!1);
                  },
                }),
              Object(k.jsxs)(Ja, {
                children: [
                  Object(k.jsxs)(Sn, {
                    children: [
                      Object(k.jsx)(An, {
                        children: Object(k.jsx)(Tn, {
                          label: "Pool Reserves",
                          value: y,
                        }),
                      }),
                      r &&
                        Object(k.jsx)(An, {
                          children: Object(k.jsx)(Tn, {
                            label: "Your Balance",
                            value: x,
                          }),
                        }),
                    ],
                  }),
                  Object(k.jsxs)(Qa, {
                    children: [
                      Object(k.jsxs)(Mn, {
                        head: !0,
                        children: [
                          Object(k.jsx)("span", {
                            style: { flex: 1 },
                            children: " Token ",
                          }),
                          Object(k.jsx)("span", {
                            style: { flex: 1, textAlign: r ? "left" : "right" },
                            children: " Pool Reserves ",
                          }),
                          r &&
                            Object(k.jsx)("span", {
                              style: { flex: 1, textAlign: "right" },
                              children: " My Balances ",
                            }),
                        ],
                      }),
                      f,
                    ],
                  }),
                  Object(k.jsx)(Za, {
                    children: r
                      ? Object(k.jsxs)(k.Fragment, {
                          children: [
                            Object(k.jsx)(q, {
                              onClick: d,
                              fullWidth: !0,
                              children: "Deposit",
                            }),
                            Object(k.jsx)(Ka, {}),
                            Object(k.jsx)(q, {
                              outlined: !0,
                              onClick: b,
                              fullWidth: !0,
                              children: "Withdraw",
                            }),
                          ],
                        })
                      : Object(k.jsx)(q, {
                          onClick: function () {
                            return l();
                          },
                          fullWidth: !0,
                          children: "Connect",
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        ti = x.a.div(
          It ||
            (It = Object(y.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n",
            ]))
        ),
        ni = x.a.div(
          Pt ||
            (Pt = Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        ai = x.a.span(
          Et ||
            (Et = Object(y.a)([
              "\n  text-align: center;\n  display: inline;\n  width: 100%;\n  font-size: 18px;\n  text-decoration: none;\n",
            ]))
        ),
        ii = x.a.span(
          Ut ||
            (Ut = Object(y.a)([
              "\n  text-align: center;\n  display: block;\n  width: 100%;\n  font-size: 12px;\n  text-decoration: none;\n  color: ",
              ";\n",
            ])),
          "grey"
        ),
        si = x.a.div(
          _t ||
            (_t = Object(y.a)([
              "\n  display: flex;\n  flex: 1;\n  font-size: 22px;\n  justify-content: flex-end;\n  text-align: right;\n  @media (max-width: 512px) {\n    font-size: 18px;\n    &.mobile-hide {\n      display: none;\n    }\n  }\n  text-decoration: none;\n",
            ]))
        ),
        ri = x.a.div(zt || (zt = Object(y.a)(["\n  margin-bottom: 40px;\n"]))),
        li = x.a.span(
          Rt ||
            (Rt = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1.3;\n  @media (max-width: 512px) {\n    flex-wrap: wrap;\n  }\n",
            ]))
        ),
        ci = x.a.span(
          Lt ||
            (Lt = Object(y.a)([
              "\n  margin: 4px;\n  padding-right: 8px;\n  position: relative;\n  :first-child {\n    margin-left: 0;\n  }\n  :not(:last-child) {\n    border-right: 1px solid ",
              ";\n  }\n  ",
              " {\n    display: none;\n  }\n  @media screen and (max-width: 512px) {\n    :not(:last-child) {\n      border-right: none;\n    }\n    padding-right: 4px;\n    ",
              " {\n      font-size: 13px;\n    }\n  }\n",
            ])),
          "rgba(0, 0, 0, .4)",
          oa,
          ai
        ),
        oi = x.a.div(
          Wt ||
            (Wt = Object(y.a)([
              "\n  padding: 60px 40px 30px;\n  text-align: center;\n  .title {\n    margin-top: 0;\n  }\n  @media (max-width: 512px) {\n    padding: 30px 12px;\n    .title {\n      margin: 0.8em 0 1.6em;\n    }\n  }\n",
            ]))
        ),
        ui = Object(N.a)(
          x.a.span(
            Nt ||
              (Nt = Object(y.a)([
                "\n  font-size: 0.8rem;\n  display: inline-block;\n  padding: .2em .6em;\n  border: 1px solid ",
                ";\n  border-radius: 0.3em;\n  color: ",
                ";\n  text-transform: uppercase;\n  margin-right: auto;\n  &.mobile {\n    display: none;\n  }\n  @media (max-width: 512px) {\n    order: -1;\n    display: none;\n    &.mobile {\n      display: inline-block;\n    }\n  }\n",
              ])),
            function (e) {
              return e.theme.palette.primary.main;
            },
            function (e) {
              return e.theme.palette.primary.main;
            }
          )
        ),
        di = Object(N.a)(
          x.a.div(
            Ht ||
              (Ht = Object(y.a)([
                "\n  align-items: center;\n  color: ",
                ";\n  display: flex;\n  font-weight: ",
                ";\n  margin: 0;\n  padding: 12px 40px;\n  cursor: pointer;\n  :hover {\n    ",
                ",\n    ",
                ",\n    ",
                ",\n    ",
                " {\n      color: ",
                ";\n      border-color: ",
                ";\n    }\n  }\n  @media (max-width: 512px) {\n    padding: 10px 12px;\n  }\n",
              ])),
            function (e) {
              return e.head ? e.theme.palette.grey[500] : "inherit";
            },
            function (e) {
              return e.head ? 500 : 400;
            },
            ui,
            ai,
            si,
            ii,
            d.dark,
            d.dark
          )
        ),
        pi = function (e) {
          var t = e.showShell,
            n = e.liqTotal,
            i = e.liqOwned,
            s = e.assets,
            r = Object(a.useContext)(R).loggedIn;
          return Object(k.jsxs)(di, {
            onClick: t,
            children: [
              Object(k.jsx)(li, {
                children: Object(k.jsx)(ni, {
                  children: s.map(function (e) {
                    return Object(k.jsxs)(
                      ci,
                      {
                        children: [
                          Object(k.jsx)(ai, { children: e.symbol }),
                          Object(k.jsxs)(ua, {
                            size: 24,
                            children: [
                              " ",
                              Object(k.jsx)("img", { src: e.icon, alt: "" }),
                              " ",
                            ],
                          }),
                          Object(k.jsx)(ii, {
                            children:
                              e.weight.multipliedBy(new M.a(100)).toString() +
                              "%",
                          }),
                        ],
                      },
                      e.symbol
                    );
                  }),
                }),
              }),
              Object(k.jsx)(si, {
                className: "number",
                style: {
                  justifyContent: r ? "flex-start" : "flex-end",
                  flex: "1.2",
                },
                children: n,
              }),
              r &&
                Object(k.jsx)(si, {
                  className: "number",
                  style: { justifyContent: "flex-start", flex: "1" },
                  children: i,
                }),
            ],
          });
        },
        mi = function (e) {
          var t = e.showShell,
            n = Object(a.useContext)(R),
            i = n.engine,
            s = n.state,
            r = n.loggedIn,
            l = [];
          if (s.has("shells"))
            for (
              var c = function (e) {
                  var n = s.getIn([
                      "shells",
                      e,
                      "shell",
                      "liquidityTotal",
                      "display",
                    ]),
                    a = s.getIn([
                      "shells",
                      e,
                      "shell",
                      "liquidityOwned",
                      "display",
                    ]);
                  (n = n.slice(
                    0,
                    -1 === n.indexOf(".") ? void 0 : n.indexOf(".")
                  )),
                    (a = a.slice(
                      0,
                      -1 === a.indexOf(".") ? void 0 : a.indexOf(".")
                    )),
                    l.push(
                      Object(k.jsx)(
                        pi,
                        {
                          showShell: function () {
                            return t(e);
                          },
                          assets: i.shells[e].assets,
                          liqTotal: n,
                          liqOwned: a,
                        },
                        e
                      )
                    );
                },
                o = 0;
              o < i.shells.length;
              o++
            )
              c(o);
          return Object(k.jsxs)(ti, {
            children: [
              Object(k.jsx)(oi, {}),
              Object(k.jsxs)(ri, {
                children: [
                  Object(k.jsxs)(Mn, {
                    head: !0,
                    children: [
                      Object(k.jsx)("span", {
                        style: { flex: 1.3 },
                        children: "Pools",
                      }),
                      Object(k.jsx)("span", {
                        style: { flex: 1.2, textAlign: r ? "left" : "right" },
                        children: "Liquidity",
                      }),
                      r &&
                        Object(k.jsx)("span", {
                          style: { flex: 1 },
                          children: "Your Balance",
                        }),
                    ],
                  }),
                  l,
                ],
              }),
            ],
          });
        },
        hi = Object(N.a)(
          x.a.div(
            Vt ||
              (Vt = Object(y.a)([
                "\n  flex: 1;\n  padding: 0 40px 20px;\n  margin-top: -10px;\n  font-size: 24px;\n",
              ]))
          )
        ),
        bi = Object(N.a)(
          x.a.div(
            qt ||
              (qt = Object(y.a)([
                "\n  font-size: 1.75rem;\n  margin-bottom: 6px;\n  margin-top: 24px;\n  padding: 0 24px;\n",
              ]))
          )
        ),
        fi = x.a.div(
          Yt ||
            (Yt = Object(y.a)([
              "\n  position: relative;\n  height: 25px;\n  padding: 20px;\n\n  & .MuiIconButton-root {\n    position: relative;\n    top: 0;\n    right: 0;\n  }\n",
            ]))
        ),
        yi = function (e) {
          var t = e.coin,
            n = e.handleUnlock,
            i = e.handleCancel,
            s = Object(a.useState)(""),
            r = Object(O.a)(s, 2),
            l = r[0],
            c = r[1],
            o = Object(a.useState)(!1),
            u = Object(O.a)(o, 2),
            d = u[0],
            p = u[1],
            m = Object(ra.a)(
              {
                root: {
                  "& .MuiSvgIcon-root": {
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "1.65em",
                  },
                  color: "rgba(0, 0, 0, 0.54)",
                  padding: "none",
                },
              },
              { name: "MuiCheckbox" }
            )(),
            h = t.get("decimals"),
            b = t.getIn(["allowance", "numeraire"]),
            f = t.get("approveToZero") && !b.isZero();
          b = b.isGreaterThan(new M.a("100000000"))
            ? "100,000,000+"
            : b.isGreaterThan(new M.a(1e7))
            ? b.toExponential()
            : t.getIn(["allowance", "display"]);
          var y = t.get("symbol");
          return Object(k.jsxs)(Nn, {
            children: [
              Object(k.jsxs)(bi, {
                children: [
                  t.getIn(["allowance", "numeraire"]).isZero()
                    ? "Unlock "
                    : "Change Allowance For ",
                  y,
                ],
              }),
              Object(k.jsxs)(hi, {
                children: [
                  Object(k.jsxs)("p", {
                    children: [" Current allowance is ", b, " "],
                  }),
                  f
                    ? Object(k.jsxs)("p", {
                        children: [
                          " You must set ",
                          y,
                          "'s allowance to zero before adjusting it to something else. ",
                        ],
                      })
                    : null,
                  Object(k.jsx)(da.a, {
                    value: d
                      ? "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                      : f
                      ? 0
                      : l,
                    disabled: d || f,
                    inputMode: "numeric",
                    inputProps: {
                      style: { fontSize: "22px", textAlign: "center" },
                    },
                    customInput: sa.a,
                    type: "text",
                    thousandSeparator: !0,
                    onValueChange: function (e) {
                      return c(e.value);
                    },
                  }),
                  f
                    ? null
                    : Object(k.jsxs)(fi, {
                        children: [
                          Object(k.jsx)(Fa.a, {
                            checked: d,
                            className: m.root,
                            onChange: function () {
                              c(""), p(!d);
                            },
                          }),
                          "Unlimited Approval",
                        ],
                      }),
                ],
              }),
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    outlined: !0,
                    onClick: i,
                    children: " Cancel ",
                  }),
                  Object(k.jsx)(q, {
                    onClick: function () {
                      return n(
                        d
                          ? l
                          : f
                          ? "0"
                          : new M.a(l)
                              .multipliedBy(new M.a(Math.pow(10, h)))
                              .toFixed()
                      );
                    },
                    children: " Continue ",
                  }),
                ],
              }),
            ],
          });
        },
        xi = n(957),
        ji = n(951),
        gi = n(950),
        vi = x.a.div(
          Jt ||
            (Jt = Object(y.a)([
              "\n  position: relative;\n  margin: 5px 0;\n  color: rgba(172,12,238,1);\n  text-align: center;\n  font-size: 30px;\n",
            ]))
        ),
        wi = Object(x.a)(gi.a)(
          Gt || (Gt = Object(y.a)(["\n  font-size: 30px !important;\n"]))
        ),
        Oi = Object(N.a)(
          Object(x.a)(ji.a)(
            Kt || (Kt = Object(y.a)(["\n  color: ", ";\n"])),
            function (e) {
              return e.theme.palette.primary.main;
            }
          )
        ),
        ki = function (e) {
          var t = e.onClick;
          return Object(k.jsx)(vi, {
            children: Object(k.jsx)(wi, {
              onClick: t,
              component: "span",
              children: Object(k.jsx)(Oi, { fontSize: "inherit" }),
            }),
          });
        },
        Ti = "Your price for this trade will be...",
        Di = x.a.div(
          Xt ||
            (Xt = Object(y.a)([
              "\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-width: 44px;\n  min-height: 44px;\n  padding-left: 24px;\n  padding-right: 14px;\n  flex-shrink: 0;\n",
            ]))
        ),
        Si = x.a.div(
          Zt ||
            (Zt = Object(y.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  max-width: 460px;\n  margin: 0 auto;\n  width: 90%;\n",
            ]))
        ),
        Ci = Object(N.a)(x.a.div(Qt || (Qt = Object(y.a)([""])))),
        Ai = Object(N.a)(
          x.a.div(
            $t ||
              ($t = Object(y.a)([
                "\n  text-align: right;\n  margin-bottom: 5px;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n",
              ]))
          )
        ),
        Fi = x.a.div(en || (en = Object(y.a)([""]))),
        Mi = x.a.div(
          tn || (tn = Object(y.a)(["\n  font-size: 20px;\n  padding: 30px;\n"]))
        ),
        Bi = x.a.div(
          nn ||
            (nn = Object(y.a)([
              "\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-align: center;\n",
            ]))
        ),
        Ii = function (e) {
          var t = e.balance,
            n = e.icon,
            a = e.error,
            i = e.helperText,
            s = e.onChange,
            r = e.styles,
            l = e.value,
            c = e.selections;
          return Object(k.jsxs)(Fi, {
            children: [
              Object(k.jsx)(Ci, {
                children: t
                  ? Object(k.jsxs)(Ai, {
                      onClick: function () {
                        return s({ target: { value: t } });
                      },
                      children: [
                        "Max:",
                        Object(k.jsxs)("span", {
                          className: "number",
                          children: ["\xa0", t],
                        }),
                      ],
                    })
                  : null,
              }),
              Object(k.jsx)(da.a, {
                fullWidth: !0,
                allowNegative: !1,
                customInput: sa.a,
                error: a,
                FormHelperTextProps: { className: r.helperText },
                helperText: i,
                inputMode: "numeric",
                min: "0",
                onChange: s,
                placeholder: "0",
                thousandSeparator: !0,
                type: "text",
                value: l,
                InputProps: {
                  className: r.inputBase,
                  startAdornment: Object(k.jsx)(Di, {
                    children: Object(k.jsxs)(ua, {
                      children: [
                        " ",
                        Object(k.jsx)("img", { src: n, alt: "" }),
                        " ",
                      ],
                    }),
                  }),
                  endAdornment: Object(k.jsx)("div", {
                    style: {
                      marginRight: 6,
                      fontFamily: "Metric, Arial, sans-serif",
                    },
                    children: c,
                  }),
                },
              }),
            ],
          });
        },
        Pi = function () {
          var e,
            t = Object(a.useContext)(R),
            n = t.state,
            i = t.engine,
            s = t.loggedIn,
            r = t.selectWallet;
          var l = Object(a.useState)("start"),
            c = Object(O.a)(l, 2),
            o = c[0],
            u = c[1],
            d = Object(a.useState)(""),
            p = Object(O.a)(d, 2),
            m = p[0],
            h = p[1],
            b = Object(a.useState)(
              new URLSearchParams(window.location.search).get("token0") || 0
            ),
            f = Object(O.a)(b, 2),
            y = f[0],
            x = f[1],
            j = Object(a.useState)(
              new URLSearchParams(window.location.search).get("token1") ||
                1 + i.assets[0].derivatives.length
            ),
            g = Object(O.a)(j, 2),
            v = g[0],
            w = g[1],
            T = Object(a.useState)("1.00"),
            D = Object(O.a)(T, 2),
            S = D[0],
            C = D[1],
            A = Object(a.useState)(""),
            F = Object(O.a)(A, 2),
            B = F[0],
            I = F[1],
            P = Object(a.useState)(
              Object(ne.fromJS)({ shell: 0, derivative: 0 })
            ),
            E = Object(O.a)(P, 2),
            U = E[0],
            _ = E[1],
            z = Object(a.useState)("origin"),
            L = Object(O.a)(z, 2),
            W = L[0],
            N = L[1],
            H = Object(a.useState)(Ti),
            V = Object(O.a)(H, 2),
            Y = V[0],
            J = V[1],
            G = Object(a.useState)(""),
            K = Object(O.a)(G, 2),
            X = K[0],
            Z = K[1],
            Q = Object(a.useState)(""),
            te = Object(O.a)(Q, 2),
            ae = te[0],
            ie = te[1],
            se = i.derivatives[y],
            re = i.derivatives[v],
            le = Object(a.useState)(
              !(null ===
                (e = n.getIn([
                  "shells",
                  0,
                  "derivatives",
                  0,
                  "allowance",
                  "numeraire",
                ])) || void 0 === e
                ? void 0
                : e.isZero())
            ),
            ce = Object(O.a)(le, 2),
            oe = ce[0],
            ue = ce[1],
            de = function (e, t) {
              return (
                -1 !== (e = e.replace(/,/g, "")).indexOf(".") &&
                  e.split(".")[1].length > t &&
                  (((e = e.split("."))[1] = e[1].substring(0, t)),
                  (e = e.join("."))),
                e
              );
            };
          function pe() {
            var e = { color: "red", fontSize: "26px", fontWeight: "bold" };
            Z(
              Object(k.jsx)("span", {
                style: e,
                children: " This amount triggers pool's Safety Check ",
              })
            ),
              J("");
          }
          function me(e, t) {
            return he.apply(this, arguments);
          }
          function he() {
            return (he = Object(ee.a)(
              $.a.mark(function e(t, n) {
                var a, s, r, l, c;
                return $.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = n.dividedBy(t).toFixed(4)),
                          (s = i.derivatives[y].symbol),
                          (r = i.derivatives[v].symbol),
                          (l =
                            "cUSDC" === s || "cDAI" === s || "CHAI" === s
                              ? Object(k.jsxs)("span", {
                                  style: { fontSize: "24px" },
                                  children: [
                                    " ",
                                    Object(k.jsx)("span", {
                                      children: " 1.00 ",
                                    }),
                                    " of ",
                                    s,
                                    " is worth ",
                                  ],
                                })
                              : Object(k.jsxs)("span", {
                                  style: { fontSize: "24px" },
                                  children: [
                                    " ",
                                    Object(k.jsx)("span", {
                                      children: " 1.00 ",
                                    }),
                                    " ",
                                    s,
                                    " is worth ",
                                  ],
                                })),
                          (c =
                            "cUSDC" === r || "cDAI" === r || "CHAI" === r
                              ? Object(k.jsxs)("span", {
                                  style: { fontSize: "24px" },
                                  children: [
                                    " ",
                                    Object(k.jsxs)("span", {
                                      children: [
                                        " ",
                                        Number(a).toFixed(2),
                                        " ",
                                      ],
                                    }),
                                    " of ",
                                    r,
                                    " for this trade ",
                                  ],
                                })
                              : Object(k.jsxs)("span", {
                                  style: { fontSize: "24px" },
                                  children: [
                                    " ",
                                    Object(k.jsxs)("span", {
                                      children: [
                                        " ",
                                        Number(a).toFixed(2),
                                        " ",
                                      ],
                                    }),
                                    " ",
                                    r,
                                    " for this trade ",
                                  ],
                                })),
                          J(
                            Object(k.jsxs)("span", {
                              style: { fontWeight: "bold" },
                              children: [" ", l, " ", c, " "],
                            })
                          ),
                          Z("");
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          Object(a.useEffect)(
            function () {
              if (!(("origin" == W && "." == S) || ("target" == W && "." == B)))
                return "origin" != W || ("" != S && 0 != S.replace(".", ""))
                  ? "target" != W || ("" != B && 0 != B.replace(".", ""))
                    ? "" == B && "" == S
                      ? (J(Ti), void Z(""))
                      : void Object(ee.a)(
                          $.a.mark(function e() {
                            var t, a, s, r, l, c;
                            return $.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (t =
                                          "origin" == W
                                            ? "viewOriginSwap"
                                            : "viewTargetSwap"),
                                        (e.next = 4),
                                        i[t](se, re, "origin" == W ? S : B)
                                      );
                                    case 4:
                                      (a = e.sent),
                                        (s = a.originAmount),
                                        (r = a.targetAmount),
                                        (l = a._shellIx),
                                        (c = a._shellDerivativeIx),
                                        "origin" == W
                                          ? I(r.display)
                                          : C(s.display),
                                        _(
                                          U.set("shell", l).set("derivative", c)
                                        ),
                                        me(s.numeraire, r.numeraire),
                                        ue(
                                          n
                                            .getIn([
                                              "shells",
                                              l,
                                              "derivatives",
                                              c,
                                              "allowance",
                                              "numeraire",
                                            ])
                                            .isGreaterThanOrEqualTo(s.numeraire)
                                        ),
                                        (e.next = 19);
                                      break;
                                    case 15:
                                      (e.prev = 15),
                                        (e.t0 = e.catch(0)),
                                        "origin" == W ? I("") : C(""),
                                        pe();
                                    case 19:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 15]]
                            );
                          })
                        )()
                    : (C(""), J(Ti), void Z(""))
                  : (I(""), J(Ti), void Z(""));
              _(U.set("shell", null).set("derivative", null));
            },
            [S, B, y, v]
          );
          var be = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(t) {
                  var a, s, r, l;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((l = function (e) {
                              a || u("error");
                            }),
                            (r = function (e) {
                              (a = !0),
                                "origin" === W ? C("") : I(""),
                                J(Ti),
                                u("success"),
                                i.sync();
                            }),
                            (s = function (e) {
                              ie(e), u("broadcasting");
                            }),
                            !n
                              .getIn([
                                "shells",
                                U.get("shell"),
                                "derivatives",
                                U.get("derivative"),
                                "allowance",
                                "numeraire",
                              ])
                              .isLessThan(S))
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return", u("unlocking"));
                        case 6:
                          t.preventDefault(),
                            u("confirming"),
                            i[
                              "origin" === W
                                ? "executeOriginSwap"
                                : "executeTargetSwap"
                            ](
                              U.get("shell"),
                              se,
                              re,
                              de(S, se.decimals),
                              de(B, re.decimals)
                            )
                              .send({ from: n.get("account") })
                              .once("transactionHash", s)
                              .once("confirmation", r)
                              .on("error", l),
                            (a = !1);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            fe = (function () {
              var e = Object(ee.a)(
                $.a.mark(function e(t) {
                  var a, s, r, l;
                  return $.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (l = function () {
                            s || u("error");
                          }),
                            (r = function () {
                              (s = !0), u("unlockSuccess"), ue(!0), i.sync();
                            }),
                            (a = function (e) {
                              ie(e), u("broadcasting");
                            }),
                            u("confirming"),
                            se
                              .approve(
                                i.shells[U.get("shell")].address,
                                t.toString()
                              )
                              .send({ from: n.get("account") })
                              .once("transactionHash", a)
                              .once("confirmation", r)
                              .on("error", l),
                            (s = !1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ye = Object(ra.a)({
              root: {
                fontFamily: "Metric, Arial, sans-serif",
                fontSize: "17.5px",
              },
            })(),
            xe = i.derivatives.map(function (e, t) {
              return Object(k.jsxs)(
                xi.a,
                {
                  className: ye.root,
                  value: t,
                  children: [" ", e.symbol, " "],
                },
                t
              );
            }),
            je = i.derivatives.reduce(function (e, t, n) {
              return (
                -1 != i.overlaps[t.symbol].indexOf(se.symbol) &&
                  e.push(
                    Object(k.jsx)(
                      xi.a,
                      { className: ye.root, value: n, children: t.symbol },
                      n
                    )
                  ),
                e
              );
            }, []),
            ge = function (e, t, n) {
              return Object(k.jsx)(sa.a, {
                select: !0,
                InputProps: { className: ye.root },
                children: t,
                onChange: function (t) {
                  return e(t.target.value);
                },
                value: n,
              });
            };
          oe || se.symbol;
          var ve,
            we,
            Oe,
            ke = Object(ra.a)({
              inputBase: { fontSize: "20px", height: "60px" },
              helperText: {
                color: "red",
                fontSize: "13px",
                marginLeft: "10px",
                position: "absolute",
                top: "100%",
              },
            })();
          return (
            null != U.get("shell") &&
              null != U.get("derivative") &&
              ((ve = (Oe = n.getIn([
                "shells",
                U.get("shell"),
                "derivatives",
                U.get("derivative"),
              ])).getIn(["allowance"])),
              (we = Oe.getIn(["balance", "numeraire"]).toFixed(2)),
              (ve = ve.get("numeraire").isGreaterThan(new M.a("100000000"))
                ? "100,000,000+"
                : ve.get("numeraire").isGreaterThan(new M.a("10000000"))
                ? ve.get("numeraire").toExponential()
                : ve.get("display"))),
            Object(k.jsxs)(k.Fragment, {
              children: [
                Object(k.jsxs)(Si, {
                  children: [
                    "unlocking" === o &&
                      Object(k.jsx)(yi, {
                        coin: n.getIn([
                          "shells",
                          U.get("shell"),
                          "derivatives",
                          U.get("derivative"),
                        ]),
                        handleUnlock: fe,
                        handleCancel: function () {
                          return u("none");
                        },
                      }),
                    "confirming" === o &&
                      Object(k.jsx)(Kn, { wallet: i.wallet }),
                    "broadcasting" === o && Object(k.jsx)(ea, { txHash: ae }),
                    "success" === o &&
                      Object(k.jsx)(Ca, {
                        buttonBlurb: "Finish",
                        txHash: ae,
                        onDismiss: function () {
                          return u("none");
                        },
                        title: "Swap Successful.",
                      }),
                    "unlockSuccess" === o &&
                      Object(k.jsx)(Ca, {
                        buttonBlurb: "Finish",
                        onDismiss: function () {
                          return u("none");
                        },
                        title: "Unlocking Successful.",
                      }),
                    "error" === o &&
                      Object(k.jsx)(ia, {
                        buttonBlurb: "Finish",
                        onDismiss: function () {
                          return u("none");
                        },
                        title: "An error occurred.",
                      }),
                    Object(k.jsxs)(Bi, {
                      children: [
                        Object(k.jsxs)(Mi, { children: [" ", Y || X, " "] }),
                        Object(k.jsx)(Ii, {
                          allowance: ve,
                          balance: we,
                          icon: se.icon,
                          onChange: function (e) {
                            N("origin"),
                              C(de(e.target.value, se.decimals)),
                              "" == e.target.value && I(""),
                              new M.a(e.target.value.replace(/,/g, "")).gt(we)
                                ? h(
                                    "Amount is greater than your wallet's balance"
                                  )
                                : h("");
                          },
                          selections: ge(
                            function (e) {
                              x(e);
                              var t = new URLSearchParams(
                                window.location.search
                              );
                              if (
                                (t.set("token0", e),
                                window.history.replaceState(
                                  null,
                                  null,
                                  "?" + t.toString()
                                ),
                                e == v)
                              ) {
                                w(y);
                                var n = new URLSearchParams(
                                  window.location.search
                                );
                                n.set("token1", y),
                                  window.history.replaceState(
                                    null,
                                    null,
                                    "?" + n.toString()
                                  );
                              }
                              var a = i.overlaps[i.derivatives[e].symbol];
                              if (-1 == a.indexOf(re.symbol)) {
                                var s = function (e) {
                                  return e.symbol == a[0];
                                };
                                w(i.derivatives.findIndex(s));
                                var r = new URLSearchParams(
                                  window.location.search
                                );
                                r.set("token1", i.derivatives.findIndex(s)),
                                  window.history.replaceState(
                                    null,
                                    null,
                                    "?" + r.toString()
                                  );
                              }
                            },
                            xe,
                            y
                          ),
                          styles: ke,
                          symbol: se.symbol,
                          title: "From",
                          value: S,
                          error: !!m,
                          helperText: m,
                        }),
                        Object(k.jsx)(ki, {
                          onClick: function () {
                            x(v), w(y);
                            var e = new URLSearchParams(window.location.search);
                            e.set("token0", v),
                              e.set("token1", y),
                              window.history.replaceState(
                                null,
                                null,
                                "?" + e.toString()
                              );
                          },
                        }),
                        Object(k.jsx)(Ii, {
                          icon: re.icon,
                          onChange: function (e) {
                            N("target"),
                              I(de(e.target.value, re.decimals)),
                              "" == e.target.value && C("");
                          },
                          selections: ge(
                            function (e) {
                              w(e);
                              var t = new URLSearchParams(
                                window.location.search
                              );
                              t.set("token1", e),
                                window.history.replaceState(
                                  null,
                                  null,
                                  "?" + t.toString()
                                );
                            },
                            je,
                            v
                          ),
                          styles: ke,
                          symbol: re.symbol,
                          title: "To",
                          value: B,
                        }),
                      ],
                    }),
                  ],
                }),
                s
                  ? Oe &&
                    +Oe.getIn(["allowance"]).get("numeraire").toString() > +S
                    ? Object(k.jsx)(q, {
                        fullWidth: !0,
                        disabled: !B || !S || m,
                        onClick: be,
                        style: { marginTop: "40px" },
                        children: "Execute",
                      })
                    : Object(k.jsxs)(q, {
                        onClick: function () {
                          return fe(
                            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                          );
                        },
                        fullWidth: !0,
                        children: ["Approve ", se.symbol],
                      })
                  : Object(k.jsx)(q, {
                      onClick: r,
                      fullWidth: !0,
                      children: "Connect",
                    }),
              ],
            })
          );
        },
        Ei = n(195),
        Ui = x.a.div(
          an ||
            (an = Object(y.a)([
              "\n  padding: 60px 40px 70px;\n  @media (max-width: 512px) {\n    padding: 40px 10px;\n  }\n",
            ]))
        ),
        _i = x.a.p(
          sn ||
            (sn = Object(y.a)([
              "\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  margin-top: 0;\n  span {\n    font-size: .7em;\n  }\n",
            ]))
        ),
        zi = Object(N.a)(
          x.a.div(
            rn ||
              (rn = Object(y.a)([
                "\n  width: 100%;\n  align-items: center;\n  display: flex;\n  margin-top: 40px;\n  justify-content: center;\n  @media (max-width: 512px) {\n    flex-direction: column;\n  }\n  ",
                " {\n    margin: 0;\n  }\n  ",
                ":not(:last-child) {\n    margin-right: 1.5rem;\n    @media (max-width: 512px) {\n      margin: 0 0 2rem;\n    }\n  }\n",
              ])),
            V,
            V
          )
        ),
        Ri = x.a.div(
          ln ||
            (ln = Object(y.a)([
              "\n  cursor: pointer;\n  display: flex;\n  align-items: flex-start;\n  font-weight: ",
              ";\n  font-size: ",
              ";\n  padding: 12px 0;\n  @media (max-width: 512px) {\n    font-size: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.th ? "bold" : "normal";
          },
          function (e) {
            return e.th ? "20px" : "22px";
          },
          function (e) {
            return e.head ? "16px" : "inherit";
          }
        ),
        Li = x.a.div(
          cn ||
            (cn = Object(y.a)([
              "\n  flex: 1 1 0;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  span {\n    font-size: 0.7em;\n  }\n  &:last-child {\n    flex-grow: 0.5;\n    align-items: flex-end;\n  }\n",
            ]))
        ),
        Wi = n(466);
      function Ni(e) {
        var t,
          n = e.farm,
          a = e.showFarm,
          i = e.loggedIn;
        t =
          "AWOOO" === n.name
            ? n.name
            : "AWOOO/ETH" === n.name
            ? Object(k.jsxs)(k.Fragment, {
                children: [
                  "UNI-V2\xa0",
                  Object(k.jsx)("span", { children: n.name }),
                ],
              })
            : "AWOOO/BNB" === n.name
            ? Object(k.jsxs)(k.Fragment, {
                children: [
                  "Cake-LP\xa0",
                  Object(k.jsx)("span", { children: n.name }),
                ],
              })
            : "AWOOO/XDAI" === n.name
            ? Object(k.jsxs)(k.Fragment, {
                children: [
                  "Sushi-LP\xa0",
                  Object(k.jsx)("span", { children: n.name }),
                ],
              })
            : Object(k.jsxs)(k.Fragment, {
                children: [
                  "AWOOO-LP\xa0",
                  Object(k.jsx)("span", { children: n.name }),
                ],
              });
        var s = isNaN(n.apr)
          ? n.apr
          : "".concat(
              Number(n.apr).toLocaleString("en-US", {
                minimumFractionDigits: 0,
              }),
              "%"
            );
        return Object(k.jsxs)(k.Fragment, {
          children: [
            Object(k.jsx)(Wi.a, {}),
            Object(k.jsxs)(Ri, {
              onClick: function () {
                a(n.managerAddress);
              },
              children: [
                Object(k.jsx)(Li, { children: t }),
                Object(k.jsx)(Li, {
                  "data-tip": n.totalLockedValueUsd + "$",
                  children: n.totalLockedValue.display,
                }),
                i &&
                  Object(k.jsxs)(Li, {
                    "data-tip": n.depositValueUsd + "$",
                    children: [
                      n.userLockedValue.display,
                      Object(k.jsxs)("span", {
                        children: [
                          "(Balance: ",
                          n.underlyingBalance.display,
                          ")",
                        ],
                      }),
                    ],
                  }),
                Object(k.jsx)(Li, { children: s }),
              ],
            }),
          ],
        });
      }
      function Hi(e) {
        var t = e.showFarm,
          n = e.type,
          i = Object(a.useContext)(R),
          s = i.state,
          r = i.loggedIn;
        return Object(k.jsxs)(Ui, {
          children: [
            Object(k.jsx)(_i, {
              children: "stakes" === n ? "AWOOO Staking" : "Liquidity Mining!",
            }),
            Object(k.jsxs)(Ri, {
              th: !0,
              children: [
                Object(k.jsx)(Li, { children: "Pool" }),
                Object(k.jsx)(Li, { children: "Assets" }),
                r && Object(k.jsx)(Li, { children: "My deposit" }),
                Object(k.jsx)(Li, { children: "APR" }),
              ],
            }),
            s.get("farming") &&
              s.get("farming")[n] &&
              Object.values(s.get("farming")[n])
                .sort(function (e, t) {
                  return e.name.length > t.name.length
                    ? -1
                    : e.name.length < t.name.length
                    ? 1
                    : e.name > t.name
                    ? -1
                    : e.name < t.name
                    ? 1
                    : 0;
                })
                .map(function (e) {
                  return Object(k.jsx)(
                    Ni,
                    { farm: e, showFarm: t, loggedIn: r },
                    e.managerAddress
                  );
                }),
          ],
        });
      }
      var Vi,
        qi = Object(N.a)(
          x.a.div(
            on ||
              (on = Object(y.a)([
                "\n  align-items: center;\n  display: flex;\n  height: 32px;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 460px;\n",
              ]))
          )
        ),
        Yi = x.a.div(
          un ||
            (un = Object(y.a)([
              "\n  margin: 0 5px 0 auto;\n  cursor: pointer;\n  color: ",
              ";\n  &:hover {\n    text-decoration: underline;\n  }\n",
            ])),
          "inherit"
        ),
        Ji = x.a.div(
          dn ||
            (dn = Object(y.a)([
              "\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin: 0 auto;\n  max-width: 460px;\n",
            ]))
        ),
        Gi = x.a.div(
          pn ||
            (pn = Object(y.a)([
              "\n  padding-left: 6px;\n  padding-right: 6px;\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  white-space: nowrap;\n  span {\n    margin: 0 0 0 5px;\n    line-height: 1em;\n  }\n",
            ]))
        );
      function Ki(e) {
        var t = e.balance,
          n = e.isError,
          a = e.isAllowanceError,
          i = e.icon,
          s = e.helperText,
          r = e.onChange,
          l = e.styles,
          c = e.symbol,
          o = e.value,
          u = e.onUnlock,
          d =
            l ||
            Object(ra.a)({
              inputBase: {
                fontSize: "20px",
                height: "60px",
                paddingLeft: "20px",
              },
              helperText: {
                color: "red",
                fontSize: "13px",
                marginLeft: "10px",
                position: "absolute",
                top: "100%",
              },
            })();
        return Object(k.jsxs)(k.Fragment, {
          children: [
            Object(k.jsx)(qi, {
              style: { marginTop: "18px", marginBottom: "0px" },
              children: Object(k.jsxs)(Yi, {
                onClick: function () {
                  return r({ value: t });
                },
                children: [
                  "Max:",
                  Object(k.jsxs)("span", {
                    className: "number",
                    children: [" ", t, " "],
                  }),
                ],
              }),
            }),
            Object(k.jsx)(Ji, {
              children: Object(k.jsx)(da.a, {
                fullWidth: !0,
                allowNegative: !1,
                customInput: sa.a,
                error: n,
                FormHelperTextProps: { className: d.helperText },
                helperText: s,
                inputMode: "numeric",
                min: "0",
                onValueChange: r,
                placeholder: "0",
                thousandSeparator: !0,
                type: "text",
                value: o,
                InputProps: {
                  className: d.inputBase,
                  style: n ? { color: "red" } : null,
                  endAdornment: Object(k.jsxs)(Gi, {
                    children: [
                      a
                        ? Object(k.jsx)(k.Fragment, {
                            children: Object(k.jsx)(q, {
                              small: !0,
                              withInput: !0,
                              onClick: u,
                              children: "Approve",
                            }),
                          })
                        : t !== o && "0" != t
                        ? Object(k.jsx)(q, {
                            small: !0,
                            withInput: !0,
                            onClick: function () {
                              return r({ value: t });
                            },
                            children: "MAX",
                          })
                        : null,
                      i &&
                        Object(k.jsxs)(ua, {
                          size: "24",
                          children: [
                            " ",
                            Object(k.jsx)("img", { alt: c, src: i }),
                            " ",
                          ],
                        }),
                      Object(k.jsx)("span", { children: c }),
                    ],
                  }),
                },
              }),
            }),
          ],
        });
      }
      var Xi = x.a.div(
          Vi || (Vi = Object(y.a)(["\n  padding: 0;\n  margin: 20px 0;\n"]))
        ),
        Zi = n(954),
        Qi = {
          currentTx: new Zi.a(null),
          currentTxValue: new Zi.a(null),
          setCurrentTx: function (e, t) {
            Qi.currentTx.next(e), Qi.currentTxValue.next(t);
          },
        };
      function $i(e) {
        var t = e.onDismiss,
          n = e.farm,
          i = Object(a.useState)("0"),
          s = Object(O.a)(i, 2),
          r = s[0],
          l = s[1],
          c = Object(a.useState)(""),
          o = Object(O.a)(c, 2),
          u = o[0],
          d = o[1];
        return (
          Object(a.useEffect)(
            function () {
              n.balance && z(r.replace(/,/g, "")).gt(n.balance.raw)
                ? d("Amount is greater than wallet balance")
                : d("");
            },
            [n, r]
          ),
          Object(k.jsxs)(Nn, {
            onDismiss: t,
            children: [
              Object(k.jsx)(Gn, { children: "Withdraw Funds" }),
              Object(k.jsx)(Xi, {
                children: Object(k.jsx)(Ki, {
                  balance: n.userLockedValue.display,
                  icon: n.icon,
                  isError: !!u,
                  isAllowanceError: !1,
                  helperText: u,
                  onChange: function (e) {
                    return l(e.value);
                  },
                  symbol: n.name.includes("AWOOO") ? n.name : "AWOOO-LP",
                  value: r,
                  onUnlock: function () {
                    return function () {
                      return console.log("unlock");
                    };
                  },
                }),
              }),
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    disabled: u,
                    onClick: function () {
                      r === n.userLockedValue.display
                        ? Qi.setCurrentTx(function () {
                            return n.exit;
                          })
                        : Qi.setCurrentTx(function () {
                            return n.withdraw;
                          }, r),
                        t();
                    },
                    children: "Withdraw",
                  }),
                  Object(k.jsx)(Ka, {}),
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    outlined: !0,
                    onClick: t,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function es(e) {
        var t = e.onDismiss,
          n = e.farm,
          i = (e.setTx, Object(a.useState)("0")),
          s = Object(O.a)(i, 2),
          r = s[0],
          l = s[1],
          c = Object(a.useState)(""),
          o = Object(O.a)(c, 2),
          u = o[0],
          d = o[1],
          p = "Approval required";
        return (
          Object(a.useEffect)(
            function () {
              n.balance && z(r.replace(/,/g, "")).gt(n.balance.raw)
                ? d("Amount is greater than wallet balance")
                : z(r).gt(n.allowance.raw)
                ? d(p)
                : d("");
            },
            [n, r]
          ),
          Object(k.jsxs)(Nn, {
            onDismiss: t,
            children: [
              Object(k.jsx)(Gn, { children: "Deposit Funds" }),
              Object(k.jsx)(Xi, {
                children: Object(k.jsx)(Ki, {
                  balance: n.underlyingBalance.numeraire.toFixed(4),
                  isError: !!u,
                  isAllowanceError: u === p,
                  helperText: u,
                  onChange: function (e) {
                    return l(e.value);
                  },
                  symbol: n.name.includes("AWOOO") ? n.name : "AWOOO-LP",
                  value: r,
                  onUnlock: function () {
                    return n.approve();
                  },
                }),
              }),
              Object(k.jsxs)(Vn, {
                children: [
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    disabled: u,
                    onClick: function () {
                      Qi.setCurrentTx(function () {
                        return n.deposit;
                      }, r),
                        t();
                    },
                    children: "Deposit",
                  }),
                  Object(k.jsx)(Ka, {}),
                  Object(k.jsx)(q, {
                    fullWidth: !0,
                    outlined: !0,
                    onClick: t,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ts,
        ns = Object(k.jsxs)("svg", {
          version: "1.1",
          viewBox: "0 0 32 32",
          width: "28px",
          height: "28px",
          fill: "rgb(255,66,161)",
          children: [
            Object(k.jsx)("path", {
              opacity: ".25",
              d:
                "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4",
            }),
            Object(k.jsx)("path", {
              d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z",
              children: Object(k.jsx)("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 16 16",
                to: "360 16 16",
                dur: "0.8s",
                repeatCount: "indefinite",
              }),
            }),
          ],
        }),
        as = function () {
          return Object(k.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
            children: [ns, "Loading..."],
          });
        },
        is = x.a.table(
          ts ||
            (ts = Object(y.a)([
              "\n  margin: 0 auto;\n  font-size: 20px;\n  td {\n    &:first-child {\n      padding-right: 30px;\n      @media screen and (min-width: 512px) {\n        padding-right: 80px;\n      }\n    }\n    span {\n      font-weight: bold;\n    }\n  }\n  tr:not(:last-child) {\n    td {\n      padding-bottom: 20px;\n    }\n  }\n",
            ]))
        );
      function ss(e) {
        var t,
          n = e.farmAddress,
          i = e.type,
          s = Object(a.useState)(!0),
          r = Object(O.a)(s, 2),
          l = r[0],
          c = r[1],
          o = Object(a.useState)(null),
          u = Object(O.a)(o, 2),
          d = u[0],
          p = u[1],
          m = Object(a.useState)(!1),
          h = Object(O.a)(m, 2),
          b = h[0],
          f = h[1],
          y = Object(a.useState)(!1),
          x = Object(O.a)(y, 2),
          j = x[0],
          g = x[1],
          v = Object(a.useContext)(R),
          w = v.state,
          T = v.loggedIn,
          D = v.selectWallet;
        Object(a.useEffect)(
          function () {
            var e = new URLSearchParams(window.location.search),
              t = n || e.get("address");
            t &&
              w.get("farming") &&
              w.get("farming")[i] &&
              p(w.get("farming")[i][t]),
              c(!1);
          },
          [w, n]
        );
        var S = d
          ? isNaN(d.apr)
            ? "".concat(d.apr)
            : "APR: ".concat(d.apr, "%")
          : "";
        return Object(k.jsx)(Ui, {
          children: l
            ? Object(k.jsx)(as, {})
            : d
            ? Object(k.jsxs)(k.Fragment, {
                children: [
                  b &&
                    Object(k.jsx)($i, {
                      onDismiss: function () {
                        return f(!1);
                      },
                      farm: d,
                    }),
                  j &&
                    Object(k.jsx)(es, {
                      onDismiss: function () {
                        return g(!1);
                      },
                      farm: d,
                    }),
                  Object(k.jsxs)(_i, {
                    children: [
                      d.name,
                      " ",
                      Object(k.jsxs)("span", { children: ["(", S, ")"] }),
                    ],
                  }),
                  Object(k.jsx)(is, {
                    children: Object(k.jsxs)("tbody", {
                      children: [
                        Object(k.jsxs)("tr", {
                          children: [
                            Object(k.jsxs)("td", {
                              children: [
                                Object(k.jsx)("span", { children: "TVL" }),
                                Object(k.jsx)("br", {}),
                                d.totalLockedValue.display,
                              ],
                            }),
                            Object(k.jsxs)("td", {
                              children: [
                                Object(k.jsx)("span", {
                                  children: "Deposited",
                                }),
                                Object(k.jsx)("br", {}),
                                d.userLockedValue.display,
                              ],
                            }),
                          ],
                        }),
                        Object(k.jsxs)("tr", {
                          children: [
                            Object(k.jsxs)("td", {
                              children: [
                                Object(k.jsx)("span", {
                                  children: "Available to deposit",
                                }),
                                Object(k.jsx)("br", {}),
                                d.underlyingBalance.display,
                              ],
                            }),
                            Object(k.jsxs)("td", {
                              children: [
                                Object(k.jsx)("span", {
                                  children: "Claimable",
                                }),
                                Object(k.jsx)("br", {}),
                                d.CMPEarned.display,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(k.jsxs)(zi, {
                    children: [
                      T &&
                        Object(k.jsx)(q, {
                          fullWidth: !0,
                          onClick: function () {
                            return g(!0);
                          },
                          children: "Deposit",
                        }),
                      T &&
                        d.CMPEarned.numeraire.gt(0) &&
                        Object(k.jsx)(q, {
                          fullWidth: !0,
                          onClick: function () {
                            return Qi.setCurrentTx(function () {
                              return d.claim;
                            });
                          },
                          children: "Claim",
                        }),
                      T &&
                        (null === (t = d.userLockedValue) || void 0 === t
                          ? void 0
                          : t.numeraire.gt(0)) &&
                        Object(k.jsx)(q, {
                          outlined: !0,
                          fullWidth: !0,
                          onClick: function () {
                            return f(!0);
                          },
                          children: "Withdraw",
                        }),
                      !T &&
                        Object(k.jsx)(q, {
                          onClick: D,
                          fullWidth: !0,
                          children: "Connect",
                        }),
                    ],
                  }),
                ],
              })
            : Object(k.jsx)(_i, { children: "Unknown farm address" }),
        });
      }
      var rs,
        ls,
        cs,
        os = n(137),
        us =
          (n.p,
          x.a.footer(
            rs ||
              (rs = Object(y.a)([
                "\n  align-items: center;\n  color: #FFF;\n  display: flex;\n  height: 136px;\n  justify-content: center;\n",
              ]))
          )),
        ds = x.a.a(
          ls ||
            (ls = Object(y.a)([
              "\n  align-items: center;\n  color: #FFF;\n  display: flex;\n  height: 44px;\n  justify-content: center;\n  opacity: 0.5;\n  margin: 10px;\n  transition: opacity .2s;\n  width: 44px;\n  &:hover {\n    opacity: 1;\n  }\n",
            ]))
        ),
        ps = x.a.span(
          cs ||
            (cs = Object(y.a)([
              "\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 30px;\n  }\n",
            ]))
        ),
        ms = function (e) {
          var t = e.shellIx,
            n = null;
          if (null !== t) {
            var a = le.pools[100][t].shell;
            n = "https://blockscout.com/xdai/mainnet/address/".concat(a);
          }
          var i = f.palette.primary.main;
          return Object(k.jsx)(D, {
            children: Object(k.jsxs)(us, {
              children: [
                Object(k.jsx)(ds, {
                  target: "_blank",
                  href: "https://twitter.com/componentx",
                  children: Object(k.jsx)(bn.a, {
                    style: { iconColor: i },
                    icon: os.e,
                    size: "2x",
                  }),
                }),
                Object(k.jsx)(ds, {
                  target: "_blank",
                  href: "https://discord.gg/AMrXmH3yff",
                  children: Object(k.jsx)(bn.a, {
                    style: { iconColor: i },
                    icon: os.a,
                    size: "2x",
                  }),
                }),
                Object(k.jsx)(ds, {
                  target: "_blank",
                  href: "https://github.com/Componentfinance",
                  children: Object(k.jsx)(bn.a, {
                    style: { iconColor: i },
                    icon: os.b,
                    size: "2x",
                  }),
                }),
                Object(k.jsx)(ds, {
                  target: "_blank",
                  href: "https://componentfinance.medium.com/",
                  children: Object(k.jsx)(bn.a, {
                    style: { iconColor: i },
                    icon: os.c,
                    size: "2x",
                  }),
                }),
                Object(k.jsx)(ds, {
                  target: "_blank",
                  href: "https://t.me/componentfinance",
                  children: Object(k.jsx)(bn.a, {
                    style: { iconColor: i },
                    icon: os.d,
                    size: "2x",
                  }),
                }),
                null !== t &&
                  Object(k.jsx)(ds, {
                    href: n,
                    target: "_blank",
                    children: Object(k.jsx)(ps, {
                      children: Object(k.jsx)("img", {
                        src: Qn,
                        alt: "etherscan logo",
                      }),
                    }),
                  }),
              ],
            }),
          });
        },
        hs = Object(a.forwardRef)(function (e, t) {
          var n = Object(a.useContext)(R).state,
            i = Object(a.useState)("swap"),
            s = Object(O.a)(i, 2),
            r = s[0],
            l = s[1],
            c = Object(a.useState)("shells"),
            o = Object(O.a)(c, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useState)("stakeList"),
            m = Object(O.a)(p, 2),
            h = m[0],
            b = m[1],
            f = Object(a.useState)("farmList"),
            y = Object(O.a)(f, 2),
            x = y[0],
            j = y[1],
            g = Object(a.useState)(null),
            v = Object(O.a)(g, 2),
            w = v[0],
            T = v[1],
            S = Object(a.useState)(null),
            C = Object(O.a)(S, 2),
            A = C[0],
            F = C[1],
            M = Object(a.useState)(null),
            B = Object(O.a)(M, 2),
            I = B[0],
            P = B[1];
          Object(a.useImperativeHandle)(t, function () {
            return {
              goToIndexTab: function () {
                E("swap");
              },
            };
          }),
            Object(a.useEffect)(function () {
              var e = new URLSearchParams(window.location.search),
                t = e.get("tab"),
                n = e.get("shellId");
              t && ("shell" !== t ? l(t) : (l(t), P(n || 0)));
            }, []);
          function E(e) {
            l(e), U(e);
          }
          function U(e) {
            var t = new URLSearchParams(window.location.search);
            t.set("tab", e),
              t.delete("shellId"),
              t.delete("address"),
              window.history.replaceState(null, null, "?".concat(t));
          }
          var _ = !!le.farmingPools[100].length,
            z = !!le.stakingPools[100].length;
          return Object(k.jsxs)(k.Fragment, {
            children: [
              Object(k.jsx)(D, {
                children: Object(k.jsxs)(yn, {
                  children: [
                    Object(k.jsxs)(vn, {
                      children: [
                        Object(k.jsx)(jn, {
                          active: "swap" === r,
                          disabled: !n.has("shells"),
                          onClick: function () {
                            return E("swap");
                          },
                          children: "Swap",
                        }),
                        Object(k.jsx)(jn, {
                          active: "shell" === r || "shells" === r,
                          disabled: !n.has("shells"),
                          onClick: function () {
                            "shell" === r
                              ? (d("shells"), l("shells"), U("shells"))
                              : (l(u), U(u));
                          },
                          children:
                            "shell" !== r
                              ? "Pools"
                              : Object(k.jsxs)("a", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                  children: [
                                    Object(k.jsx)(bn.a, {
                                      icon: Ei.faArrowCircleLeft,
                                      style: { marginRight: "10px" },
                                    }),
                                    Object(k.jsx)("span", {
                                      children: "Back to pools",
                                    }),
                                  ],
                                }),
                        }),
                        _ &&
                          Object(k.jsx)(jn, {
                            active: "farmList" === r || "farm" === r,
                            onClick: function () {
                              "farm" === r
                                ? (j("farmList"), l("farmList"), U("farmList"))
                                : (l(x), U(x));
                            },
                            children:
                              "farm" !== r
                                ? "Farm"
                                : Object(k.jsxs)("a", {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                    },
                                    children: [
                                      Object(k.jsx)(bn.a, {
                                        icon: Ei.faArrowCircleLeft,
                                        style: { marginRight: "10px" },
                                      }),
                                      Object(k.jsx)("span", {
                                        children: "Farm",
                                      }),
                                    ],
                                  }),
                          }),
                        z &&
                          Object(k.jsx)(jn, {
                            active: "stakeList" === r || "stake" === r,
                            onClick: function () {
                              "stake" === r
                                ? (b("stakeList"),
                                  l("stakeList"),
                                  U("stakeList"))
                                : (l(h), U(h));
                            },
                            children:
                              "stake" !== r
                                ? "Stake"
                                : Object(k.jsxs)("a", {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                    },
                                    children: [
                                      Object(k.jsx)(bn.a, {
                                        icon: Ei.faArrowCircleLeft,
                                        style: { marginRight: "10px" },
                                      }),
                                      Object(k.jsx)("span", {
                                        children: "Stake",
                                      }),
                                    ],
                                  }),
                          }),
                      ],
                    }),
                    "shells" === r &&
                      Object(k.jsx)(mi, {
                        showShell: function (e) {
                          l("shell"), d("shell"), P(e);
                          var t = new URLSearchParams(window.location.search);
                          t.set("tab", "shell"),
                            t.set("shellId", e),
                            window.history.replaceState(
                              null,
                              null,
                              "?".concat(t)
                            );
                        },
                      }),
                    "shell" === r && Object(k.jsx)(ei, { shellIx: I }),
                    "swap" === r && Object(k.jsx)(Pi, {}),
                    "stakeList" === r &&
                      z &&
                      Object(k.jsx)(Hi, {
                        type: "stakes",
                        showFarm: function (e) {
                          l("stake"), b("stakeList"), T(e);
                          var t = new URLSearchParams(window.location.search);
                          t.set("tab", "stake"),
                            t.set("address", e),
                            window.history.replaceState(
                              null,
                              null,
                              "?".concat(t)
                            );
                        },
                      }),
                    "stake" === r &&
                      z &&
                      Object(k.jsx)(ss, { type: "stakes", stakeAddress: w }),
                    "farmList" === r &&
                      _ &&
                      Object(k.jsx)(Hi, {
                        type: "farms",
                        showFarm: function (e) {
                          l("farm"), j("farmList"), F(e);
                          var t = new URLSearchParams(window.location.search);
                          t.set("tab", "farm"),
                            t.set("address", e),
                            window.history.replaceState(
                              null,
                              null,
                              "?".concat(t)
                            );
                        },
                      }),
                    "farm" === r &&
                      _ &&
                      Object(k.jsx)(ss, { type: "farms", farmAddress: A }),
                  ],
                }),
              }),
              Object(k.jsx)(ms, { shellIx: I }),
            ],
          });
        });
      var bs,
        fs = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            n = Object(a.useState)(t || e.getValue()),
            i = Object(O.a)(n, 2),
            s = i[0],
            r = i[1];
          return (
            Object(a.useEffect)(function () {
              var t = e.subscribe(function (e) {
                r(e);
              });
              return function () {
                return t.unsubscribe();
              };
            }),
            s
          );
        };
      function ys(e) {
        var t = e.tx,
          n = Object(a.useState)(),
          i = Object(O.a)(n, 2),
          s = i[0],
          r = i[1],
          l = Object(a.useState)(""),
          c = Object(O.a)(l, 2),
          o = c[0],
          u = c[1],
          d = fs(Qi.currentTxValue),
          p = Object(a.useContext)(R),
          m = p.engine;
        p.state;
        function h(e) {
          u(e), r("broadcasting");
        }
        function b() {
          m.sync(), r("success");
        }
        function f() {
          r("error");
        }
        return (
          Object(a.useEffect)(function () {
            r("confirming"), t(h, b, f, d);
          }, []),
          Object(k.jsxs)(k.Fragment, {
            children: [
              "confirming" === s && Object(k.jsx)(Kn, { wallet: m.wallet }),
              "broadcasting" === s && Object(k.jsx)(ea, { txHash: o }),
              "success" === s &&
                Object(k.jsx)(Ca, {
                  buttonBlurb: "Finish",
                  txHash: o,
                  onDismiss: function () {
                    r("none"), Qi.setCurrentTx(null);
                  },
                  title: "Swap Successful.",
                }),
              "error" === s &&
                Object(k.jsx)(ia, {
                  buttonBlurb: "Finish",
                  onDismiss: function () {
                    r("none"), Qi.setCurrentTx(null);
                  },
                  title: "An error occurred.",
                }),
            ],
          })
        );
      }
      var xs = x.a.div(
          bs ||
            (bs = Object(y.a)([
              "\n  align-items: center;\n  background-size: cover;\n  background: ",
              "\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  color: ",
              "\n",
            ])),
          "radial-gradient(circle at center top, rgb(255 230 247) 0, rgb(255 218 254), rgba(203, 0, 255, .18)) no-repeat fixed center;",
          "#000"
        ),
        js = hn(function (e) {
          var t = e.web3,
            n = e.engine,
            i = e.state,
            s = e.loggedIn,
            r = e.selectWallet,
            l = e.disconnect,
            c = fs(Qi.currentTx),
            o = Object(a.useRef)(null),
            u = g.a.get("userId");
          return (
            u || ((u = w()(3).join("-")), g.a.set("userId", u)),
            Object(k.jsx)(k.Fragment, {
              children: Object(k.jsxs)(R.Provider, {
                value: {
                  web3: t,
                  engine: n,
                  state: i,
                  loggedIn: s,
                  selectWallet: r,
                  disconnect: l,
                },
                children: [
                  c && Object(k.jsx)(ys, { tx: c }),
                  Object(k.jsxs)(xs, {
                    children: [
                      Object(k.jsx)(Z, {
                        goToIndexTab: function () {
                          return o.current.goToIndexTab();
                        },
                      }),
                      t && n && n.shells.length && i.size
                        ? Object(k.jsx)(hs, { ref: o })
                        : Object(k.jsx)(as, {}),
                    ],
                  }),
                ],
              }),
            })
          );
        });
      var gs = function () {
        return (
          Object(a.useEffect)(function () {
            document.title = "AWOOO on ".concat("xDAI");
          }, []),
          Object(k.jsx)(l.a, { theme: f, children: Object(k.jsx)(js, {}) })
        );
      };
      n.p;
      r.a.render(
        Object(k.jsx)(i.a.StrictMode, { children: Object(k.jsx)(gs, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[900, 1, 2]],
]);
//# sourceMappingURL=main.f6e20cda.chunk.js.map
