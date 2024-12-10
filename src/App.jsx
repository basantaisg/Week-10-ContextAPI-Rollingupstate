import { useContext } from 'react';
import { useState, createContext } from 'react';

const BulbContext = createContext();

const BulbProvider = ({ children }) => {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
};

const Light = () => {
  return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
  );
};

const LightBulb = () => {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? 'Bulb On' : 'Bulb off'}</div>;
};

const LightSwitch = () => {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  return (
    <div>
      <button onClick={() => setBulbOn(!bulbOn)}>Toggle the bulb</button>
    </div>
  );
};

export default App;
