import { useEffect, useState } from 'react';

const useFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/YeBenLing-ZAMAN/fakedata/main/food.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return [foods];
};

export default useFood;


