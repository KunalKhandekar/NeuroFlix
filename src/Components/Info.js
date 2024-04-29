import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
    const { movieID } = useParams();
  return (
    <div>
      { "movieID = "+movieID}
    </div>
  )
}

export default Info;