import React, { FunctionComponent } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";


const Footer: FunctionComponent = () => {

    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">

                <span className="text-muted">© 2022 Stéphane Dennery</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsTwitter /></svg></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsGithub /></svg></a></li>
            </ul>
        </footer>
    )
}

export default Footer;