import { useEffect, useState } from "react";

const PokemonCard = () => {
  const URL = `https://pokeapi.co/api/v2/ability`;
  const [ability, setAbility] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json.results);
        setAbility(json.results);
      });
    };
    fetchData();
  });
  return <div>{ability.results}</div>;
};

export default PokemonCard;
