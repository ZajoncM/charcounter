import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      wordCount: 0,
      charCount: 0,
      charCountWithoutSpace: 0,
      isChanging: false
    };
  }

  wordCounter = () => {
    let currentWord = 0;
    let wordCount = [];
    let isFirstCharTrue = false;
    for (let i = 0; i < this.state.text.length; i++) {
      if (isFirstCharTrue === false) {
        if (
          this.state.text[i] !== "." &&
          this.state.text[i] !== " " &&
          this.state.text[i] !== ","
        ) {
          isFirstCharTrue = true;
          wordCount[currentWord] = "";
          wordCount[currentWord] += this.state.text[i];
        }
      } else {
        if (this.state.text[i] !== " ") {
          wordCount[currentWord] += this.state.text[i];
        } else if (
          this.state.text[i] === " " &&
          wordCount[currentWord] !== ""
        ) {
          currentWord++;
          wordCount[currentWord] = "";
        }
      }
    }

    if (wordCount[currentWord] === "") {
      this.setState({
        wordCount: wordCount.length - 1
      });
    } else {
      this.setState({
        wordCount: wordCount.length
      });
    }
  };

  charCounterWithoutSpace = () => {
    const charCountWithoutSpace = [...this.state.text].filter(
      char => char !== " "
    );
    this.setState({
      charCountWithoutSpace: charCountWithoutSpace.length
    });
  };

  charCounter = () => {
    const charCount = this.state.text.length;

    this.setState({
      charCount
    });
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
      isChanging: true
    });
  };

  componentDidUpdate() {
    if (this.state.isChanging) {
      this.wordCounter();
      this.charCounter();
      this.charCounterWithoutSpace();
      this.setState({
        isChanging: false
      });
    }
  }

  render() {
    const { wordCount, charCount, charCountWithoutSpace } = this.state;
    return (
      <div className="main__container">
        <div className="main__wordcounter counter">
          <p className="main__text">Liczba słów: {wordCount}</p>
        </div>
        <div className="main__charcounter counter">
          <p className="main__text">Liczba znaków: {charCount}</p>
        </div>
        <div className="main__charcounter-nospace counter">
          <p className="main__text">
            Liczba znaków (bez spacji): {charCountWithoutSpace}
          </p>
        </div>
        <textarea
          className="main__input"
          placeholder="Tu wklej tekst lub napisz coś..."
          value={this.state.text}
          onChange={e => this.onChange(e)}
        />
      </div>
    );
  }
}

export default Main;
