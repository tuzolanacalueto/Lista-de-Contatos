import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import './Contacto.css'
export default function Contacto(props) {
    return (
        <div className="mx-2">
            <div className="conatiner componente-contacto my-3">
                <div className="row">
                    <div className="col p-2">
                        <h4>
                            <FontAwesomeIcon icon={faUser} className="me-3" />
                            {props.nome}
                        </h4>
                    </div>
                    <div className="col p-2">
                        <h4>
                            <FontAwesomeIcon icon={faPhoneVolume} className="me-3" />
                            {props.telefone}
                        </h4>
                    </div>
                    <div className="col p-2 text-end">
                        <h4>
                            <FontAwesomeIcon
                                icon={faTrashAlt} className="me-3"
                                onClick={() => { props.remover(props.id) }} />
                        </h4>
                    </div>
                </div>
            </div>
        </div>

    )

}

