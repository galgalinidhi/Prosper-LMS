import React from 'react'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/CSS/announcement.css'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/bootstrap/dist/css/bootstrap.css'
export default function PostAnnounce() {
  function post_text() 
  {
      var strText = document.getElementById("post_title").value;          
      var strText1 = document.getElementById("post_subject").value;
      var result = strText + '   ' + strText1;
      document.getElementById('spanResult').textContent = result;
       
  }
    return(
        <>
<div className="text-center post">
<form>
<div className="col-sm-6 offset-sm-3">
    <label for="formGroupExampleInput">Course ID</label>
    {/* <input type="text" class="form-control" id="post_id"/> */}
    <select name="selectList" id="selectList">
  <option selected value="Select Course Id" />
   <option value="option 1">Option 1</option>
   <option value="option 2">Option 2</option>
</select>
  </div>
  <div className="col-sm-6 offset-sm-3">
    <label for="formGroupExampleInput">Title</label>
    <input type="text" class="form-control" id="post_title"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Subject</label>
    <input type="text" class="form-control" id="post_subject" /><br />
  </div>
  <div>
  <button onClick={post_text}>Post</button> <br />
  
  </div>
</form>
</div>
<br />
<br />
<hr class="solid"></hr>
<div className="recent_announce">
    <h2>Recent Announcements</h2>
</div>
<div>
  <span id="spanResult">

</span>
</div>
 </>
    )
}