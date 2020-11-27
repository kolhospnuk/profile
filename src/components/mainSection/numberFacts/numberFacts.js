
import React, {Component} from "react";
import "./numberFacts.css";

export default class NumberFacts extends Component {

    state = {
        name: "",
        obj: {},
        variants: ''
    }

    cocktailChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`;

        this.getIngredients(url);

        // if (this.state.obj.length > 0) {
        //     this.setState({
        //         variants: this.state.obj.strDrink
        //     })
        // }
    }

    async getIngredients(url) {
        await fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((body) => {
                this.setState({
                    variants: body.drinks[0].strDrink
                })
            })
    }

    render() {

        const {placeholder, fact} = this.state;

        const inputClass = `facts-form-input ${placeholder}`;

        return (
            <div className="facts">
                <div className="facts-header">
                    Enter any name of cocktail and I say you all ingredients
                </div>
                <form className="facts-form"
                      onSubmit={this.onSubmit}>
                    <input className={inputClass}
                           type="text"
                           onChange={this.cocktailChange}
                           placeholder="Enter cocktail..."
                           value={this.state.name}/>
                    <button className="facts-form-btn">
                        Enter
                    </button>
                </form>
                <div className="facts-item">
                    {this.state.variants}
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