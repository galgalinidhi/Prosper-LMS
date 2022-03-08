import React, { useRef, useState } from "react";


export default function GetAnnouce() {
  
   const get_subject = useRef(null);
   const get_title = useRef(null);
  const [getResult, setGetResult] = useState(null);

   const fortmatResponse = (res) => {
     return JSON.stringify(res, null, 2);
     
 }
  
   async function getDataByTitle() {
     //const courseTitle = get_title.current.value;
     const courseTitle = "SE";
     if (courseTitle) {
       try {
       
         let url = new URL(`http://localhost:8989/announcement/get?courseTitle=${courseTitle}`);
         const params = { courseTitle: courseTitle };
         url.search = new URLSearchParams(params);
         const res = await fetch(url);
         if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
           throw new Error(message);
         }
        const data = await res.json();
         const result = {
           status: res.status + "-" + res.statusText,
        headers: {
             "Content-Type": res.headers.get("Content-Type"),
         "Content-Length": res.headers.get("Content-Length"),
           },
           data: data,
          
         };
         setGetResult(fortmatResponse(result));
       } catch (err) {
         setGetResult(err.message);
       }
     }
  }
// const getData = async () => {
//     try {
//         const gettitle = get_title.current.value;
//         const response = await axios.get("http://localhost:8989/announcement/get", {
//             method: 'GET',
//             body: JSON.stringify({
//                 // id: id,
//                 title: gettitle,
//                 // body: 'body is here',
//                 // userId: 1
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//             .then(response => response.json())
//             .then(json => console.log(json));
//         console.warn(response.data);
//     } catch (error) {
//         console.warn(error);
//     }
// }
return (
    <div className="card">
      <div className="card-header">Recent Announcements</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          
           {/* <input type="text" ref={get_title} className="form-control ml-2" placeholder="Title" /> */}
          <div className="input-group-append">
            <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Title</button>
          </div> 
          {/* <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button> */}
          
        </div>    
         <div>
        { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> } 
        </div> 
      </div>
      </div>
    
  );
}