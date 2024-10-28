//grab main element out of body

const main = document.querySelector(`main`)

//pull data from database

const grabData = async () => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/teams`)
  const responseJSON = await response.json();
  const puppyTeamData = responseJSON.data;
  return puppyTeamData
};
//return puppyData
// map through the data to access the teams

const renderPuppyTeams = (puppyTeamsObject) => {
  const puppyTeamNames = puppyTeamsObject.teams.map((team) => {
    return team.name
  });

  //create two ul elements
  //set the inner HMTL of the UL to team name
  const teamOneUL = document.createElement(`ul`)
  teamOneUL.setAttribute(`id`, `teamOne`);
  teamOneUL.innerHTML = `<h2>${puppyTeamNames[0]}</h2>`;
  main.append(teamOneUL);

  const teamTwoUL = document.createElement(`ul`);
  teamTwoUL.setAttribute(`id`, `teamTwo`);
  teamTwoUL.innerHTML = `<h2>${puppyTeamNames[1]}</h2>`;
  main.append(teamTwoUL);

};
  
  const renderPuppyNames = (puppyTeamOne, puppyTeamTwo) => {

    const teamOne = puppyTeamOne.map((player) => {
    return player.name

  })

  const teamTwo = puppyTeamTwo.map((player) => {
    return player.name

  })

  for (let i = 0; i < teamOne.length; i++) {
    const teamOneLI = document.createElement(`li`)

    teamOneLI.innerHTML = `${teamOne[i]}`
    
    const finalOneUL = document.querySelector(`#teamOne`);
    finalOneUL.append(teamOneLI);
  };

  for (let i = 0; i < teamTwo.length; i++) {
    const teamTwoLI = document.createElement(`li`)
    teamTwoLI.innerHTML = `${teamTwo[i]}`
    
    const finalTwoUL = document.querySelector(`#teamTwo`)
    finalTwoUL.append(teamTwoLI);
    
  }; 


  const singlePuppyLI = document.querySelectorAll(`li`);

  singlePuppyLI.forEach((teamOneLI) => {
    teamOneLI.addEventListener(`click`, (event) => {
      renderSinglePuppy(event.target)

    });
  });
  singlePuppyLI.forEach((teamTwoLI) => {
    teamTwoLI.addEventListener(`click`, (event) => {
      renderSinglePuppy(event.target)
    });
  });

  const renderSinglePuppy = (puppy) => {
    
      main.innerHTML = `
      <h2>${puppy.innerHTML}</h2>
      

      <button>back</button>     
       `;
      
       const button = document.querySelector(`button`);
       button.addEventListener(`click`, () => {
         console.log(`Clicked`)

         main.replaceChildren(runFunctions())
         
        });
    }
  };  
//set value of target click to puppy player name 
//page becomes details of specific puppy
// grab the info from API
//write inner HTML to name, photo, breed and age 
//back button switches back to original lists


const runFunctions = async () => {
  const puppyTeamInfo = await grabData();
  renderPuppyTeams(puppyTeamInfo);
  console.log(puppyTeamInfo)
  const teamOnePlayers = puppyTeamInfo.teams[0].players
  const teamTwoPlayers = puppyTeamInfo.teams[1].players
  console.log(teamOnePlayers)
  renderPuppyNames(teamOnePlayers, teamTwoPlayers);  
  
};
runFunctions();