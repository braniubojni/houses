import { FC } from 'react';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';

const App: FC = () => {
  return (
    <div className="container">
      <Header subtitle='Providing houses all over the world' />
      <HouseList />
    </div>
  );
}

export default App;
