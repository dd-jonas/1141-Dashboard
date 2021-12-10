import { useState } from 'react';

import { useFetch } from '../../core/hooks/useFetch.js';
import { LightNav } from './LightNav.jsx';
import { LightPanel } from './LightPanel.jsx';
import { Spinner } from './Spinner';

export const LightController = () => {
  const [active, setActive] = useState(0);
  const { data, error, loading } = useFetch(`.../paths/${active}`);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.error(error);
    //   return (
    //     <p className="alert--error">
    //       Failed to fetch data. Error: {error.message}
    //     </p>
    //   );
  }

  return (
    <section className="light">
      <LightNav active={active} setActive={setActive} />
      <LightPanel active={active} initialPoints={data ?? [[0, 0]]} />
    </section>
  );
};
