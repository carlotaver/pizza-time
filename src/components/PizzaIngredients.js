import React from "react";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props.ingredients).map(ingredientsKey => (
          <PizzaIngredient
            key={ingredientsKey}
            ingredient={this.props.ingredients[ingredientsKey]}
            ingredientKey={ingredientsKey}
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
