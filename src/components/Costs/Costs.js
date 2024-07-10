import React, { useState } from 'react';
import Card from '../Ui/Card';
import CostsFilter from './CostFilter';

import './Costs.scss'
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

export default function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filterCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    });


    return (
        <div>

            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} />
                <CostsDiagram costs={filterCosts} />
                <CostList costs={filterCosts} />
            </Card>
        </div>
    );
}
