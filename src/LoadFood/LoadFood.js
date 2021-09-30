import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import DisplayFood from '../DisplayFood/DisplayFood';

const LoadFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [])
    return (
        <div>
            <h1>Load Food from UI</h1>
            <InputGroup className="mb-3 w-100">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>

            {
                foods.map(food => <DisplayFood food={food}></DisplayFood>)
            }
        </div >
    );
};

export default LoadFood;