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

function showDeleteDialog(target) {
  const dropdown = target.nextElementSibling;
  dropdown.classList.remove("hide");
  dropdown.classList.add("show");
}

function hideDeleteDialog(target) {
  const dropdown = target.parentNode.parentNode;
  dropdown.classList.remove("show");
  dropdown.classList.add("hide");
}

function deleteItem(
  originalIndex,
  originalEntry,
  extra,
  onExtraChange,
  target
) {
  const newItems = originalEntry.items.filter(
    (item, newIndex) => newIndex !== originalIndex
  );
  const newEntry = { ...originalEntry, items: newItems };
  const newExtra = extra.map((entry) =>
    entry.id === newEntry.id ? newEntry : entry
  );

  onExtraChange(newExtra);
  hideDeleteDialog(target);
}

function deleteEntry(originalEntry, extra, onExtraChange, target) {
  const newExtra = extra.filter((entry) => entry.id !== originalEntry.id);
  onExtraChange(newExtra);
  hideDeleteDialog(target);
}

function itemInput(item, itemIndex, entry, extra, onExtraChange) {
  return (
    <div className="itemInput items" key={`item-${itemIndex}`}>
      •
      <label className="inputLabel">
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
      <img
        src="../img/delete_x.svg"
        className="trash"
        onClick={(e) => showDeleteDialog(e.target)}
      />
      <div className="dropdownContent">
        <h4>Delete item?</h4>
        <div className="options">
          <button
            className="yesNo"
            onClick={(e) =>
              deleteItem(itemIndex, entry, extra, onExtraChange, e.target)
            }
          >
            Yes
          </button>
          <button className="yesNo" onClick={(e) => hideDeleteDialog(e.target)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

function addNewEntry(extra, onExtraChange) {
  let newExtra = extra.map((entry) => entry);
  let newEntry = {
    id: crypto.randomUUID(),
    title: "New Section",
    items: [],
  };

  newExtra.push(newEntry);
  onExtraChange(newExtra);
}

function addNewItem(originalEntry, extra, onExtraChange) {
  let newExtra = extra.map((entry) => {
    if (entry.id === originalEntry.id) {
      entry.items.push("");
    }
    return entry;
  });

  onExtraChange(newExtra);
}

function handleTitleChange(originalEntry, extra, onExtraChange, newTitle) {
  let newExtra = extra.map((entry) => {
    if (entry.id === originalEntry.id) {
      entry.title = newTitle;
    }
    return entry;
  });

  onExtraChange(newExtra);
}

function ExtraEntryInput(entry, extra, onExtraChange) {
  return (
    <div className="entryInputContainer" key={entry.id}>
      <button
        className="formTitle"
        onClick={(e) => toggleContainerDisplay(e.target)}
      >
        <div className="sectionHeader">
          <label className="inputLabel">
            <input
              type="text"
              value={entry.title}
              placeholder="Title"
              id={entry.title}
              autoComplete="off"
              onChange={(e) =>
                handleTitleChange(entry, extra, onExtraChange, e.target.value)
              }
            />
          </label>
        </div>
        <img src="../img/arrow_dropup.svg" className="arrow" />
      </button>
      <div className="inputForm show">
        {entry.items.map((item, itemIndex) =>
          itemInput(item, itemIndex, entry, extra, onExtraChange)
        )}
        <div className="inputFooter">
          <button
            className="addNewEntry"
            onClick={() => addNewItem(entry, extra, onExtraChange)}
          >
            <img src="../img/add.svg" />

            <h4>Add item</h4>
          </button>
          <img
            src="../img/delete.svg"
            className="trash"
            onClick={(e) => showDeleteDialog(e.target)}
          />
          <div className="dropdownContent">
            <h4>Delete section?</h4>
            <div className="options">
              <button
                className="yesNo"
                onClick={(e) =>
                  deleteEntry(entry, extra, onExtraChange, e.target)
                }
              >
                Yes
              </button>
              <button
                className="yesNo"
                onClick={(e) => hideDeleteDialog(e.target)}
              >
                No
              </button>
            </div>
          </div>
        </div>
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
        <button
          className="addNewEntry"
          onClick={() => addNewEntry(extra, onExtraChange)}
        >
          <img src="../img/add.svg" />
          <h4>Add section</h4>
        </button>
      </div>
    </div>
  );
}

export default ExtraSectionsInput;
