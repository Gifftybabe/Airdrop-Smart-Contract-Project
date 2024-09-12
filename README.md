Here's a simple and professional `README.md` file for your project:

---

# Airdrop Contract and Token

This repository contains the Solidity code and associated scripts for an Airdrop system. The project consists of two main components: the `AirdropContract` and the `AirdropToken`. The `AirdropContract` facilitates the distribution of ERC20 tokens to eligible users using a Merkle Tree for verification. The `AirdropToken` is the ERC20 token being distributed.

## Project Structure

- **Contracts**:
  - `AirdropContract.sol`: A smart contract that manages the airdrop process, allowing users to claim tokens if they are eligible.
  - `AirdropToken.sol`: An ERC20 token contract that represents the token being distributed.

- **Deployment Scripts**:
  - `AirdropTokenModule.js`: Hardhat Ignition module for deploying the `AirdropToken` contract.
  - `AirdropContractModule.js`: Hardhat Ignition module for deploying the `AirdropContract` with the specified token address and Merkle root hash.

- **Merkle Tree Generator**:
  - `generateMerkleTree.js`: A script that reads a CSV file, generates a Merkle Tree, and outputs the Merkle root and proofs for each eligible user.

- **Tests**:
  - `MerkleAirdropHe.js`: Unit tests for the airdrop contract to ensure proper functionality, including verification of eligibility and token claims.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Gifftybabe/Airdrop-Smart-Contract-Project.git
    cd Airdrop-Smart-Contract
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Usage

1. **Compile the Contracts**:
    ```sh
    npx hardhat compile
    ```

2. **Deploy the Contracts**:
   - Deploy `AirdropToken`:
     ```sh
     npx hardhat run scripts/deployAirdropToken.js
     ```
   - Deploy `AirdropContract`:
     ```sh
     npx hardhat run scripts/deployAirdropContract.js
     ```

3. **Generate Merkle Tree**:
   - Place your eligible addresses and amounts in a CSV file.
   - Run the Merkle tree generator:
     ```sh
     node scripts/generateMerkleTree.js path/to/your-file.csv
     ```

4. **Run Tests**:
    ```sh
    npx hardhat test
    ```

### Contract Features

- **AirdropContract**:
  - Handles token deposits and withdrawals.
  - Uses Merkle Tree to verify user eligibility before allowing token claims.
  - Admin (owner) can update the Merkle root or withdraw remaining tokens.

- **AirdropToken**:
  - An ERC20 token with an initial supply of 100,000 tokens.
  - Allows the owner to mint additional tokens.

