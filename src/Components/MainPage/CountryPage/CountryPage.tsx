import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import Currencies from './Currencies/Currencies';
import './CountryPage.module.css';

const CountryPage = function (props: any) {
  const { country } = props;
  const { mapCoords } = country.details;
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleClick() {
      !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
  }
  return (
    <div>
      <img src={country.photo} alt="" />
       {/* <div> */}
           {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
       {/*   <button type="button" onClick={handleClick} ><FullscreenOutlined /></button> */}
       {/*   {isFullScreen */}
       {/*       ? <SmallScreenMap */}
       {/*           countryCapital={country.capital} */}
       {/*           countryName={country.name} */}
       {/*           mapCoords={mapCoords}/> */}
       {/*       :  <FullScreenMap */}
       {/*           countryCapital={country.capital} */}
       {/*           countryName={country.name} */}
       {/*           mapCoords={mapCoords}/>} */}

       {/* </div> */}
       <Currencies currency={country.currencyCode}/>
    </div>
  );
};

export default CountryPage;
