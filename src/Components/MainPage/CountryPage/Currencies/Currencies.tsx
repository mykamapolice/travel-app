import React, { useEffect, useState } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ICurrenciesProps } from '../../../../Interfaces';

const Currencies = (props: ICurrenciesProps) => {
    const [currenciesRates, setCurrenciesRates] = useState({
        USD: 0,
        EUR: 0,
        BYN: 0,
    });

    const { currency } = props;

    useEffect((): any => {
        fetch(
            `https://v6.exchangerate-api.com/v6/2e582ca014e3d2a13ce26cc8/latest/${currency}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (currency !== 'KPW') {
                    setCurrenciesRates({
                        USD: data.conversion_rates.USD,
                        EUR: data.conversion_rates.EUR,
                        BYN: data.conversion_rates.BYN,
                    });
                } else {
                    setCurrenciesRates({
                        USD: 0.00111,
                        EUR: 0.0029,
                        BYN: 0.00093,
                    });
                }
            });
    }, []);
  
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'auto'
        }} className="site-statistic-demo-card">
            <Col>
                <Row>
                    <Card>
                        <Statistic
                            title={`${currency}/EUR`}
                            style={{ minWidth: '100px' }}
                            value={currenciesRates.EUR}
                            precision={4}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="€"
                        />
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Statistic
                            title={`${currency}/USD`}
                            style={{ minWidth: '100px' }}
                            value={currenciesRates.USD}
                            precision={4}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="$"
                        />
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Statistic
                            title={`${currency}/BYN`}
                            style={{ minWidth: '100px' }}
                            value={currenciesRates.BYN}
                            precision={4}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Br"
                        />
                    </Card>
                </Row>
            </Col>
        </div>
    );
};

export default Currencies;
