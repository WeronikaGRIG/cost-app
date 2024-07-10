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
                <CostItem
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    amount={props.costs[0].amount} />

                <CostItem
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    amount={props.costs[1].amount} />

                <CostItem
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    amount={props.costs[2].amount} />
            </Card>
        </div>
    );
}
