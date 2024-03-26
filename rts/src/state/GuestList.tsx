import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  console.log(guests);
  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>GuestList</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onClick}>Add Guest</button>
      <ul>
        {guests.map((guest, key) => (
          <li key={key}>{guests}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;

//cockaddadsa
