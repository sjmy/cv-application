import "../styles/ProfileDisplay.css";

function ProfileDisplay({ profile }) {
  return (
    <section className="profileDisplayContainer">
      <h2>Profile</h2>
      <p>{profile}</p>
    </section>
  );
}

export default ProfileDisplay;
