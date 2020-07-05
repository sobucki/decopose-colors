import React, { HTMLAttributes } from "react";

import { Container } from "./styles";

interface ColorBoxProps {
  colorInput: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ colorInput }) => {
  return (
    <Container>
      <div style={{ backgroundColor: colorInput }}></div>
      <span>{colorInput}</span>
    </Container>
  );
};

export default ColorBox;
