// Challange.jsx
function Avatar() {
  return <img width="30%" src="photo.jpg" />;
}

function Intro() {
  return (
    <p>Lorem ipsum dolor sit amet...</p>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.bgColor }}>
      <span>{props.skillName}</span>
      <span>{props.Emoji}</span>
    </span>
  );
}

function Skilllist() {
  return (
    <div>
      <Skill skillName="React" bgColor="red" Emoji="💪" />
      <Skill skillName="Python" bgColor="yellow" Emoji="💪" />
      <Skill skillName="HTML & CSS" bgColor="blue" Emoji="💪" />
      <Skill skillName="Javascript" bgColor="green" Emoji="🤙" />
    </div>
  );
}

function Challange() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <Skilllist />
    </div>
  );
}

export default Challange;