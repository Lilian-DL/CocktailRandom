import { useQueries, useQuery } from "react-query";

const fetchData = async (name: string) => {
    const result = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const json = await result.json();
    return json;
};

export function useNameCocktail(name: string) {
    return useQuery(["Lyrics", name], () =>
        fetchData(name)
    );
}