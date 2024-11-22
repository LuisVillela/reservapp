import { useParams } from 'react-router-dom';

function Cancha() {
  const { id } = useParams();

  return <div>Cancha ID: {id}</div>;
}

export default Cancha;
