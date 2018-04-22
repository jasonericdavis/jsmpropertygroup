import React from 'react';
import {css} from 'emotion';
import {asSection} from './section';

const style = css`
    background-image: url(https://storage.googleapis.com/photos.jsmpropertygroup.com/Jumbotron.jpg);
    background-size: cover, cover;
    background-position: center center;
    height: 500px;
    background-attachment: fixed;
`

const Intro = () => (
    <div>
        <h1 className="display-4">JSM Construction</h1>
        <p className="lead">A renovation and remodeling company that helps homeowners achieve their dream of having a high quality redesigned portion of their home that comes in <strong>on-time</strong> and <strong>on-budget</strong></p>
    </div>
)

export const IntroSection = asSection(Intro, style)