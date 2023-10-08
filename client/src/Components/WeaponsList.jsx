import { useState, useEffect } from 'react';

function WeaponList() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    //fetch backend data
    fetch('/api/weapons') //replace with true endpoint
      .then((response) => response.json())
      .then((data) => setWeapons(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="container">
      <h2>Weapons List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Weapon Name</th>
            <th>Damage</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((weapon) => (
            <tr key={weapon.id}>
              <td>{weapon.weaponName}</td>
              <td>{weapon.damage}</td>
              <td>{weapon.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeaponList;