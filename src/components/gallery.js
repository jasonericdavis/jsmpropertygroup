import React from 'react';
import {asSection} from './section'
var imagePrefix = 'https://storage.googleapis.com/photos.jsmpropertygroup.com/';
//var imagePrefix = 'images/';
var images = [
    imagePrefix + 'Kitchen1.JPG',
    imagePrefix + 'Kitchen2.JPG',
    imagePrefix + 'Kitchen3.JPG',
    imagePrefix + 'Bathroom1.JPG',        
    imagePrefix + 'IMG_1039.jpg',
    imagePrefix + 'IMG_1040.jpg',
    imagePrefix + 'IMG_1041.jpg',
    imagePrefix + 'IMG_1046.jpg',
    imagePrefix + 'IMG_1048.jpg',
    imagePrefix + 'IMG_1037.jpg',
    imagePrefix + 'IMG_1038.jpg'
];

const Gallery = () => (
    <div className="container scrollspy" id="Gallery">
        <div className="row">
          <div className="s12">
            <h2 className="header">Gallery</h2>
          </div>
        </div>
        <div className="row">
          <div className="gallery-container" id="gallery-images">
            {images.map((item, index) => (<img className="gallery-item" key={index} src={item} />))}        
          </div>
        </div>
    </div>
)

export const GallerySection = asSection(Gallery);