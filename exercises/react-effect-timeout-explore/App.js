import React, { useEffect } from 'react';

let updateTimeOut = null;

function App() {

  const [org, setOrg] = React.useState('');
  const [numRepos, setNumRepos] = React.useState(0);
  const [orgText, setOrgText] = React.useState('microsoft');

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}`)
    .then(d => d.json())
    .then(d => {
      console.log(d.public_repos);
      setNumRepos(d.public_repos);
    });
  }, [org]);

  const updateOrgText = (e) => {
    setOrgText(e.target.value);
    clearTimeout(updateTimeOut);
    setTimeout(() => {
      setOrg(e.target.value);
    }, 500);
  }

  return (
    <div style={{ margin: '50px'}}>
      <input disabled="true" type="text" value={numRepos} />
      <button type="button" onClick={() => setNumRepos(numRepos - 1)}>&minus;</button>
      <button type="button" onClick={() => setNumRepos(numRepos + 1)}>&#43;</button>
      <input type="text" value={orgText} onChange={updateOrgText} />
    </div>
  );
}

export default App;
