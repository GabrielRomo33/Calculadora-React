import React from "react";
import {useEffect, useState } from 'react';
import Gifs from "./Gifs";
import getGifs from '../services/getGifs';
export default function ListOfGifs({ keyword }){

    const [gifs, setGifs] = useState([]);

    useEffect(function (){
        getGifs({keyword}).then(gifs => setGifs(gifs));
      },[]);

   return gifs.map(({id,title,url}) => 
   <Gifs 
        id={id}
        key={id}
        title={title}
        url={url}
    />
   )
}