let firstName = document.getElementById("First-Name");
let lastName = document.getElementById("Last-Name");
let codestackEmail = document.getElementById("Codestack-Email");
let homeEmail = document.getElementById("Home-Email");
let getRandomName = document.getElementById("Get-Random-Name");

function GetNameData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.names;
    });
}

function GetRandomName(names) {
  let randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

let counter = 0;
let saveFirstName1 = "";
let saveFirstName2 = "";
let saveFirstName3 = "";
let saveFirstName4 = "";
let saveFirstName5 = "";
let name1 = document.getElementById("Name1");
let name2 = document.getElementById("Name2");
let name3 = document.getElementById("Name3");
let name4 = document.getElementById("Name4");
let name5 = document.getElementById("Name5");
let randomName;

getRandomName.addEventListener("click", () => {
  GetNameData().then((names) => {
    if (counter >= 1) {
      saveFirstName5 = saveFirstName4;
      saveFirstName4 = saveFirstName3;
      saveFirstName3 = saveFirstName2;
      saveFirstName2 = saveFirstName1;
      saveFirstName1 = randomName.firstName;

      name5.innerText = saveFirstName5;
      name4.innerText = saveFirstName4;
      name3.innerText = saveFirstName3;
      name2.innerText = saveFirstName2;
      name1.innerText = saveFirstName1;

    }
    randomName = GetRandomName(names);
    firstName.innerText = randomName.firstName;
    lastName.innerText = randomName.lastName;
    codestackEmail.innerText = randomName.codestackEmail;
    homeEmail.innerText = randomName.homeEmail;
    counter++;
  });
});