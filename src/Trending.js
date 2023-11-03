import React from 'react';
function YourComponent() {

  const mystyle={
    paddingTop:"0",
    paddingLeft:"50px",
    paddingBottom: "-20px",
    paddingRight:'80px',
    textAlign: 'center',
  }

  return (
    <div>
      <div className="image-row">
        <div>
        {renderImageCard(require('./images/trend1.png'))}
        <p style={mystyle}>Vicks inhaler <br></br>MRP 100</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
        <div>
        {renderImageCard(require('./images/trend2.png'))}
        <p style={mystyle}>colpol drop <br></br>MRP 30</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
       <div>
        {renderImageCard(require('./images/trend3.png'))}
        <p style={mystyle}>Azee 500  <br></br>MRP 60</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'150px'}}>ADD</button>
        </div>
        <div>
        {renderImageCard(require('./images/trend4.png'), )}
        <p style={mystyle}> Alkof dx<br></br>MRP 120</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div><div>
        {renderImageCard(require('./images/trend5.png'), "   ")}
        <p style={mystyle}> kofadex syp <br></br>MRP 152</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
      </div>
      <div className="image-row">
        <div>
        {renderImageCard(require('./images/trend6.png'), " ")}
        <p style={mystyle}>Mackberry dx syp <br></br>MRP 99</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
        <div>
        {renderImageCard(require('./images/trend7.webp'), "")}
        <p style={mystyle}>colpol 650 tab <br></br>MRP 34</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
       <div>
        {renderImageCard(require('./images/trend8.jpg'), "")}
        <p style={mystyle}>Mederma  500<br></br>MRP 440</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>|
       <div>
        {renderImageCard(require('./images/trend9.jpg'), )}
        <p style={mystyle}>Thermometer<br></br>MRP 236</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'100px'}}>ADD</button>
        </div>
        <div>
        {renderImageCard(require('./images/trend10.jpg'), "")}
        <p style={mystyle}>BP machine<br></br>MRP 1999</p>
        <button style={{backgroundColor:'green',width:'100px',marginLeft:'40px'}}>ADD</button>
        </div>
      </div>
    </div>
  );
}

function renderImageCard(imageSrc, caption) {
  return (
    <div className="image-card">
      <img src={imageSrc}  alt={caption}/>
      <p>{caption}</p>
    </div>
  );
}

export default YourComponent;
