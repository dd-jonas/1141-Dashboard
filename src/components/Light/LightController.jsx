import { useState } from 'react';

import { useFetch } from '../../core/hooks/useFetch.js';
import { LightNav } from './LightNav.jsx';
import { LightPanel } from './LightPanel.jsx';
import { Spinner } from './Spinner';

export const apiBaseUrl = 'http://localhost:3001/api'; // TODO: Get IP address from .env
export const names = ['Jane', 'Mary'];

export const LightController = () => {
  const [active, setActive] = useState(names[0]);
  const { data, error, loading, updateData } = useFetch(`${apiBaseUrl}/paths`);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p className="alert--error">
        Failed to fetch data. Error: {error.message}
      </p>
    );
  }

  const updatePath = (points) => {
    updateData(
      data.map((path) => (path.name === active ? { ...path, points } : path))
    );
  };

  const points = data?.find((path) => path.name === active)?.points ?? [];

  return (
    <section className="light">
      <LightNav active={active} setActive={setActive} />
      <LightPanel active={active} initialPoints={points} onSave={updatePath} />
    </section>
  );
};
