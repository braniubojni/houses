import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader: FC = () => {
  return (
    <Spinner className='position-absolute start-50 top-50' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;