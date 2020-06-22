import React from 'react';
import './style.css';
import SideMenu from './components/sidemenu';
import InfoCard from './components/infocard';
import UserProfile from './components/userprofile';
import SearchInput from './components/searchinput';
import LineChart from './components/linechart';
import PizzaChart from './components/pizzachart';
import BarsChart from './components/barschart';
import { BellIcon } from './assets/icons';


function App() {
  return (
    <div className="main  ">
      <SideMenu darkMode={false}></SideMenu>
      <div className="data-container">
        <div className="row">
          <p>Statistics</p>
          <SearchInput></SearchInput>
          <BellIcon></BellIcon>
          <UserProfile imgUrl={"https://image.freepik.com/fotos-gratis/alegre-mulher-envelhecida-media-com-cabelos-cacheados_1262-20859.jpg"} name={"Anna"}></UserProfile>
        </div>
        <div className="row">
            <InfoCard up={false} title={"Friends"} value={10} percent={0.7}></InfoCard>
            <InfoCard up={true} title={"Unique Visitors"} value={20} percent={0.7}></InfoCard>
            <InfoCard up={true} title={"Followers"} value={10} percent={0.7}></InfoCard>
        </div>
        <div className="row">
            <LineChart></LineChart>
            <PizzaChart></PizzaChart>
        </div>
        <div className="row">
              <BarsChart></BarsChart>
        </div>
      </div>
    </div>
  );
}

export default App;
