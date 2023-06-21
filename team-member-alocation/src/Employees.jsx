import { useState } from "react"
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employeed = () => {

const [employees, setEmployees] = useState([{

        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }
    ])

   
    return(
        <main className="container">

          <div class="row justify-content-center mb-3 mt-3">
            <div class="col-6">

              <select>
                <option value="TeamA">Team A</option>
                <option value="TeamB">Team B</option>
                <option value="TeamC">Team C</option>
                <option value="TeamD">Team D</option>
              </select>

              </div>
            </div>





          <div class="row justify-content-center mb-3 mt-3">
            <div class="col-8">

            

              <div class="card-collection">

              
            {
            employees.map((employees)=>(
              <div id={employees.id} className="card m-2" style={{cursor:"pointer"}}>


              {
                
                (employees.gender === 'female') ? <img src={femaleProfile} className="card-img-top"/> : <img src={maleProfile} className="card-img-top"/>
                
              }

                <div className="card-body">
                  <h5 className="card-title">Full Name: {employees.fullName}</h5>
                  <p className="card-text"><b>Desingnation: {employees.designation}</b></p>
                </div>
              </div>
           
            ))
            }
            </div>
            </div>
          </div>
        </main>
    )
}

export default Employeed