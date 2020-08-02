import React from "react";

import { Container } from "./styles";

interface OutputBoxProps {
  lightColors: string[];
  darkColors: string[];
  baseColor: string;
}

const OutputBox: React.FC<OutputBoxProps> = ({
  baseColor,
  lightColors,
  darkColors,
}) => {
  return (
    <Container>
      {lightColors.map((color, index) => (
        <p key={index}>
          <strong>{`light-${lightColors.length - index}: `}</strong>
          <span>{`"${color}"`}</span>
        </p>
      ))}
      {
        <p>
          <strong>base-color: </strong>
          <span>{`"${baseColor}"`}</span>
        </p>
      }
      {darkColors.map((color, index) => (
        <p key={index}>
          <strong>{`dark-${index + 1}: `}</strong>
          <span>{`"${color}"`}</span>
        </p>
      ))}
    </Container>
  );
};

// {colors.map((col) => (
//   <p>{col}</p>
// ))}

export default OutputBox;
