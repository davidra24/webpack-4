import React from 'react';

export const Pokemon = (props) => {
  console.log('propppppps', props);
  return (
    <div>
      <h1>props.name</h1>
      <img src={props.sprites.front_default} alt='' srcset='' />
      {props.types.map((type) => {
        return (
          <div key={type.slot}>
            <h2>type.type.name</h2>
          </div>
        );
      })}
    </div>
  );
};
