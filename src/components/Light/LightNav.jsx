import { names } from './LightController';

export const LightNav = ({ active, setActive }) => {
  return (
    <div className="light__nav">
      {names.map((name, i) => (
        <button
          key={i}
          onClick={() => setActive(name)}
          className={`light__nav-item ${
            active === name ? 'light__nav-item--active' : ''
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
