import React from 'react';
import useFood from '../hooks/useFood';
import { Row } from 'react-bootstrap';
import FoodShowing from './FoodShowing';

const Breakfast = () => {
    const [foods] =useFood();
    const breakfast = foods.filter(food => food.Type === 'Breakfast');
    return (
        <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
            {
                breakfast.map(item=> <FoodShowing key={item.id} item={item}></FoodShowing>)
            }
        </Row>
    );
};

export default Breakfast;