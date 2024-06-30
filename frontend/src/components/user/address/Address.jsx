import React, { useState } from 'react';
import './Address.scss';
import ReactIcons from '../../reactIcons/ReactIcons';
import AddAddress from '../../forms/addressForm/AddAddress';

const Address = () => {
  // Global Variables
  const { closeIcon, trashIcon } = ReactIcons();

  // Local state variables
  const [openAddress, setOpenAddress] = useState(false);
  return (
    <section className="user-addresses-wrapper">
      <h2 className="user-address-title"> Addresses</h2>
      <article className="add-user-address">
        <h3 className="add-title"> Add New Address </h3>
        <button
          onClick={() => setOpenAddress(true)}
          className="add-new-address-btn"
        >
          Add New Address
        </button>
      </article>

      <section className="addresses-list-container">
        {/* Table addresses */}
        <table className="table-address">
          <thead className="table-head">
            <tr className="head-row">
              <th className="head-cell"> Address Type</th>
              <th className="head-cell"> Address </th>
              <th className="head-cell"> Zip Code</th>
              <th className="head-cell"> City</th>
              <th className="head-cell"> State</th>
              <th className="head-cell"> Country</th>
              <th className="head-cell"> Phone </th>
              <th className="head-cell"> Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            
            <tr className="body-row">
              <td className="body-cell"> {'address.addressType'} </td>
              <td className="body-cell"> {'address.address'} </td>
              <td className="body-cell">
                {/* {address.address1} {address.zipCode} */}
              </td>
              <td className="body-cell"> {'address.city'}</td>
              <td className="body-cell"> {'address.state'}</td>
              <td className="body-cell"> {'address.country'}</td>
              <td className="body-cell"> {'currentUser.phone'} </td>
              <td className="body-cell">
                <span className="delete-icon"> {trashIcon} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {openAddress && <AddAddress setOpenAddress={setOpenAddress} />}
    </section>
  );
};

export default Address;
