import React from 'react'
import {asSection} from './section';
import {css} from 'emotion'

const About = () => (
    <div className="container scrollspy" id="About">
    <div className="row">
      <div className="s12">
        <h2 className="header">About</h2>
            <p>
                Darrel Crawford is the founder of JSM Construction, a renovation and remodeling company
                with 17 years of exceptional quality work in project assessment and implementation, always
                within budget.</p>
                <p>After an exceptional college football career, culminating in not just the MVP award in the 199??
                Chic Fil-A Peach Bowl, but also with a degree from Auburn University, Darrel became involved
                in housing. First as a mortgage lender, where he progressed over 10 years to become President
                of his company and overwrite more than 8,900 loans.</p>
                <p>But Darrel’s interest became more towards home improvement and renovation, and he
                founded his company, JSM Construction, in 2001. This new business gave him the flexibility to
                work various hours, and allowed him to spend more time with his young children: Jordan,
                Morgan and son, Anderson. Darrel enjoyed being able to build his business while coaching his
                children as they progressed in their own individual athletic careers.</p>
                <p>Having spent so much time around Home Depot, Darrel eventually joined the company as a
                Construction Project Manager for major bath &amp; kitchen remodels. The experience of managing
                10-15 projects at a time while maintaining a 95% customer satisfaction rating gave him the
                expertise he needed to refocus on building his own company.</p>
                <p>Today, Darrel is proud to offer homeowners the benefits of his passion and experience with
                their home improvement projects. Customers can rest easy with their project in Darrel’s hands,
                as he oversees all aspects of his projects from helping develop and fine tune the homeowner’s
                vision, to pulling permits, purchasing materials, managing subcontractor providers, through to
                delivering the finished product. Darrel always makes sure that customers who use JSM end up
                with beautiful, high quality work that they can enjoy for years to come. Darrel’s passion for all
                things home has come home to rest at JSM Construction.
            </p>
      </div>
    </div>
  </div>
)

export const AboutSection = asSection(About);