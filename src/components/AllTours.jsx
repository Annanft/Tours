import { SingleTour } from './SingleTour';

import React from 'react';

export const AllTours = ({ tours, filterTour }) => {
  return (
    <div className="container">
      {tours.map((el) => {
        return <SingleTour key={el.id} el={el} filterTour={filterTour}/>;
      })}
    </div>
  );
};
