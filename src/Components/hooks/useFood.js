import { useEffect, useState } from 'react';

const useFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return [foods];
};

export default useFood;


