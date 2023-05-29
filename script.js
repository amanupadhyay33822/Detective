const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const searchBtn = document.getElementById("searchBtn");
const userNameInput = document.getElementById("userName");

// Function to perform the search operation
async function main() {
  const userName = userNameInput.value.trim();
   try{
  if (userName === "") {
    alert("Please enter a GitHub username.");
    return;
  } else {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    let resultContainer = document.getElementById("main-container");
    const dateObj = new Date(data.created_at);
    const Month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    resultContainer.innerHTML = `
    
   <div class="flex justify-between mt-[40px] "><br>
    <img src="${
      data.avatar_url
    }" alt="" class="rounded-full ml-[40px] w-[116px] h-[116px]" avatar>
     
       <div class="flex flex-col ml-[50px]">
        <h2 id="1" class="font-mono text-[26px] font-semibold w-[250px]">${data.name}</h2>
        <a href="${data.html_url}" class="underline text-blue-400 font-mono">@${
      data.login
    }</a>
        <p class="description font-mono text-black  opacity-60 max-w-[370px] mt-[16px] text-[15px] tracking-wide leading-[20px]">${data.bio}</p>
       </div>

   
       <div class="font-mono mt-2 mr-3  w-[200px] h-[64px] text-[15px]">
          <p joinedAt>Joined ${
            data.created_at.charAt(8) + data.created_at.charAt(9)
          } ${month[Month]}  ${year}  </p>
       </div>

    </div>
   
    <div class="ml-[205px] rounded-lg py-[30px] pl-7 pr-6 px-[10px] flex  font-mono  justify-between  text-white gap-6 bg-[#141d2f]  items-center mx-auto max-w-[480px] h-[96px] mt-[20px] mb-[18px] ">
        <p public-repo class="text-[16px] font-bold">Repos <br> ${data.public_repos} </p>
        <p follower class="text-[16px] font-bold">Followers<br>${data.followers} </p>
        <p following class="text-[16px] font-bold">Following<br>${data.following} </p>
    </div>
    
    <div class="grid grid-cols-2 max-w-[480px] h-[85px] mx-auto ml-[215px] mt-8">
     
        <div class="flex flex-row gap-2">
         <img src="./assests/location-icon.svg" alt="" class="w-4 h-6">
            <p location class="flex" >${data.location}</p>
        </div>
       
        <div class="flex flex-row gap-2">
            <img src="./assests/website-icon.svg" alt="" class="w-6 h-6">
           <a href="${data.blog}" id="website">${data.blog}</a>
        </div>
        
        <div class="flex flex-row gap-2 mt-2">
            <img src="./assests/twitter-icon.svg" alt="" class="w-6 h-6">
          <a href="" id="twitter">${data.twitter_username || "NA"}</a>
        </div>
        
        <div class="flex flex-row gap-2 mt-2">
            <img src="./assests/company-icon.svg" alt="" class="w-6 h-6">
            <p company>${data.company || "NA"}</p>
        </div>
    </div>
    
    
    `;

    console.log(data.login);
    console.log(dateObj.getMonth());
  }
}
catch (e) {
  alert("No user name found");
}
}

// Attach event listeners
searchBtn.addEventListener("click", main);
userNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    main();
  }
});
const darkModeToggle = document.getElementById("darkModeToggle");

  // darkModeToggle.addEventListener("click", toggleDarkMode);
  // function toggleDarkMode() {
  //   document.body.classList.toggle("dark-mode");
  // }
  function darkfunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var x = document.getElementById("moon");
  
    if (element.classList.contains("dark-mode")) {
      x.src = "./assests/sun-icon.svg";
    } else {
      x.src = "./assests/moon-icon.svg";
    }
  }
