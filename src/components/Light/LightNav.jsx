const names = ['Jane', 'Mary'];

export const LightNav = ({ active, setActive }) => {
  return (
    <div className="light__nav">
      {names.map((name, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`light__nav-item ${
            active === i ? 'light__nav-item--active' : ''
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
