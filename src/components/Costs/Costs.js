import React, { useState } from 'react';
import Card from '../Ui/Card';
import CostsFilter from './CostFilter';
import CostItem from "./CostItem";

import './Costs.scss'

export default function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>

            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} />
                {props.costs.map((cost) => (
                    <CostItem
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount} />
                ))}

            </Card>
        </div>
    );
}
