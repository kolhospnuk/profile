
export default class CocktailService {

    _apiBase = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        return await res.json();
    }

    getCocktail(name) {
        return this.getResource(`${name}`);
    }
}