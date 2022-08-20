const { ethers } = require("hardhat")
const businessJSON = require("../artifacts/contracts/Business.sol/BusinessX3Cards.json")

async function main() {
  const abi = businessJSON.abi
  const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_PROJECT_ID)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)

  const businessX3 = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await businessX3.mint("https://ipfs.io/ipfs/QmV5aBN8uLxCohXnJbGKiHvfRhyWCWKbPE98v7dSjweKnh")
  console.log("NFT minted")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

// Luis: https://ipfs.io/ipfs/Qmf6tzNdprPSNWdDRvYCdfw8QX3Ck3odbsntL9xPdmrrdV
// Bryce: https://ipfs.io/ipfs/QmSXmL3h11gmZrKCtDXyhSSB3bSmqi1mugBwGPDapEZ6Hj
// Paul Allen: https://ipfs.io/ipfs/QmZDc6y4XmtKMzREWpRpFjJDoFSz8M1rie9ufQeAXQA26Y
// Van Patten: https://ipfs.io/ipfs/QmdZkoURUj1uUF5N47smjE46EziVRpqKMryd7kM7KBf65B
// Bateman: https://ipfs.io/ipfs/QmV5aBN8uLxCohXnJbGKiHvfRhyWCWKbPE98v7dSjweKnh
