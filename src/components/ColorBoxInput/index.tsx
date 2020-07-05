import React, { useState, useCallback, ChangeEvent } from "react";

import { Container, Cover, Popover } from "./styles";
import { SketchPicker, ColorResult } from "react-color";

interface ColorBoxInputProps {
  onChangeColor?(color: string): void;
}

const ColorBoxInput: React.FC<ColorBoxInputProps> = ({ onChangeColor }) => {
  const [inputValue, setInputValue] = useState("#2e4779");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleCurrentColor = useCallback(
    (color: ColorResult) => {
      setInputValue(color.hex);
      if (onChangeColor) {
        onChangeColor(color.hex);
      }
    },
    [onChangeColor]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      if (onChangeColor) {
        onChangeColor(event.target.value);
      }
    },
    [onChangeColor]
  );
  return (
    <Container>
      <div
        style={{ backgroundColor: inputValue }}
        onClick={() => setShowColorPicker((old) => !old)}
      ></div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {showColorPicker && (
        <Popover>
          <Cover>
            <SketchPicker color={inputValue} onChange={handleCurrentColor} />
          </Cover>
        </Popover>
      )}
    </Container>
  );
};

export default ColorBoxInput;
