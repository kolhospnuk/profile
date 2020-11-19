
import React, {Component} from "react";
import "./numberFacts.css";
import Error from "../../error/error";

export default class NumberFacts extends Component {

    state = {
        id: "",
        fact: ""
    }

    numChange = (e) => {
        this.setState({
            id: e.target.value
        })
    };

    onSubmit = (e) => {

        const url = "http://numbersapi.com/";
        const urlNumber = `${url}${this.state.id}`;

        const regExp = /^\d+$/;
        const result = this.state.id.match(regExp);

        e.preventDefault();

        if (urlNumber !== url && result !== null) {
            this.showFact(urlNumber);
        } else {
            this.errorMessage();
        }
        this.setState({id: ""});
    }

    errorMessage = () => {
        this.setState({
            fact: `Enter correct number`
        });
    }

    showFact = (urlNumber) => {
        fetch(urlNumber)
            .then((res) => {
                // console.log(res);
                // if (!res.ok) {
                //     this.errorMessage();
                // }
                return res.text(); //res.json();
            })
            .then((body) => {
                console.log(body);
                this.setState({
                    fact: body
                })
            })
    }

    render() {

        const {placeholder, fact} = this.state;

        const inputClass = `facts-form-input ${placeholder}`;

        return (
            <div className="facts">
                <div className="facts-header">
                    Enter any number and get interesting fact about number
                </div>
                <form className="facts-form"
                      onSubmit={this.onSubmit}>
                    <input className={inputClass}
                           type="text"
                           onChange={this.numChange}
                           placeholder="Enter number..."
                           value={this.state.id}/>
                    <button className="facts-form-btn">
                        Enter
                    </button>
                </form>
                <div className="facts-item">
                    {fact}
                </div>
            </div>
        )
    }
}

// export default class NumberFacts extends Component {
//
//     state = {
//         id: "",
//         url: "",
//         fact: "",
//         placeholder: ""
//     }
//
//     numChange = (e) => {
//         this.setState({
//             url: `http://numbersapi.com/${e.target.value}`
//         })
//     };
//
//     onSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.url !== "") {
//             this.showFact(this.state.url);// better in componentDidMount ?
//         } else {
//             this.setState({placeholder: "empty"})
//         }
//         this.setState({fact: ""})
//     }
//
//     errorMessage = () => {
//         this.setState({
//             fact: `Enter correct number`
//         })
//         throw new Error(`Could not fetch`);
//     }
//
//     showFact = () => {
//         fetch(this.state.url)
//             .then((res) => {
//                 if (!res.ok) {
//                     this.errorMessage();
//                 }
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
//             <div className="container">
//                 <div className="facts">
//                     <div className="facts-header">
//                         Enter any number and get interesting fact about number
//                     </div>
//                     <form className="facts-form"
//                           onSubmit={this.onSubmit}>
//                         <input className={inputClass}
//                                type="text"
//                                onChange={this.numChange}
//                                placeholder="Enter number..."/>
//                         <button className="facts-form-btn">
//                             Enter
//                         </button>
//                     </form>
//                     <div className="facts-item">
//                         {fact}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }