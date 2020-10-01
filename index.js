const fs = require('fs').promises;

async function createFiles() {
  let data = await fs.readFile('./files/Estados.json');
  const states = JSON.parse(data);

  data = await fs.readFile('./files/Cidades.json');
  const cities = JSON.parse(data);

  for (state of states) {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await fs.writeFile(
      `./states/${state.Sigla}.json`,
      JSON.stringify(stateCities, null, 2)
    );
  }
}

createFiles();

// async function readFile() {
//   let data = await fs.readFile('./files/Cidades.json');
//   const states = JSON.parse(data);
//   data = await fs.readFile('./files/Estados.json');
//   const cities = JSON.parse(data);
//   for (state of states) {
//     const stateCities = cities.filter((city) => city.Estado === state.ID);
//     console.log(state);
//     await fs.writeFile(
//       `./states/${state.Sigla}.json`,
//       JSON.stringify(stateCities)
//     );
//   }
// }
// readFile();
