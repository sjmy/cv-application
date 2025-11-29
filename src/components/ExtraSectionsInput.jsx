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

function handleItemChange(
  originalIndex,
  originalEntry,
  extra,
  onExtraChange,
  newItem
) {
  const newItems = originalEntry.items.map((item, newIndex) =>
    newIndex === originalIndex ? newItem : item
  );
  const newEntry = { ...originalEntry, items: newItems };
  const newExtra = extra.map((entry) =>
    entry.id === newEntry.id ? newEntry : entry
  );

  onExtraChange(newExtra);
}

function itemInput(item, itemIndex, entry, extra, onExtraChange) {
  return (
    <label className="inputLabel" key={itemIndex}>
      <input
        type="text"
        value={item}
        placeholder=""
        id={`item-${itemIndex}`}
        autoComplete="off"
        onChange={(e) =>
          handleItemChange(
            itemIndex,
            entry,
            extra,
            onExtraChange,
            e.target.value
          )
        }
      />
    </label>
  );
}

// Need to figure out how to change the title of the section and then display it like the rest of the headings in the input section
// Maybe an edit button that changes the title to an input? and when you press enter or click away it locks in
function ExtraEntryInput(entry, extra, onExtraChange) {
  return (
    <div className="entryInputContainer" key={entry.id}>
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <p>{entry.title}</p>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {entry.items.map((item, itemIndex) =>
          itemInput(item, itemIndex, entry, extra, onExtraChange)
        )}
      </div>
    </div>
  );
}

function ExtraSectionsInput({ extra, onExtraChange }) {
  return (
    <div className="formContainer">
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <h2>Extra Sections</h2>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {extra.map((entry) => ExtraEntryInput(entry, extra, onExtraChange))}
      </div>
    </div>
  );
}

export default ExtraSectionsInput;
