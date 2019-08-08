import React from 'react';

import groups from './groups.json';

const Groups = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Discount (%)</th>
          <th scope="col">Starts</th>
          <th scope="col">Ends</th>
        </tr>
      </thead>
      <tbody>
        {
          groups.map((group, index) => (
            <tr key={group.id} style={{ cursor: 'pointer' }}>
              <th scope="row">{index + 1}</th>
              <td>{group.name}</td>
              <td>{group.discount_percentage}</td>
              <td>{group.signup_starts}</td>
              <td>{group.signup_ends}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
}

export default Groups;