
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Card from './Card'

import Sdata from './Sdata';

// console.log(Sdata[0].sname);



ReactDom.render(
 <>
 <h1 className = "heading_style">List of top 6 netflix in 2021 </h1>
 
 {Sdata.map((value)=>{
  return (
      <Card
      imgscr={value.imgscr}
      title={value.title}
      sname = {value.sname}
      link={value.link}
  />
     );
 })}
</>
,document.getElementById('root')
);