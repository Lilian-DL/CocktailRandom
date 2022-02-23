import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const json = await result.json();
    return json;
}

export function useCocktailRandom() {
    return useQuery(["cocktailRandom"], fetchData);
}
