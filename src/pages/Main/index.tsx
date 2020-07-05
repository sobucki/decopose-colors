import React, { useState, useEffect, useCallback } from "react";
import { parseToHsl, hsl } from "polished";
import { Container, Content } from "./styles";
import ColorBox from "../../components/ColorBox";
import ColorBoxInput from "../../components/ColorBoxInput";

const Main: React.FC = () => {
  const [currentColor, setCurrentColor] = useState("#2e4779");
  const [numberOfColors, setNumberOfColors] = useState(12);

  const [half, setHalf] = useState(Math.ceil(numberOfColors / 2));

  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(Array<string>(numberOfColors).fill("#2e4779"));
    setHalf(Math.ceil(numberOfColors / 2));
  }, [numberOfColors]);

  const calcLimitValue = (value: number, percent: number) => {
    const result = value + percent;

    if (result > 1.0) {
      return 1.0;
    }
    if (result < 0) {
      return 0;
    }
    return result;
  };

  const updateColors = useCallback(
    (hue: number, lightness: number, saturation: number) => {
      const percent = 1 / numberOfColors;

      const arrayColors = Array<string>(numberOfColors).fill("");

      arrayColors.forEach((value, index) => {
        if (index < numberOfColors / 2) {
          const power = numberOfColors - (numberOfColors / 2 + index);
          arrayColors[index] = hsl({
            hue: hue,
            lightness: calcLimitValue(lightness, percent * power),
            saturation: calcLimitValue(saturation, percent * -power),
          });
        } else {
          const power =
            numberOfColors -
            (numberOfColors / 2 - (index - numberOfColors)) +
            1;
          arrayColors[index] = hsl({
            hue: hue,
            lightness: calcLimitValue(lightness, percent * -power),
            saturation: calcLimitValue(saturation, percent * +power),
          });
        }
      });

      setColors(arrayColors);
    },
    [numberOfColors]
  );
  useEffect(() => {
    try {
      const { hue, lightness, saturation } = parseToHsl(currentColor);

      updateColors(hue, lightness, saturation);
    } catch (error) {}
  }, [updateColors, currentColor, numberOfColors]);
  return (
    <Container>
      <Content>
        {colors.map((col, index) => {
          if (index < half) {
            return <ColorBox colorInput={col} />;
          }
        })}

        <ColorBoxInput
          onChangeColor={(color) => {
            setCurrentColor(color);
          }}
        />

        {colors.map((col, index) => {
          if (index >= half) {
            return <ColorBox colorInput={col} />;
          }
        })}
      </Content>
    </Container>
  );
};

export default Main;
