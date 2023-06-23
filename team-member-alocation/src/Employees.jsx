
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employeed = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

 

    return(
        <main className="container">

          <div class="row justify-content-center mb-3 mt-3">
            <div class="col-6">

              <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
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
              <div id={employees.id} className={(employees.teamName === selectedTeam ? 'card m-2 standaout' : 'card m-2')} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>


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