import React from 'react';
import { Spin,Card } from 'antd';
import css from  './Weather.module.css';

const { Meta } = Card;

const getWeather = async (lang:string,capital:string) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${lang ==='be'?'ua': lang}&appid=dd191359a921b4e3412b6d7b1fb83f95&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  return { id:`owf-${data.weather[0].id}`, descrition: data.weather[0].description, temp: data.main.temp };
};

interface IWeather {
  lang:string,
  capital: string
}
interface IWeatherData {
  id: string;
  descrition: string;
  temp : number
}

const Weather = ({ lang,capital }:IWeather) => {
const [{ id,descrition,temp }, setWeather] = React.useState<IWeatherData>({ id:'', descrition:'',temp:0 });

React.useEffect(() => {
  getWeather(lang,capital).then((data:any) => {setWeather(data);
  }).catch((e) => new Error(e));
},[capital, lang]);


  return (
    <Card
    style={{ margin:'0 auto', width: '240px', textAlign:'center', backgroundColor:'transparent', border:'none' }}
    cover={
      <div style = {{ display:'flex',justifyContent:'center' }}>
      {id ? <i style = {{ fontSize: '100px',color:`${(+(id.substring(4))>=800) ? '#FFA570' : '#bde0fe'}` }}  className={`${css.weatherIcon} ${css.owf} ${css[id]}`}/> : <Spin style = {{ width:'100px' }} size="large" />}
      </div>
    }
  >
    <Meta title={descrition} description={`${temp} °C`} />
  </Card>

  );
};

export default Weather;
