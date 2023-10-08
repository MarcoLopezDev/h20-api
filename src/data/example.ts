//import fs from "fs/promises";
//import * as fs from 'fs'
import fs = require('fs/promises');
import { Document, VectorStoreIndex } from 'llamaindex';

async function main() {
  // Load essay from abramov.txt in Node
  // const essay = await fs.readFile(
  //   "../../node_modules/llamaindex/examples/abramov.txt",
  //   "utf-8",
  // );

  const essay = await fs.readFile('src/data/paul_graham_essay.txt', 'utf-8');
  console.log('Passing');
  // Create Document object with essay
  const document = new Document({ text: essay });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query(
    'What did the author do in college?',
  );

  // Output response
  console.log(response.toString());
}

main();
