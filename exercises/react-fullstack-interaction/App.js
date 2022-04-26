import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

let cleanUpTimeout = null;

function App() {
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (usernames.length !== 0) {
      const requests = usernames.map((username) => 
        fetch(`https://api.github.com/users/${username}`)
      );
      Promise.allSettled(requests)
        .then((response) =>
          Promise.all(response.map((response) => response.value.json()))
        )
        .then((data) => data.filter((user) => user.name))
        .then((data) => setUserData(data));
    } else {
      setUserData([]);
    }
  }, [usernames]);

  const usernameAnalysis = (event) => {
    clearTimeout(cleanUpTimeout);
    cleanUpTimeout = setTimeout(() => {
      const usernamesArray = event.target.value
        .split(',')
        .map((str) => str.trim());
      setUsernames(usernamesArray);
    }, 500)
  }

  return (
    <div>
      <form>
        <label>Enter Github usernames</label>
        <input type="text" name="usernames" onChange={usernameAnalysis}></input>
      </form>
      <div>
        {userData.map((data, index) => 
          <UserDetails key={`user-${index}`} user={data} />)}
      </div>
    </div>
  );
}

export default App;
