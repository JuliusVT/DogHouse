import React, { useContext } from 'react'
import { Link } from 'wouter';
import Dog from '../../components/Dog';
import DogsContext  from '../../context/DogsContext'

export default function Detail({params}) {
    const {dogs} = useContext(DogsContext)
    const dog = dogs.find(singleDog => singleDog.id === params.id) || JSON.parse(localStorage.getItem('dogs')).find(singleDog => singleDog.id === params.id)
    return ( 
        <div>
          <Link to="/"> Regresar </Link>
          <h3 className='App-title'>{ dog.name }</h3>
          <div className='grid grid-cols-2 gap-48'>
            <div className=''>
              <Dog {...dog}/>
            </div>
            <div className='self-center'>
              <ul>
                <li>
                    <span className='text-left'>Tiempo de vida: </span> 
                    <span className='font-light'>{dog.additional.life_span}</span>
                </li>
                <li>
                  <span className='text-left'>Temperamento: </span>
                  <span className='font-light'>{dog.additional.temperament}</span>
                </li>
                <li>
                  <span className='text-left'>Altura Imperial: </span>
                  <span className='font-light'>{dog.additional.height.imperial}</span> 
                </li>
                <li>
                  <span className='text-left'>Altura Metrica: </span>
                  <span className='font-light'>{dog.additional.height.metric}</span> 
                </li>
                <li>
                  <span className='text-left'>Peso Imperial: </span>
                  <span className='font-light'>{dog.additional.weight.imperial}</span>
                </li>
                <li>
                  <span className='text-left'>Peso Metricó: </span>
                  <span className='font-light'>{dog.additional.weight.metric}</span> 
                </li>
              </ul>
            </div>
          </div>
        </div>
     );
}