import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => <h1>Welcome</h1>;

export const List = ({persos}) =>
  <ul>
    {
      persos.map( (item, i) =>
        <li key={i} ><Link to={`/list/${i}`}>{item.name}</Link></li>)
    }
  </ul>;

export const ListItem = ({perso}) =>
  <div>
    <h1>{perso.name}</h1>
    {
      Object.entries(perso).map(([key, value], i) =>
        <p key={i}> {key} : <strong>{value}</strong></p>
      )
    }
  </div>;
