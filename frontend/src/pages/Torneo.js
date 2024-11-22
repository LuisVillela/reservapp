import { useParams } from 'react-router-dom';

function Torneo() {
  const { id } = useParams();

  return <div>Torneo ID: {id}</div>;
}

export default Torneo;
