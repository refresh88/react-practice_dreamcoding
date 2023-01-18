import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '철현';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}!`}</h1>
      <h2>hello</h2>
      <h1>{name}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
