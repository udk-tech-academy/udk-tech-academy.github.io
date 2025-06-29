


const resumeRight = document.querySelector('.resume_right')

const ExperienceContent = `<h4>Experience</h4>
                <p>Full Stack developer with and expertise in 
            Graphic Design, Web and database syetems.
                    </p>
                    <ul>
                        <li>
                            <h6>2025 </h6>
                            <h5>Fullstack Freelancer</h5>
                            <p>Self Employment</p> 

                        </li>

                        <li>
                            <h6>2025 </h6>
                            <h5>Fullstack Freelancer</h5>
                            <p>Self Employment</p> 
                            
                        </li>
                    </ul>`;
const ExperienceBtn = document.querySelector('.experience_btn')
ExperienceBtn.addEventListener('click',() =>{
    resumeRight.innerHTML = ExperienceContent;
    ExperienceBtn.classList.add('primary')
    resumeRight.className = 'resume_right'

    educationBtn.classList.remove('primary')
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')

  
})

resumeRight.innerHTML = ExperienceContent;



// education

const educationBtn = document.querySelector('.education_btn')
const educationContent = `<p>This is my educational background </p>
     <ul>
        <li>
     <h4>Albert Institude Of Technology </h4>
    <p>Which i have satifactorily completed a certificate programme in 
    computer appreciation/application & desktop publishing/management.
    
    </p>
        </li>
    
       <li class="logo-relative">
           <h5>Dakada Skills Aquisition Center(DASAC)<span><img src="assect/dasac.jpg" class="dasac-logo"></span> </h5>
           <p> Having satisfactorily the technical skills training
            in web development and database management
            
           </p>
               </li>
        
              
                      
     </ul`

     educationBtn.addEventListener('click',() =>{
        resumeRight.innerHTML= educationContent;
        resumeRight.className = 'resume_right education'
        educationBtn.classList.add('primary')

        ExperienceBtn.classList.remove('primary')
        skillsBtn.classList.remove('primary')
        aboutBtn.classList.remove('primary')
     })

    //  skills

     const skillsContent = `<h4>Skills</h4>
        <p> </p>

        <ul>
        <li ><img src="./assect/html.png"</li>
        <li><img src="./assect/css.png"></li>
        <li><img src="./assect/js.png"></li>
        <li><img src="./assect/sql.png"></li> 
        <li><img src="./assect/php.webp"></li>
        <li><img src="./assect/fff.gif"></li>
     
         </ul>
        </div>`


         const skillsBtn = document.querySelector('.skills_btn')
         skillsBtn.addEventListener('click', () =>{
            resumeRight.innerHTML = skillsContent;
            resumeRight.className = 'resume_right skills'
            skillsBtn.classList.add ('primary')

            ExperienceBtn.classList.remove('primary')
            educationBtn.classList.remove('primary')
            aboutBtn.classList.remove('primary')
         });

         //about me


         const aboutContent = `
<h4>About Me</h4>

<ul class='ul-about'>
<li> <h6>Name:</h6><h5>Uduak Michael peter</h5></li>
<li><h6>Email:</h6> <h5>uduakp378@gmail.com</h5></li>
<li><h6>Phone:</h6><h5> +2348144047831</h5></li>
<li><h6>Freelance:</h6><h5>Yes</h5></li>
<li><h6>Collaborate:</h6><h5>Yes</h5></li>
<li><h6>Experience:</h6> <h5>1years</h5></li>
<li><h6>State:</h6><h5>Akwa Ibom</h5></li>
<li><h6>Nationality:</h6><h5> Nigeria</h5></li>
<li><h6>Language:</h6> <h5>English</h5></li>
<li><h6><a href="viewCV.html"style="color:var(--color-gray-900)">View cv</a></li>

</ul>`



const aboutBtn = document.querySelector('.about_btn')
aboutBtn.addEventListener('click',() => {
resumeRight.innerHTML = aboutContent;
resumeRight.className = 'resume_right about'
aboutBtn.classList.add('primary')
resumeRight.classList.add('resume_right.ul-about')

skillsBtn.classList.remove('primary')
ExperienceBtn.classList.remove('primary')
educationBtn.classList.remove('primary')
});
