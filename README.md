## Airdrop Smart Contract Project

### Overview

The Airdrop Smart Contract project is designed to facilitate the distribution of ERC20 tokens to eligible users using a Merkle tree structure for verification. This ensures secure and efficient token claims while allowing the contract owner to manage distributions effectively.

### Smart Contracts

1. **AirdropContract**
   - This contract is responsible for managing the airdrop process.
   - It verifies user eligibility via a Merkle proof, allowing users to claim their allocated tokens.
   - Key functions include:
     - **Deposit Tokens**: Allows the contract owner to deposit ERC20 tokens into the contract for distribution.
     - **Update Merkle Root**: The owner can update the Merkle root hash for new eligibility criteria.
     - **Withdraw Remaining Tokens**: The owner can withdraw any unclaimed tokens after the airdrop period.
     - **Claim Reward**: Eligible users can claim their allocated tokens by providing a valid Merkle proof.

2. **AirdropToken**
   - This ERC20 token contract defines the token (ARD) to be distributed in the airdrop.
   - It includes a minting function restricted to the contract owner, allowing for additional tokens to be created as needed.

### Deployment

The project has been successfully deployed on the **Lisk Sepolia Testnet** with the following contract addresses:

- **AirdropContract**: [0x6466Bb81Bb4D61181A09c1F8b7D180133De54687](https://sepolia.lisk.com/address/0x6466Bb81Bb4D61181A09c1F8b7D180133De54687)
- **AirdropToken**: [0xeB5Cb2A9da59a5d03Edba7C049Bc35C54569ee84](https://sepolia.lisk.com/address/0xeB5Cb2A9da59a5d03Edba7C049Bc35C54569ee84)

### Key Features

- **Secure Token Distribution**: The use of Merkle proofs ensures that only eligible users can claim tokens, protecting against unauthorized access.
- **Owner Control**: The contract owner has the authority to manage deposits, withdrawals, and updates to eligibility criteria, ensuring flexibility in token distribution.
- **Efficient Claims**: Users can claim their tokens without relying on complex transactions, making the process user-friendly and efficient.

### Error Handling

The contract incorporates robust error handling to prevent common issues, including:

- Rejecting zero addresses and amounts.
- Preventing multiple claims by the same user.
- Ensuring the contract has sufficient tokens to fulfill claims.

### Conclusion

This Airdrop Smart Contract project provides a secure, efficient, and user-friendly solution for token distribution, leveraging the power of Merkle trees for eligibility verification. With the contracts deployed on the Lisk Sepolia Testnet, we can now proceed to conduct airdrop events and manage token distributions seamlessly.
