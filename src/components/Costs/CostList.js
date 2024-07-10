import CostItem from './CostItem';
import style from './CostList.module.scss'

export default function CostList(props) {

    if (props.costs.length === 0) {
        return <h1 className={style.listFallback}>В этом году расходов нет</h1>
    }

    return <ul className={style.costList}>
        {props.costs.map((cost) => (
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount} />
        ))};
    </ul>;
}
