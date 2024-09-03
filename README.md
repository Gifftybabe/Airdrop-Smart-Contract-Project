
# Merkle Airdrop 

This repository contains smart contracts for managing an ERC20 token and a Merkle tree-based airdrop, along with deployment scripts using Hardhat.

## Overview

### Contracts

1. **MerkleAirdrop**
   - **Purpose**: Facilitates an airdrop of ERC20 tokens based on a Merkle tree proof.
   - **Features**:
     - Allows users to claim airdrops if they provide a valid Merkle proof.
     - Ensures that each address can claim the airdrop only once.
   
2. **NGToken**
   - **Purpose**: A standard ERC20 token with minting capabilities.
   - **Features**:
     - Provides an initial supply of tokens to the deployer.
     - Allows the owner to mint additional tokens.

## Setup and Deployment

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed.
- **Hardhat**: Install Hardhat by following the [Hardhat installation guide](https://hardhat.org/getting-started/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Deployment

To deploy the contracts, use the provided Hardhat scripts. Modify the scripts with appropriate network settings before deployment.

1. **Deploy the Merkle Airdrop Contract**

   ```bash
   npx hardhat run scripts/deployMerkleAirdrop.ts --network <network>
   ```

2. **Deploy the NGToken Contract**

   ```bash
   npx hardhat run scripts/deployNGToken.ts --network <network>
   ```

Replace `<network>` with the desired network (e.g., `rinkeby`, `mainnet`).

## Usage

- **MerkleAirdrop Contract**: Users can claim tokens by providing a valid Merkle proof and their address.
- **NGToken Contract**: Allows minting of tokens by the contract owner.


-