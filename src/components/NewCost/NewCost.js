import CostForm from './CostForm';

import './NewCost.scss';

export default function NewCost(props) {

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }

        props.onAddCost(costData);

    }

    return <div className="new-cost">
        <CostForm
            onSaveCostData={saveCostDataHandler} />
    </div>;
}
