import React from 'react'
import Card from './Card';
import data from '../assets/databank';

const CardHolder = () => {
  return (
    <>
      <div
        id="cards-container"
        className="overflow-y-auto w-auto h-[40rem] bg-inherit flex flex-row gap-4 items-center justify-around"
      >
        {/* Inject Cards here with map */}
        {/* No Props are send for this first card */}
        <Card />
        {/* Rest cards are mapped from data array with props */}
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              heading={item.heading}
              para={item.para}
              imgSrc={item.imgSrc}
              authorlight={item.authorLight}
              authordark={item.authorDark}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardHolder