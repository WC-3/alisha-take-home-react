import React from 'react'

function Add(){
  let states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]
  return(
    <div className="add" style={{border: "3px solid orange"}}>
      <form>
          <p>
              <label>Name: </label>
              <input type='text' placeholder="Name" required/>
          </p>
          <p>
              <label>Address: &nbsp; </label>
              <input type='text' placeholder="Address" required/>
          </p>
          <p>
              <label>City: </label>
              <input type='text' placeholder="City" required/>
          </p>
          <p>
            <label>State: </label>
            <select name = 'State' required>
              {states.map((item) =>
                    <option key= {item}>{item}</option>
                    )};
            </select>
          </p>
          <p>
              <label>Zip: </label>
              <input type='text' placeholder="Zip code" pattern="[0-9]{5}" required/>
          </p>
          <p>
              <label>Age: </label>
              <input type='number' placeholder="Age" min='1' max="110" required/>
          </p>
          <button className='addButton'>Submit</button>
      </form>

  </div>
  )
}

export default Add;