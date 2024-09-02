import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import csv from "csv-parser";

const values = [];
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Convert the amount to a string if necessary
    values.push([row.address, row.amount]);
  })
  .on('end', () => {
    // Once CSV parsing is complete, create the Merkle Tree
    const tree = StandardMerkleTree.of(values, ["address", "uint256"]);
    console.log('Merkle Root:', tree.root);
    fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
  });