import './App.css';
function App() {
  return (
    <div>
     <nav className="navbar">
      <h2>Siya Goyal</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     </nav>
    
     <div className="hero" id="home">
      <h1>I Build Websites That Grow Your Business</h1>
      <p>Fast, modern and responsive websites designed to attract customers </p>
      <button onClick={() => window.location.href = '#contact'}>Get a Free Quote</button>
     </div>

     <div className="about" id="about">
      <h2>About Me</h2>
      <p>Hi, I'm Siya - a passionate web developer who creates modern, fast and responsive websites.
         I focus on building clean designs and smooth user experiences that help businesses grow online
      </p>
      </div>

      <div className="skills">
        <h2>My Skills</h2>
        <div className="cards">
         <div className="card">React.js</div>
         <div className="card">Node.js</div>
         <div className="card">MongoDB</div>
         <div className="card">Express.js</div>
         <div className="card">JavaScript</div>
         <div className="card">HTML & CSS</div>
         <div className="card">Git & GitHub</div>
         <div className="card">REST APIs</div>
         </div> 
      </div> 

      <div className="cards" id="projects">

  <div className="card">
    <h3>Online Examination System</h3>
    <p>
      A full stack web app built with MERN stack. Features include JWT auth,
      timer based exam, auto submit and result generation.
    </p><a href="https://github.com/siya-goyal123/OnlineExamSystem" target="_blank">View on GitHub</a>
   </div>

   <div className="card">
    <h3>Restaurant Management</h3>
    <p>
      A web application to manage restaurant orders, menu and billing system.
      Designed to improve efficiency and user experience.
    </p><a href="https://github.com/siya-goyal123/restaurant-project" target="_blank">View Project</a>
   </div>

   </div>

        <div className="services">
        <h2>Our Services</h2>

      <div className="cards">
        <div className="card">Website Design</div>
        <div className="card">Frontend Development</div>
        <div className="card">Backend development</div>
      </div>
     </div>
        <div className="contact" id="contact">
          <h2>Contact Me</h2>
        <p>Email: <a href="mailto:goyalisiya091@gmail.com">goyalsiya091@gmail.com</a></p>
        <p>Available for freelance projects!</p>
        <button onClick={() => window.location.href = 'mailto:goyalsiya091@gmail.com'}>Send Message</button>
       </div>  
     
     <footer className="footer">
          <p>© 2026 Siya. All rights reserved.</p>
        </footer>
    </div>
  );
}
export default App;