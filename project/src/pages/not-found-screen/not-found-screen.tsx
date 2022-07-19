import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <Link to="/">
      <div className="page page--gray page--main">404. Страница Отсутсвует. На главную страницу</div>
    </Link>
  );
}

export default NotFoundScreen;
