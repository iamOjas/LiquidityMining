const GovernanceToken = artifacts.require("GovernanceToken");
const LiquidityPool = artifacts.require("LiquidityPool");
const UnderlyingToken = artifacts.require("UnderlyingToken");

module.exports = async function (deployer,_network,address){
   
    await deployer.deploy(UnderlyingToken);
    const underlyingToken = await UnderlyingToken.deployed();

    await deployer.deploy(GovernanceToken);
    const governanceToken = await GovernanceToken.deployed();

    await deployer.deploy(LiquidityPool,underlyingToken.address, governanceToken.address);

}