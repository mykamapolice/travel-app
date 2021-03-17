import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { fetchCountries } from "../../../redux/actions/stateAction";


const { Meta } = Card;

const CountriesList = ({ countriesList,text,setExcretion,setSearchIsDisabled, getCountries } : any)=>{
	const { t } = useTranslation();

	React.useEffect(() => {
		console.log('use Effect');
		getCountries();
		setSearchIsDisabled();
	},[]);

	const list = countriesList.map((el:any) =>{
		return (
		<Col  span={6}  xs = {{ span:16 }} sm= {{ span:12 }} md ={{ span:8 }} lg = {{ span:6 }} style={{ marginTop:'20px',display:'flex', justifyContent:'center' }} key={el.name}>
			<NavLink to={`/${el.name}`} id={el.name} onClick = {()=>{setSearchIsDisabled(true);}} >
			<Card
				hoverable
				style={{ width: '200px' }}
				cover={

						<img style={{ width: '200px', height: '200px', objectFit: 'cover' }}
							alt="example"
							src={el.photo}
						/>

				}
			>
				<Meta style={{ textAlign: 'center' }}
					title={setExcretion(t(`countryName.${el.name}`),text)}
					description={setExcretion(t(`capital.${el.name}`),text)}
				/>
			</Card>
			</NavLink>
		</Col>
	);}
	);

	return (
			<Row  gutter={[8, 48]} justify='center' align='middle' style={{ marginLeft:'auto',marginRight:'auto',maxWidth: '1366px' }}>
				{list}
			</Row>
	);
};


export default CountriesList;
