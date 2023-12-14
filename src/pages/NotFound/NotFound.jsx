import './NotFound.css';

import notFound from '../../assets/notfound.jpg';

const NotFound = () => {
  return (
    <div className="container1">
      <img src={notFound} alt="Página no encontrada" />
    </div>
  );
};

export default NotFound;
