import { useState } from 'react';
import SearchContainer from './components/SearchComponents/SearchContainer';
import WeatherPlate from './components/Weather/WeatherPlate';
import './App.css'

const App = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={'global-container'}>
      <SearchContainer
        search={search}
        setSearch={setSearch}
      />
      <WeatherPlate
        search={search}
      />
    </div>
  );
};

export default App;