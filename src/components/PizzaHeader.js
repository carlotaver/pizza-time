import React from "react";

class PizzaHeader extends React.Component {
  render() {
    return (
      <header>
        <h1 className="pizza-text">🍕It`s Pizza Time!`</h1>
        <h1 className="pizza-text">
          <span role="pizza" aria-label="">
            🍕
          </span>
          It`s Pizza Time!
        </h1>
      </header>
    );
  }
}

/* TODO: Create the PizzaHeader Component consisting of:
  - A `header`
    - An `h1` with class `pizza-text`
      Show the text `🍕 It's Pizza Time!`
*/
export default PizzaHeader;
