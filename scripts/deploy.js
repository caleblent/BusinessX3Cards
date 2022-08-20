const { ethers } = require("hardhat")

async function main() {
  const Business = await ethers.getContractFactory("BusinessX3Cards")
  const business = await Business.deploy("BusinessX3Cards", "CARD")

  await business.deployed()
  console.log(`Contract successfully deployed :: ${business.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
