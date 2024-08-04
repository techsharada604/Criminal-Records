import React, { useState } from 'react';

function InsertForm({ onInsert }) {
  const [insertParams, setInsertParams] = useState({
    at1: '',
    at2: '',
    at3: '',
    at4: '',
    at5: '',
    at6: '',
    at7: '',
    at8: '',
    at9: '',
    at10: '',
    table:'',
    val1:'',
    val2:'',
    val3:'',
    val4:'',
    val5:'',
    val6:'',
    val7:'',
    val8:'',
    val9:'',
    val10:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsertParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(insertParams);
  };

  return ( <div className="inser">
    <form onSubmit={handleSubmit}>
        <h4>ENTER THE KNOWN DETAILS OF THE CRIMINAL</h4>
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
     
      <label>
        Table name:
        <input type="text" name="table" value={insertParams.table} onChange={handleChange}/>
      </label>
      <br/>
      <br/> 

      <label>
        Attribute 1:
        <input type="text" name="at1" value={insertParams.at1} onChange={handleChange}/>
      </label>
      <label>
      Value 1:
        <input type="text" name="val1" value={insertParams.val1} onChange={handleChange}/>
      <br/>
      <br/>
      </label>
      
        <label>
        Attribute 2:
        <input type="text" name="at2" value={insertParams.at2} onChange={handleChange}/>
      </label>
      <label>
      Value 2:
        <input type="text" name="val2" value={insertParams.val2} onChange={handleChange}/>
      <br/><br/>
      </label>

      <label>
        Attribute 3:
        <input type="text" name="at3" value={insertParams.at3} onChange={handleChange}/>
      </label>
      <label>
      Value 3:
        <input type="text" name="val3" value={insertParams.val3} onChange={handleChange}/>
        <br/><br/>
      </label>

        <label>
        Attribute 4:
        <input type="text" name="at4" value={insertParams.at4} onChange={handleChange}/>
      </label>
      <label>
      Value 4:
        <input type="text" name="val4" value={insertParams.val4} onChange={handleChange}/>
        <br/><br/>
      </label>

      <label>
        Attribute 5:
        <input type="text" name="at5" value={insertParams.at5} onChange={handleChange}/>
      </label>
      <label>
      Value 5:
        <input type="text" name="val5" value={insertParams.val5} onChange={handleChange}/>
        <br/><br/></label>

      <label>
        Attribute 6:
        <input type="text" name="at6" value={insertParams.at6} onChange={handleChange}/>
      </label>
      <label>
      Value 6:
        <input type="text" name="val6" value={insertParams.val6} onChange={handleChange}/>
        <br/><br/></label>
      
      <label>
        Attribute 7:
        <input type="text" name="at7" value={insertParams.at7} onChange={handleChange}/>
      </label>
      <label>
      Value 7:
        <input type="text" name="val7" value={insertParams.val7} onChange={handleChange}/>
        <br/><br/></label>

      <label>
        Attribute 8:
        <input type="text" name="at8" value={insertParams.at8} onChange={handleChange}/>
      </label>
      <label>
      Value 8:
        <input type="text" name="val8" value={insertParams.val8} onChange={handleChange}/>
        <br/><br/></label>

      <label>
        Attribute 9:
        <input type="text" name="at9" value={insertParams.at9} onChange={handleChange}/>
      </label>
      <label>
      Value 9:
        <input type="text" name="val9" value={insertParams.val9} onChange={handleChange}/>
        <br/><br/></label>
      
      <label>
        Attribute 10:
        <input type="text" name="at10" value={insertParams.at10} onChange={handleChange}/>
      </label>
      <label>
      Value 10:
        <input type="text" name="val10" value={insertParams.val10} onChange={handleChange}/>
        <br/><br/></label>

      <button type="submit">Insert</button>
    </form></div>
  );
}

export default InsertForm;
