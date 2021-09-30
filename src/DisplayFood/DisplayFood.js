import React from 'react';

const DisplayFood = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.food;
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h2>{idMeal}</h2>
            <h5>{strMeal}</h5>
            <p>Country: {strArea}</p>
            <p>{strInstructions.slice(0, 200)}</p>

        </div>
    );
};

export default DisplayFood;