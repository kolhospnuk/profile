import React, {Component} from "react";
import "./cocktailRecipes.css";
import CocktailService from "../../../services/services";

export default class CocktailRecipes extends Component {

    state = {
        name: '',
        list: null,
        ingredients: '',
        placeholder: false
    }

    cocktailChange = (e) => {
        this.setState({
            name: e.target.value,
            placeholder: false
        })
    };

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
            ingredients: 'Enter correct cocktail name',
            placeholder: true
        })
    }

    showCocktails(list) {
        const cocktails = list.map((item) => {
            return item.strDrink;
        })

        this.setState({
            ingredients: `Enter one of the suggested cocktails: ${cocktails.toString()}`
        })
    }

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
            ingredients: `For making a cocktail you will need: ${ingredientsList}`
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
                    Enter the names of the cocktail
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


// export default class NumberFacts extends Component {
//
//     state = {
//         id: "",
//         fact: ""
//     }
//
//     numChange = (e) => {
//         this.setState({
//             id: e.target.value
//         })
//     };
//
//     onSubmit = (e) => {
//
//         const url = "http://numbersapi.com/";
//         const urlNumber = `${url}${this.state.id}`
//         console.log(url)
//         console.log(urlNumber)
//
//         const regExp = /^\d+$/;
//         const result = this.state.id.match(regExp)
//
//         e.preventDefault();
//
//         if (urlNumber !== url && result !== null) {
//             this.showFact(urlNumber);
//         } else {
//             this.errorMessage();
//         }
//         this.setState({id: ""});
//     }
//
//     errorMessage = () => {
//         this.setState({
//             fact: `Enter correct number`
//         });
//     }
//
//     showFact = (urlNumber) => {
//         fetch(urlNumber)
//             .then((res) => {
//                 return res.text(); //res.json();
//             })
//             .then((body) => {
//                 this.setState({
//                     fact: body
//                 })
//             })
//     }
//
//     render() {
//
//         const {placeholder, fact} = this.state;
//
//         const inputClass = `facts-form-input ${placeholder}`;
//
//         return (
//             <div className="facts">
//                 <div className="facts-header">
//                     Enter any number and get interesting fact about number
//                 </div>
//                 <form className="facts-form"
//                       onSubmit={this.onSubmit}>
//                     <input className={inputClass}
//                            type="text"
//                            onChange={this.numChange}
//                            placeholder="Enter number..."
//                            value={this.state.id}/>
//                     <button className="facts-form-btn">
//                         Enter
//                     </button>
//                 </form>
//                 <div className="facts-item">
//                     {fact}
//                 </div>
//             </div>
//         )
//     }
// }