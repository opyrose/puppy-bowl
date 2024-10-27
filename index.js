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
  // console.log(teamOne)

  const teamTwo = puppyTeamTwo.map((player) => {
    return player.name
  })

  //console.log(teamTwo)
  // create an li element
  // set the innner HTML of the li to the names
  // add the li to the corresponding team ol based on data


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
  
  
    
    singlePuppyLI.forEach((puppyLI) => {
      puppyLI.addEventListener(`click`, (event) => {
      
        console.log(event.target.innerHTML)
      });
    });
};

  
 

const runFunctions = async () => {
  const puppyTeamInfo = await grabData();
  renderPuppyTeams(puppyTeamInfo);
  const teamOnePlayers = puppyTeamInfo.teams[0].players
  const teamTwoPlayers = puppyTeamInfo.teams[1].players
  renderPuppyNames(teamOnePlayers, teamTwoPlayers);

 

};
runFunctions();