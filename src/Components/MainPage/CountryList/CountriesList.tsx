import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import css from './CountriesList.module.css';

const { Meta } = Card

const CountriesList = function ({ countriesList,text,setExcretion,setSearchToggle}: any) {

	const { t } = useTranslation();

	const list = countriesList.map((el:any) =>{
		return (
		<Col span={4} key={el.name}>
			<Card
				hoverable
				style={{ width: '200px' }}
				cover={
					<NavLink to={`/${el.name}`} id={el.name} onClick={()=>setSearchToggle(true)}>
						<img style={{ width: '200px', height: '200px', objectFit: 'cover' }}
							alt="example"
							src={el.photo}
						/>
					</NavLink>
				}
				actions={[
				]}
			>
				<Meta style={{ textAlign: 'center' }}

					title={setExcretion(t(`countryName.${el.name}`),text)}
					description={setExcretion(t(`capital.${el.name}`),text)}
				/>

			</Card>
		</Col>
	)}
	)


	return (
		
			<Row wrap style={{display:'flex', justifyContent:'center'}}>
				{list}
			</Row>

	)
}


export default CountriesList