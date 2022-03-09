import './ImageItem.css';

// export default function ImageItem(props) {
//   return (
//     <div className="image-item">
//       <h3>{props.name}</h3>
//       <img alt={props.name} width="100" src={props.url} />
//       <p>{props.type}</p>
//     </div>
//   );
// }

export default function ImageItem({ name, type, url }) {
  return (
    <div className="image-item">
      <h3>{name}</h3>
      <img alt={name} width="100" src={url} />
      <p>{type}</p>
    </div>
  );
}
