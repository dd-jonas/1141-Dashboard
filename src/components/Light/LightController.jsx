import { Room } from './Room.jsx';
import { CartesianCoordinates, Mafs, useMovablePoints } from '@dd-jonas/mafs';
import { BezierCurve } from './BezierCurve.jsx';

export const LightController = () => {
  const { points, elements, addPoints, setPoints, deletePoints } =
    useMovablePoints([
      [0.2, 0.2],
      [2.8, 0.2],
      [2.8, 2.8],
    ]);

  const lengthen = () => addPoints([1, 3.25], [2, 3.25]);
  const shorten = () => points.length >= 3 && deletePoints(2);
  const reverse = () => setPoints(...[...points].reverse());

  return (
    <section className="light">
      <div className="light__cartesian">
        <Mafs
          width={600}
          height={600}
          xAxisExtent={[-0.5, 3.5]}
          yAxisExtent={[-0.5, 3.5]}
        >
          <CartesianCoordinates />
          <Room />
          <BezierCurve points={points} elements={elements} />
        </Mafs>
      </div>

      <div className="light__controls">
        <h2>Controls</h2>
        <div className="light__buttons">
          <button onClick={lengthen}>Longer</button>
          <button onClick={shorten}>Shorter</button>
          <button onClick={reverse}>Reverse</button>
        </div>
      </div>

      <div className="light__output">
        <h2>Points</h2>
        {points.map((point, i) => (
          <p key={i}>
            <strong>p{i}:</strong> [{point[0].toFixed(2)}, {point[1].toFixed(2)}
            ]
          </p>
        ))}
      </div>
    </section>
  );
};
