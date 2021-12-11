import { CartesianCoordinates, Mafs, useMovablePoints } from '@dd-jonas/mafs';
import { useEffect } from 'react';
import { useMutation } from '../../core/hooks/useMutation.js';

import { BezierCurve } from './BezierCurve.jsx';
import { apiBaseUrl } from './LightController.jsx';
import { Room } from './Room.jsx';

export const LightPanel = ({ active, initialPoints, onSave }) => {
  const { points, elements, addPoints, setPoints, deletePoints } =
    useMovablePoints(initialPoints);
  const mutation = useMutation(`${apiBaseUrl}/paths/${active}`, {
    method: 'PUT',
  });

  useEffect(() => {
    if (JSON.stringify(points) !== JSON.stringify(initialPoints)) {
      setPoints(...initialPoints);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPoints]);

  const lengthen = () => addPoints([1, 3.25], [2, 3.25]);
  const shorten = () => points.length >= 3 && deletePoints(2);
  const reverse = () => setPoints(...[...points].reverse());
  const reset = () => setPoints(...initialPoints);
  const save = () => mutation.mutate({ points }, () => onSave(points));

  return (
    <>
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
          <button onClick={reset}>Reset</button>
          <button
            onClick={save}
            className="full-width"
            disabled={mutation.loading}
          >
            Save
          </button>
        </div>

        {mutation.error && (
          <p
            onClick={mutation.reset}
            className="alert--error"
            style={{ cursor: 'pointer' }}
          >
            {mutation.error.message}
          </p>
        )}
      </div>

      <div className="light__points">
        <h2>Points</h2>
        {points.map((point, i) => (
          <p key={i}>
            <strong>p{i}</strong>&emsp; [{point[0].toFixed(2)},{' '}
            {point[1].toFixed(2)}]
          </p>
        ))}
      </div>
    </>
  );
};
