import React from 'react';
import s from '../Preloader/Preloader.module.css';
import spinner from '../../../assets/images/spiner.svg'


const Preloader = () => {
  return   <div className={s.preloader}>
    <img src={spinner}/>
  </div>
}

export default Preloader;