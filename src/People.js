import React, {useState, useEffect} from "react";
import axios from "axios";
import Person from "./Person";
import {
    Row
  } from 'reactstrap';



export default function People(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results);
            setData(response.data.results);
        })
        .catch(error => {
            console.log('error, ' + error);
        })
    }, []);

    return (
        <div>
           <Row style={{marginTop: '3%'}}>
               
                {data.map(item => {
                    return (
                        
                        <Person name = {item.name}
                                gender = {item.gender}
                                skin = {item.skin_color}
                                eye = {item.eye_color}
                                hair = {item.hair_color}
                                year = {item.birth_year}
                                />
                    )
                })}
            
           </Row>

            
           <img src = "https://www.pngkit.com/png/full/0-6869_propel-star-wars-battle-drones-logo-star-wars.png" style ={{right: '5%', position: 'absolute'}}></img>

        </div>

        

    )
}