import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css'

const Breadcrumbs = (props) => {

    const { path, label } = props
    let breadcrumbsList = [{path: '/', label: 'Inicio'}];

    const newNav = breadcrumbsList.findIndex (item => item.label === label);
  if (newNav === -1) {
    breadcrumbsList = [...breadcrumbsList, {path, label: label}];
  } else if (newNav > 0) {
    const newArray = breadcrumbsList.slice (0, newNav + 1);
    breadcrumbsList = [...newArray];
  } else if (newNav === 0) {
    breadcrumbsList = [{path, label: label}];
  }
  const newBC = breadcrumbsList.map ((route, index) => {
    return (
      <li key={index}>
        <Link to={route.path}>{route.label}</Link>
        <span className="hidden"> > </span>
      </li>
    );
  });

    return (
        <nav>
            <ul>
               {newBC}
            </ul>
        </nav>
    )
}

export default Breadcrumbs