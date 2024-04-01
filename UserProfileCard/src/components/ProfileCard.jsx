// Named Exports Use when you have multiple things to export from a single file
// Useful for utility functions, helper functions, or when you want to export several components from a single file
const userdata = [
  {
    name: "achu",
    city: "kochi",
    job: "software engineer",
    online: false,
    profile: "images/t1.webp",
    skills: ["ui/ux", "python", "django", "node", "sql", "mongoDB"]
  },
  {
    name: "kochu",
    city: "new york",
    job: "web developer",
    online: true,
    profile: "images/t2.webp",
    skills: ["html", "css", "javascript", "react"]
  },
  {
    name: 'athulya',
    city: "los angeles",
    job: "graphic designer",
    online: true,
    profile: "images/t3.webp",
    skills: ["photoshop", "illustrator", "indesign"]
  }
];


function User (props){
  return(
    <div className="card-container">
      <span className={props.online ? "pro online":"pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p> {props.job}</p>
      <div className="button">
        <button className="primary">Messages</button>
        <button className="primary-outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skills,index)=>(
            <li key={index}>{skills}</li>
          ))} 
        </ul>
      </div>
    </div>
  )
}
export const ProfileCard = () => {
  return (
    <>
     {/* <User name='unni' 
    city='kochi' 
    job='Software Engineer'
    skills={["ui/ux", "python", "django", "node", "sql", "mongoDB"]} online ={true} profile ='images/t2.webp'/>
     */}
      {userdata.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          profile={user.profile}
          skills={user.skills}
          online={user.online}
          job={user.job}
        />
      ))}
    </>
  );
};

    
    // <User name='unni' 
    // city='kochi' 
    // job='Software Engineer'
    // skills={["ui/ux", "python", "django", "node", "sql", "mongoDB"]} online ={true} profile ='images/t2.webp'/>
    
    



//export default Use when you have a single "main" thing to export from a file
// commonly used for exporting a single React component, a class, or a single function that is the main focus of the file.
// import React from 'react'
// const ProfileCard = () => {
//   return (
//     <div>      
//     </div>
//   )
// }
// export default ProfileCard
