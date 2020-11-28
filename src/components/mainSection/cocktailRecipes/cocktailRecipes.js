import React, {Component} from "react";
import "./cocktailRecipes.css";
import CocktailService from "../../../services/services";

export default class CocktailRecipes extends Component {

    /**
     * Cocktails states
     *
     * @type {{name: string, ingredients: string, placeholder: boolean, list: null}}
     */
    state = {
        name: '',
        list: null,
        result: '',
        placeholder: false
    }

    cocktailChange = (e) => {
        this.setState({
            name: e.target.value,
            placeholder: false
        })
    };

    /**
     * Get list with data about cocktails from service
     *
     * @param e
     */
    onSubmit = (e) => {
        const {name} = this.state;

        e.preventDefault();

        if (name.length <= 3) {
            this.showError();
        } else {
            const service = new CocktailService();
            service.getCocktail(name).then((cocktail) => {
                this.setState({
                    list: cocktail.drinks
                })
            }).then(() => {
                this.showResult();
            })
        }
    }

    showResult() {
        const {list} = this.state;

        if (list === null) {
           this.showError();
        } else {
            if (list.length > 1) {
                this.showCocktails(list);
            } else {
                this.showIngredients(list);
            }
        }
    }

    showError() {
        this.setState({
            result: 'Enter correct cocktail name',
            placeholder: true
        })
    }

    /**
     * Search all cocktails with a similar name
     *
     * @param list - cocktails data
     */
    showCocktails(list) {
        const cocktails = list.map((item) => {
            return item.strDrink;
        })

        this.setState({
            result: `Enter one of the suggested cocktails: ${cocktails.toString()}`
        })
    }

    /**
     * Search all ingredients in cocktail
     *
     * @param list - cocktail data
     */
    showIngredients(list) {
        const ingredientsMax = 10;
        let ingredientsList = '';

        for (let i = 0; i <= ingredientsMax; i++) {
            for (let key in list[0]) {
                if (key === `strIngredient${i}` && list[0][key] != null) {
                    ingredientsList += `${list[0][key]}, ` ;
                }
            }
        }

        this.setState({
            result: `For making a cocktail you will need: ${ingredientsList}`
        });
    }

    render() {

        const {name, placeholder, ingredients} = this.state;

        let inputClass = `cocktail-form-input`;

        if (placeholder) {
            inputClass = `${inputClass}-active`
        }

        return (
            <div className="cocktail">
                <div className="cocktail-header">
                    Enter the name of the cocktail
                </div>
                <form className="cocktail-form"
                      onSubmit={this.onSubmit}>
                    <input className={inputClass}
                           type="text"
                           onChange={this.cocktailChange}
                           placeholder="Enter cocktail..."
                           value={name}/>
                    <button className="cocktail-form-btn">
                        Enter
                    </button>
                </form>
                <div className="cocktail-item">
                    {ingredients}
                </div>
            </div>
        )
    }
}