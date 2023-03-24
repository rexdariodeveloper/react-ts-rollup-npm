import React from "react";
import {CardPR, CardChico} from './CardPR';
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
// import "primereact/resources/primereact.min.css";

//icons
// import "primeicons/primeicons.css";  

export default {
  title: "Card Prime React"
};


export const CardWithPR = () => <CardPR />;

export const CardWithChico = () => <CardChico style={{width: '300px'}} />;