import React from 'react'
import CS_Img_1 from '../../../assets/img/freesoft-800x603.png'
import CS_Img_2 from '../../../assets/img/le-petals-800x603.png'
import CS_Img_3 from '../../../assets/img/coder-800x603.png'

function cs_grid() {
    return (
        <section className="case-studies-section bd-bottom padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src={CS_Img_1} alt="img" />
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3><a href="/case-study/freesoft-transformation-logon-utility">FreeSoft's Transformation with Logon Utility's SMS and WhatsApp Services</a></h3>
                                <a href="/case-study/freesoft-transformation-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src={CS_Img_2} alt="img" />
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3><a href="/case-study/le-petals-logon-utility">Le Petals Enhances Customer Engagement with Logon Utility's Messaging Solutions</a></h3>
                                <a href="/case-study/le-petals-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src={CS_Img_3} alt="img" />
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3><a href="/case-study/coderworkz-ravi-jindal-logon-utility">CoderWorkz Boosts Customer Communication with Logon Utility's Reliable Messaging Services</a></h3>
                                <a href="/case-study/coderworkz-ravi-jindal-logon-utility" className="read-more"><i className="ti-plus" />+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cs_grid
