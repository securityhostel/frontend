import React, { useState } from 'react'

function MakeReview(props) {

    const [review, setReview] = useState(props.location.review)

    const onSubmit = data => {
        data.preventDefault();
        console.log(data);
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label>Valoración: <input name="score"></input></label>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="smoker" className="form-check-label">Fumo en espacios no permitidos</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="impolite" className="form-check-label">Trato no adecuado con el personal</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="paymentProblems" className="form-check-label">Problemas con el pago</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="negativeWebRatings" className="form-check-label">Realizó críticas negativas en internet</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="impunctual" className="form-check-label">No respetó el horario</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="destroyer" className="form-check-label">Causó destrozos</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label name="noisy" className="form-check-label">Ruidoso</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default MakeReview;