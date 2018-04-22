import React from 'react'
import {asSection} from './section';

export const Services = () => (
    <div className="container scrollspy" id="Services">
        <div className="row">
          <div className="s12">
            <h2 className="header">Our Services</h2>
            <p>We provide all home services such as:</p>
            <ul>
              <li>Construction</li>
              <li>Renovation</li>
              <li>Remodelling</li>
              <li>Roofing</li>
              <li>Excavation</li>
            </ul>
          </div>
        </div>
    </div>
)

export const ServicesSection = asSection(Services);