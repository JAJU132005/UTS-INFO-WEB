import React from 'react';


const Card = ({ text, time, img, link }) => {
    const handleViewClick = () => {
        window.location.href = link;
    }
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={img} class="card-img-top" alt="Card image 1"/>
        <div className="card-body">
        <p className="card-text" dangerouslySetInnerHTML={{ __html: text }}></p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleViewClick}>View</button>
            </div>
            <small className="text-body-secondary">{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;