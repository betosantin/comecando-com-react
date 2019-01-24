import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card" style={{ width: '20rem' }}>
            <img src="http://www.robertosantin.com.br/images/logo.png"
                className="card-img-top rounded mx-auto d-block" alt="Imagem"
                style={{ paddingTop: '5px', width: '300px', height: '80px' }} />
            <div className="card-block">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
            </div>
        </div>
    </div>
);

export default HomeCard;