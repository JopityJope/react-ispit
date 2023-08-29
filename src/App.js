import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  const handleSearch = async (username) => {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userData = await userResponse.json();
    setUserData(userData);
    console.log(userData);

    const reposResponse = await fetch(userData.repos_url);
    const userReposData = await reposResponse.json();
    setUserRepos(userReposData);
  };

  return (
    <div>
      <Input onSubmit={handleSearch} />
      {userData && (
        <div id="user-info">
          <h2>Korisničko ime: {userData.login}</h2>
          <img src={userData.avatar_url} alt="Avatar" />
          <p>Avatar url: {userData.avatar_url}</p>
          <p>Location: {userData.location}</p>
          <p>Bio: {userData.bio}</p>
        </div>
      )}
      {userRepos && (
        <div id="user-repos">
          <h3>Repozitoriji korisnika {userData.login}:</h3>
          <ul>
            {userRepos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
