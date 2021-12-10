import { Point, Polygon, Theme } from '@dd-jonas/mafs';

const lamps = [
  [1.5, 1.5], // Plafondlamp
  [0.4, 2.7], // Bureaulamp
  [1, 2.8], // TV-lamp L
  [2, 2.8], // TV-lamp R
  [2.7, 2.9], // Make-uplamp
  [3, 1.8], // Wandlamp O
  [2.8, 0.4], // Boekenkastlamp
  [1.5, 0], // Wandlamp Z
  [0.7, 0.2], // Aap
  [0.2, 1.6], // Vloerlamp
];

const Lamps = () => {
  return lamps.map((lamp, i) => (
    <Point key={i} x={lamp[0]} y={lamp[1]} color={Theme.yellow} />
  ));
};

const Walls = () => {
  return (
    <>
      <Polygon
        points={[
          [0, 0],
          [3, 0],
          [3, 3],
          [0, 3],
        ]}
        color={Theme.indigo}
      />
    </>
  );
};

export const Room = () => {
  return (
    <>
      <Walls />
      <Lamps />
    </>
  );
};
