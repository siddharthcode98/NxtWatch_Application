import { Component } from "react";

import {
  GradientContainer,
  Paragraph,
  Heading,
  Button,
  LabelInput,
  InputElement,
  ListContainer,
} from "./StyledComponents";

import GradientDirectionItem from "../GradientDirectionItem";

const gradientDirectionsList = [
  { directionId: "TOP", value: "top", displayText: "Top" },
  { directionId: "BOTTOM", value: "bottom", displayText: "Bottom" },
  { directionId: "RIGHT", value: "right", displayText: "Right" },
  { directionId: "LEFT", value: "left", displayText: "Left" },
];

class GradientGenerator extends Component {
  state = {
    color1Input: "#8ae323",
    color2Input: "#014f7b",
    color1: "#8ae323",
    color2: "#014f7b",
    toDirection: gradientDirectionsList[0].value,
    activeBtn: gradientDirectionsList[0].value,
  };

  SelectedButton = (direction) => {
    // console.log(direction);
    this.setState({ toDirection: direction, activeBtn: direction });
  };
  onChangeColor1 = (event) => {
    this.setState({ color1Input: event.target.value });
  };
  onChangeColor2 = (event) => {
    this.setState({ color2Input: event.target.value });
  };
  onClickGenerate = () => {
    const { color1Input, color2Input } = this.state;
    this.setState({ color1: color1Input, color2: color2Input });
  };
  render() {
    const {
      color1Input,
      color2Input,
      color1,
      color2,
      toDirection,
      activeBtn,
    } = this.state;
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        direction1={toDirection}
        gradient1={color1}
        gradient2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <ListContainer>
          {gradientDirectionsList.map((eachItem) => (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              SelectedButton={this.SelectedButton}
              activeBtn={activeBtn}
            />
          ))}
        </ListContainer>

        <Paragraph>Pick the colors</Paragraph>

        <LabelInput htmlFor="color1">{color1Input}</LabelInput>
        <InputElement
          id="color1"
          type="color"
          onChange={this.onChangeColor1}
          value={color1Input}
        ></InputElement>
        <LabelInput htmlFor="color2">{color2Input}</LabelInput>
        <InputElement
          id="color2"
          type="color"
          onChange={this.onChangeColor2}
          value={color2Input}
        ></InputElement>
        <Button type="button" onClick={this.onClickGenerate}>
          Generate
        </Button>
      </GradientContainer>
    );
  }
}

export default GradientGenerator;
