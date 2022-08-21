# BusinessX3Cards (CARD)

**BusinessX3Cards** is an NFT collection that is shorthand for _Business Business Business Cards_, which is a satirical name for businessman jargon/acumen when conducting themselves and exchanging contacts.

The collection contains an NFT with the image and attributes for each of the 5 business cards shown in the horror/thriller movie "American Psycho", released in 2000, starring Christian Bale.

The first 4 cards, belonging to Patrick Bateman, David Van Patten, Timothy Bryce, and Paul Allen, respectively, appear in this 94 second clip: https://youtu.be/aZVkW9p-cCU

The fifth and final card, belonging to Luis Carruthers, is shown at the beginning of this clip: https://youtu.be/MCo6TtUkCWc

More business cards may be added to the collection at a later date. The smart contract allows more business card NFTs to be minted.

# Etherscan

The contract can be seen on the Rinkeby testnet at: 0x150d56350A27aE02cC63701B3714d44B07F16747

https://rinkeby.etherscan.io/address/0x150d56350A27aE02cC63701B3714d44B07F16747

# OpenSea

The collection can be viewed on OpenSea at the following address: https://testnets.opensea.io/collection/businessx3cards

# Deploy/Mint with Hardhat

This project was built with Hardhat.

To create another collection, the deploy script must be run

```
npx hardhat run scripts/deploy.js --network rinkeby
```

Once it runs successfully, the contract address should output to the terminal. This address is where the future NFTs can be minted.

To mint NFTs on this address, put the card JSON data IPFS address into

```
await businessX3.mint(### HERE ###)
```

and then subsequently run

```
npx hardhat run scripts/mint.js --network rinkeby
```

The newly minted NFTs should show up on the Etherscan page. To view them on OpenSea, connect a MetaMask (or other provider) wallet to OpenSea, and you should see them there.
