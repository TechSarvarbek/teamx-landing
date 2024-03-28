import React from 'react';
import './MainContent.css';
import ServiceCardCarousel from '../Service/ServiceCardCarousel';
import BasicServiceCard from '../Service/BasicService';
import Ai from '../../assets/images/ai.jpg';
import Web from '../../assets/images/web.jpg';
import Mobile from '../../assets/images/mobile.jpg';
import ServiceSmm from '../../assets/images/service-smm.png';
import ServiceHr from '../../assets/images/service-hr.png';
import ServiceGraphicDesign from '../../assets/images/service-graphic-design.png';
import ServiceSoftware from '../../assets/images/service-software.png';

const services = [  
  {    
    image: Ai,    
    title: 'Ai',   
    features: ['Bozor analizi', 'Raqamli marketing tahlili', '4P analizi']
  },
  {
    image: Web,
    title: 'Web',
    features: ['Rahbarlar uchun', 'Xodimlar uchun']
  },
  {
    image: Mobile,
    title: 'Mobile',
    features: ['Har oy SWOT-analizi', 'Doimiy bepul konsultatsiya']
  },
];

const BasicServices = [  {    image: ServiceSmm,    title: 'SMM Pro',    features: ['SMP & SMD', 'Kopirayting', 'Mobilografiya'],
    price: '299$'
  },
  {
    image: ServiceHr,
    title: 'HR',
    features: ['Xodimlarni ishga olish', 'Oylik samaradorlik statistikasi', 'Ozaro integratsiya'],
    price: '199$'
  },
  {
    image: ServiceGraphicDesign,
    title: 'SMM Pro',
    features: ['SMP & SMD', 'Kopirayting', 'Mobilografiya'],
    price: '199$'
  },
  {
    image: ServiceSoftware,
    title: 'Dasturiy taminot',
    features: ['Web', 'Ai', 'Mobile', 'Lokal dastur'],
    price: '199$'
  },
];

function MainContent() {
  return (
    <main className="main-content">
      <div className="main-info">
        <h1 className="main-title">Introduce your product quickly & effectively</h1>
        <p className="main-help-text">Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
        <button className="get-btn">Get Started</button>
      </div>

      <br /><br />

      <div className="services">
        <div className="container">
          <h1 style={{ textAlign: 'center' }} className="service-title">Services</h1>
          <ServiceCardCarousel services={services}/>

          <br />
          <h1 style={{ textAlign: 'center'}} className='basicservice-title' >Basic services</h1>
          <div id='basicservices' style={{ height: '100%' }} className='row row-cols-2 mb-5'>
            {BasicServices.map((basicservice, index) => (
              <div className="col-lg-6 col-12 mb-4" key={index}>
                <BasicServiceCard
                  image={basicservice.image}
                  title={basicservice.title}
                  features={basicservice.features}
                  price={basicservice.price}
                />
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </main>
  );
}

export default MainContent;