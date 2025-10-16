function ProfileTextInput({ profile, onProfileChange }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">
        <textarea
          type="text"
          value={profile}
          placeholder="Describe yourself!"
          id="profile"
          autoComplete="off"
          onChange={(e) =>
            handleProfileChange(profile, onProfileChange, e.target.value)
          }
        />
      </label>
    </div>
  );
}

function handleProfileChange(profile, onProfileChange, newProfile) {
  const newProfileText = newProfile;
  onProfileChange(newProfileText);
}

function toggleContainerDisplay(target) {
  let arrow = target.lastElementChild;
  let form = target.nextElementSibling;

  if (target.tagName !== "BUTTON") {
    arrow = target.parentNode.lastElementChild;
    form = target.parentNode.nextElementSibling;
  }

  if (form.className.includes("show")) {
    arrow.src = "../img/arrow_dropdown.svg";
    form.classList.remove("show");
    form.classList.add("hide");
    return;
  }

  arrow.src = "../img/arrow_dropup.svg";
  form.classList.remove("hide");
  form.classList.add("show");
  return;
}

function ProfileInput({ profile, onProfileChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Profile</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <form className="inputForm show">
        <ProfileTextInput profile={profile} onProfileChange={onProfileChange} />
      </form>
    </div>
  );
}

export default ProfileInput;
