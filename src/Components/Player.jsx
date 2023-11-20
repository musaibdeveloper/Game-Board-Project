import {useState} from "react"
export default function Player({ Initialname, symbol }) {
     const [DummyNames , UpdatedNames] = useState(Initialname)
    const [isEditing, EditedSuccessfully] = useState(false);
    function HandleClick() {
        EditedSuccessfully((isEditing)=> !isEditing);
    }

    function handlechange(event) {
        UpdatedNames(event.target.value);
    }

    let playerName = <span className="player-name">{DummyNames}</span>;
    let btnCaption = "Edit"


    if (isEditing) {
        playerName = <input type="text" required value={DummyNames} onChange={handlechange} />;
        btnCaption = "Save"
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleClick}>{ btnCaption}</button>
        </li>
    );
}