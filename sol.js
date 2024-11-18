async function poke(callback) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    callback(error);
  }
}
function err(err) {
  console.error(err);
}

poke(err);
