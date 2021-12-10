const vec = require('vec-la');

export function xyFromQuadtraticBezier(p1, c1, p2, t) {
  return [
    vec.scale(p1, (1 - t) ** 2),
    vec.scale(c1, 2 * t * (1 - t)),
    vec.scale(p2, t ** 2),
  ].reduce(vec.add, [0, 0]);
}

export function inPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    pairs.push([arr[i], arr[i + 1]]);
  }

  return pairs;
}

export function inTrips(arr) {
  const trips = [];
  for (let i = 0; i < arr.length - 2; i += 2) {
    trips.push([arr[i], arr[i + 1], arr[i + 2]]);
  }

  return trips;
}
