import React from 'react'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/CSS/announcement.css'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/bootstrap/dist/css/bootstrap.css'
export default function PostAssign() {
    return(
        <>
<div className="text-center post">
<h2>Post Assignments</h2>
<form class="upload">
<label for="formGroupExampleInput">Course ID</label>
<br />
<select name="selectList" id="selectList">
   <option selected value="Select Course ID" />
   <option value="option 1">Option 1</option>
   <option value="option 2">Option 2</option>
</select>
<br />
   <input type="file" name="uploadFile" accept=".docx,.pdf,.doc" required />
   <br/><br/>
   <input type="submit" />
</form>
</div>
</>
    )
}


