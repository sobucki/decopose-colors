import React, { useState, useEffect, useCallback, useMemo } from "react";
import { parseToHsl, hsl } from "polished";
import { Container, Header, Content } from "./styles";

import ColorBox from "../../components/ColorBox";
import ColorBoxInput from "../../components/ColorBoxInput";
import OutputBox from "../../components/OutputBox";

const Main: React.FC = () => {
  const [currentColor, setCurrentColor] = useState("#9013fe");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [numberOfColors, setNumberOfColors] = useState(12);

  const [half, setHalf] = useState(Math.ceil(numberOfColors / 2));

  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(Array<string>(numberOfColors).fill("#9013fe"));
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

  const lightColors = useMemo(() => {
    return colors.slice(0, half);
  }, [colors, half]);

  const darkColors = useMemo(() => {
    return colors.slice(half, colors.length);
  }, [colors, half]);

  return (
    <Container>
      <Header>
        <h1>Decompose Colors</h1>
      </Header>
      <Content>
        {lightColors.map((col, index) => (
          <ColorBox colorInput={col} key={col} />
        ))}

        <ColorBoxInput
          onChangeColor={(color) => {
            setCurrentColor(color);
          }}
        />

        {darkColors.map((col, index) => (
          <ColorBox colorInput={col} key={col} />
        ))}
      </Content>
      <OutputBox
        baseColor={currentColor}
        darkColors={darkColors}
        lightColors={lightColors}
      />
    </Container>
  );
};

export default Main;
