import React from 'react';
import cats from '../../cats';
import ImageItem from '../ImageItem/ImageItem';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      {cats.map((data) => (
        <ImageItem key={data.name} {...data} />
      ))}
    </div>
  );
}

// export default function Main() {
//   return (
//     <div className="main">
//  {cats.map((data) => (<ImageItem key={data.name} name={ data.name } type={ data.type } url={ data.url } year={ data.year } lives={ data.lives } isSidekick={ data.false } />))}
//     </div>
//   );
// }