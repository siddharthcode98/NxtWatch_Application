import { Button } from "./StyledComponents";

const GradientDirectionItem = (props) => {
  const { details, SelectedButton, activeBtn } = props;
  const { value, displayText } = details;
  const onClickSelect = (event) => {
    SelectedButton(event.target.value);
  };

  const isActive = activeBtn === value ? "1" : "0.5";

  console.log(isActive);
  return (
    <li>
      <Button onClick={onClickSelect} value={value} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  );
};

export default GradientDirectionItem;
