import React, { Component } from "react";
import "./App.css";
import { tsMethodSignature } from "@babel/types";

class App extends Component {
  state = {
    selectedColor: null,
    bold: null,
    italic: null,
    underline: null,
    styleString: "",
    text: ""
  };

  setColor = color => {
    this.setState({ selectedColor: color });
  };

  setStyle = style => {
    if (this.state[style]) {
      this.setState({ [style]: null });
    } else this.setState({ [style]: style });
  };

  handleText = event => {
    console.log("Event value: ", event.target.value);
    this.setState({ text: event.target.value });
  };

  render() {
    const styles = {
      bold: { fontWeight: "bold" },
      italic: { fontStyle: "italic" },
      underline: { textDecorationLine: "underline" }
    };

    const styleNames = ["bold", "italic", "underline"];
    const colors = ["yellow", "blue", "red", "black", "purple"];

    const stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.setStyle(style)}
        >
          {style}
        </button>
      );
    });

    const colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.setColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          value={this.state.value}
          onChange={this.handleText}
          style={{
            color: this.state.selectedColor,
            fontWeight: this.state.bold,
            fontStyle: this.state.italic,
            textDecorationLine: this.state.underline
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
