import React, { useState } from 'react';

import Card from '../Ui/Card';
import CostDate from './CostDate';
import './CostItem.scss'

function CostItem(props) {

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('New Text')
        console.log(description);

    };

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание </button>
        </Card>
    );
}
export default CostItem;