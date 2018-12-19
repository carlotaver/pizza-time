import React from "react";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return <h1>Tomatoe</h1>;
    return (
      <ul>
        {object.keys(this.props.ingredients).map(ingredienKey => (
          <PizzaIngredient ingredienKey={PizzaIngredient} />
          <PizzaIngredient
            key={ingredienKey}
            ingredient={this.props.ingredients[ingredienKey]}
            ingredienKey={ingredienKey}
            ingredientSelector={this.props.ingredientSelector}
           />
        ))}
      </ul>
    );
  }
}
export default PizzaIngredients;
/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/

export default PizzaIngredients;
