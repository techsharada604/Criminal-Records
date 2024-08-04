import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    at1: '',
    at2: '',
    at3: '',
    at4: '',
    at5: '',
    table:'',
    val1:'',
    val2:'',
    val3:'',
    val4:'',
    val5:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h4>ENTER THE KNOWN DETAILS OF THE CRIMINAL AS PER THE FOLLOWING</h4>
    <div className="Tables">
      <div className='Table2'>
      <ul >
        <li>
          Criminal 
          <ol>
            <li>CID</li>
            <li>Full Name</li>
            <li>DOB</li>
            <li>Gender</li>
          </ol> <br/>
        </li>
        <li>
          Accomplice 
          <ol>
            <li>CID</li>
            <li>CID_Accomplice</li>
          </ol> <br/>
        </li>
        <li>
          Crime 
          <ol>
            <li>Crime_ID</li>
            <li>Type</li>
            <li>Severity</li>
            <li>DateTime</li>
            <li>Location</li>
          </ol> <br/>
        </li>
        <li>
          Court Case 
          <ol>
            <li>Case_ID</li>
            <li>Case Status</li>
            <li>Sentence</li>
          </ol> <br/>
        </li>
        <li>
          Forensic Record 
          <ol>
            <li>R-Thumbprint</li>
            <li>CID_Identified</li>
          </ol> <br/>
        </li>
        <li>
          DNA 
          <ol>
            <li>CID_Identified</li>
            <li>DNA_Seq</li>
          </ol> <br/>
        </li>
        <li>
          Fingerprints
          <ol>
            <li>Rightthumb</li>
            <li>Rightindex</li>
            <li>Rightmiddle</li>
            <li>Rightpointer</li>
            <li>Rightlittle</li>
            <li>Leftthumb</li>
            <li>Leftindex</li>
            <li>Leftmiddle</li>
            <li>Leftpointer</li>
            <li>Leftlittle</li>
          </ol> <br/>
        </li>
        <li>
          generaldescriptors
          <ol>
            <li>CID_Described</li>
            <li>Race</li>
            <li>Build</li>
            <li>Height</li>
            <li>Facial_structure</li>
          </ol> <br/>
        </li>
      </ul>
      </div>
<div>
      <ul className="Table2">
      <li>
        Mugshots
        <ol>
          <li>CID_Described</li>
          <li>Mugshot</li>
        </ol> <br/>
      </li>
      <li>
           phone
          <ol>
            <li>CID_Described</li>
            <li>Phone_no</li>
          </ol> <br/>
        </li>
        <li>
           email
          <ol>
            <li>CID_Described</li>
            <li>Emailaddr</li>
          </ol> <br/>
        </li>
        <li>
        socialmedia
          <ol>
            <li>CID_Described</li>
            <li>Handle</li>
          </ol> <br/>
        </li>
        <li>
        vehicle
          <ol>
            <li>CID_Described</li>
            <li>Registration_No</li>
          </ol> <br/>
        </li>
     
      <li>
        aliases
          <ol>
            <li>CID_Described</li>
            <li>Alias</li>
          </ol> <br/>
        </li>
        <li>
        relativesfriends
          <ol>
            <li>CID_Described</li>
            <li>UID_Related</li>
          </ol> <br/>
        </li>
        <li>
        residences
          <ol>
            <li>CID_Described</li>
            <li>Addr</li>
          </ol> <br/>
        </li>
        <li>
        arrest
          <ol>
            <li>CID</li>
            <li>Crime_ID</li>
            <li>Date_time</li>
            <li>Location</li>
            <li>Reason</li>
          </ol><br/>
        </li>
        <li>
        punishment
          <ol>
            <li>CID</li>
            <li>CaseID</li>
            <li>Type</li>
            <li>Start</li>
            <li>End</li>
          </ol> <br/>
        </li>
        <li>
        criminalhistory
          <ol>
            <li>CID</li>
            <li>CrimeID</li>
            <li>CaseID</li>
          </ol> 
        </li>
        </ul>
      </div></div>
      
      <label className="inp">
      Table Name:
        <input type="text" name="table" value={searchParams.table} onChange={handleChange}/>
      </label><br/><br/>
      
      <label className="inp">
      Attribute 1:
        <input type="text" name="at1" value={searchParams.at1} onChange={handleChange}/>
      </label>
      <label className="inp">
      Value 1:
        <input type="text" name="val1" value={searchParams.val1} onChange={handleChange}/>
      </label><br/><br/>
      
      <label className="inp">
      Attribute 2:
        <input type="text" name="at2" value={searchParams.at2} onChange={handleChange}/>
      </label>
      <label className="inp">
      Value 2:
        <input type="text" name="val2" value={searchParams.val2} onChange={handleChange}/>
      </label><br/><br/>
      
      <label className="inp">
      Attribute 3:
        <input type="text" name="at3" value={searchParams.at3} onChange={handleChange}/>
      </label>
      <label className="inp">
      Value 3:
        <input type="text" name="val3" value={searchParams.val3} onChange={handleChange}/>
      </label><br/><br/>
      <label className="inp">
      Attribute 4:
        <input type="text" name="at4" value={searchParams.at4} onChange={handleChange}/>
      </label>
      <label className="inp">
       Value 4:
        <input type="text" name="val4" value={searchParams.val4} onChange={handleChange}/>
      </label><br/><br/>
      <label className="inp">
      Attribute 5:
        <input type="text" name="at5" value={searchParams.at5} onChange={handleChange}/>
      </label>
      <label className="inp">
      Value 5:
        <input type="text" name="val5" value={searchParams.val5} onChange={handleChange}/>
      </label><br/><br/>
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchForm;
