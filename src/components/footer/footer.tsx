import React from 'react';
import '../style/footer.css';
export default function Footer() {
    return (
        <div className='containerFooter'>
            <p className='titleFooter'>Enlaces de interes</p>
            <ul>
            <li className='list'><a href="Https://parvularia.mineduc.cl" className='linkFooter'>Parvularias mineduc</a></li>
            <li className='list'><a href="https://curriculumnacional.mineduc.cl/estudiante/621/w3-channel.html" className='linkFooter'>Aprendiendo en línea</a></li>
            <li className='list'><a href="http://www.codeduc.cl/" className='linkFooter'>Codeduc</a></li>
            </ul>
        </div>
    )
}