import React, { useContext } from 'react'
import { Link } from 'wouter';
import Dog from '../../components/Dog';
import DogsContext  from '../../context/DogsContext'

export default function Detail({params}) {
    const {dogs} = useContext(DogsContext)
    const dog = dogs.find(singleDog => singleDog.id === params.id) || JSON.parse(localStorage.getItem('dogs')).find(singleDog => singleDog.id === params.id)
    return ( 
        <div>
          <div className='inline-flex mb-6 mt-[0.6rem] place-items-center'>
            <Link to='/' className='text-white bg-[#3ebaa0] hover:bg-[#23ab8d] focus:ring-2 focus:outline-none focus:ring-[#87e9d4]  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 h-fit'>
              <svg className='sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 w-3 h-3 rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
              </svg>
              <span className='sr-only'>Icon description</span>
            </Link>
            <h3 className=''>{ dog.name }</h3>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-48 md:gap-48'>
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