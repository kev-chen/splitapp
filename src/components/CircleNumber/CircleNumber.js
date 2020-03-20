import React from 'react';

import Color from '../../constants/color';

const CircleNumber = (props) => {
  return (
    <div
      className="d-table mb-3 mx-auto text-center"
      style={{
        backgroundColor: Color.PRIMARY_TRANSLUCENT,
        height: 50,
        width: 50,
        borderRadius: 25,
        textAlign: 'center',
        verticalAlign: 'middle',
      }}>
      <div className="d-table-cell" style={{ verticalAlign: 'middle' }}>
        <p className="m-auto font-weight-bolder">{props.number}</p>
      </div>
    </div>
  );
};

export default CircleNumber;
