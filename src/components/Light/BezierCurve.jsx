import { cloneElement } from 'react';
import { inPairs, inTrips, xyFromQuadtraticBezier } from './utils';
import { FunctionGraph, Line, Theme } from '@dd-jonas/mafs';

export const BezierCurve = ({ points, elements }) => {
  return (
    <>
      {/* Control lines */}
      {inPairs(points).map(([p1, p2], i) => (
        <Line.Segment
          key={i}
          point1={p1}
          point2={p2}
          opacity={0.35}
          color={Theme.pink}
        />
      ))}

      {/* Quadratic bezier lerp  */}
      {inTrips(points).map(([p1, c1, p2], i) => (
        <FunctionGraph.Parametric
          key={i}
          t={[0, 1]}
          weight={3}
          samples={100}
          xy={(t) => xyFromQuadtraticBezier(p1, c1, p2, t)}
        />
      ))}

      {/* Movable points */}
      {elements.map((el, i) =>
        cloneElement(el, {
          key: i,
          color: i === 0 ? Theme.orange : Theme.green,
        })
      )}
    </>
  );
};
