import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../hooks/useFood';
import FoodShowing from './FoodShowing';

const Dinner = () => {
    const [foods] = useFood();
    const breakfast = foods.filter(food => food.Type === 'Dinner');
    return (
        <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
            {
                breakfast.map(item => <FoodShowing key={item.id} item={item}></FoodShowing>)
            }
        </Row>
    );
};

export default Dinner;