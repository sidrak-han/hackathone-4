const resumeform = document.getElementById('resume-form');
const resumeeditable = document.getElementById('resume-editable');

// Handle form submission
resumeform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = document.getElementById('name').value;
    const FATHERNAME = document.getElementById('father name').value;
    const EMAIL = document.getElementById('email').value;
    const PHONE = document.getElementById('phone').value;
    const EDUCATION = document.getElementById('education').value;
    const GENDER = document.getElementById('gender').value;
    const MARITALSTATUS = document.getElementById('marital status').value;
    const SKILLS = document.getElementById('skills').value;
    const WORKEXPERIENCE = document.getElementById('work experience').value;

    // Generate the resume content dynamically
    const resumeHTML = `
      <h2><b>Editable Resume</b></h2>
      <h3>PERSONAL INFORMATION</h3> 
      <p><b>Name:</b><span contenteditable="true">${name}</span></p> 
      <p><b>Father Name:</b><span contenteditable="true">${FATHERNAME}</span></p>
      <p><b>Email:</b><span contenteditable="true">${EMAIL}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${PHONE}</span></p> 

      <h3>EDUCATION</h3> 
      <p contenteditable="true">${EDUCATION}</p>

      <h3>GENDER</h3> 
      <p contenteditable="true">${GENDER}</p>

      <h3>MARITAL STATUS</h3> 
      <p contenteditable="true">${MARITALSTATUS}</p>

      <h3>SKILLS</h3> 
      <p contenteditable="true">${SKILLS}</p>

      <h3>WORK EXPERIENCE</h3> 
      <p contenteditable="true">${WORKEXPERIENCE}</p>
    `;

    // Display the generated resume
    if (resumeeditable) {
        resumeeditable.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});












