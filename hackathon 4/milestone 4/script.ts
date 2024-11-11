const resumeDisplayform  = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-editable') as HTMLDivElement

//Handle form submission
resumeDisplay.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const FATHERNAME = (document.getElementById('father name') as HTMLInputElement).value
    const EMAIL = (document.getElementById('email') as HTMLInputElement).value 
    const PHONE = (document.getElementById('phone') as HTMLInputElement).value
    const EDUCATION = (document.getElementById('education') as HTMLInputElement).value
    const GENDER = (document.getElementById('gender') as HTMLInputElement).value
    const MARITALSTATUS = (document.getElementById('marital status') as HTMLInputElement).value  
    const SKILLS = (document.getElementById('skills') as HTMLInputElement).value
    const WORKEXPERIENCE = (document.getElementById('work experience') as HTMLInputElement).value 
    
      // Generate the resume content dynamically 
      const resumeHTML = `
      <h2><b>Editable Resume</b></h2>
      <h3>PERSONAL INFORMATION</h3> 
      <p><b>Name:</b><span contenteditable="true">${name}</span></p> 
      <p><b>fathername:</b><span contenteditable="true">${FATHERNAME}</span></p>
      <p><b>email:</b><span contenteditable="true">${EMAIL}</span></p>
      <p><b>phone:</b><span contenteditable="true">${PHONE}</span></p> 


      <h3>EDUCATION<h3> 
      <p contenteditable="true">${EDUCATION}</p>

      h3>GENDER<h3> 
      <p contenteditable="true">${GENDER}</p>

      h3>MARITAL STATUS<h3> 
      <p contenteditable="true">${MARITALSTATUS}</p>

      h3>SKILLS<h3>
      <p contenteditable="true">${SKILLS}</p>

      <h3>WORK EXPERIENCE<h3> 
      <p contenteditable="true">${WORKEXPERIENCE}</p>
      `; 

      //Display the generated resume 
      if(resumeeditable){
        resumeeditable.innerHTML = resumeHTML;
      }else{
          console.error('The resume display element is missing.'); 
      }
      
});
 