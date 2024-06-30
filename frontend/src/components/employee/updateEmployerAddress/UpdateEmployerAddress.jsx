import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';
import ReactIcons from '../../reactIcons/ReactIcons';

const UpdateEmployerAddress = ({ setOpenAddress }) => {
  // Global icons
  const { closeIcon, addressIcon, zipCodeIcon, phoneIcon } = ReactIcons();

  // Local state variables
  const [employerName, setEmployerName] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [employerWebsite, setEmployerWebsite] = useState('');
  const [employerddresses, setEmployerddresses] = useState([]);

  // Update input variables
  const updateChange = (e) => {
    switch (e.target.name) {
      case 'employerName':
        setEmployerName(e.target.value);
        break;

      case 'street':
        setStreet(e.target.value);
        break;

      case 'zipCode':
        setZipCode(e.target.value);
        break;

      case 'city':
        setCity(e.target.value);
        break;

      case 'state':
        setState(e.target.value);
        break;

      case 'country':
        setCountry(e.target.value);
        break;

      case 'phoneNumber':
        setphoneNumber(e.target.value);
        break;

      case 'email':
        setEmployerWebsite(e.target.value);
        break;

      default:
        break;
    }
  };

  // Reset variables
  const reset = () => {
    setCountry('');
    setState('');
    setCity('');
    setStreet('');
    setZipCode(null);
    setphoneNumber('');
    setEmployerWebsite('');
  };

  // Handle user address
  const handleSubmitOfUserAddress = async (e) => {
    e.preventDefault();

    try {
      if (
        employerName === '' ||
        country === '' ||
        state === '' ||
        city === '' ||
        street === '' ||
        zipCode === ''
      ) {
        toast.error('Please fill all the fields!');
      } else {
        const newAddress = {
          country: country,
          state: state,
          city: city,
          street: street,
          zipCode: zipCode,
          phoneNumber: phoneNumber,
        };

        const { data } = await axios.put(`/update-address`, newAddress);

        reset();
      }
    } catch (error) {}
  };

  return (
    <section className="user-addresses-modal">
      <section className="new-user-address-popup-Box">
        <h4 className="user-address-popup-title">Add Your Current Address</h4>
        <span
          className="address-close-icon"
          onClick={() => setOpenAddress(false)}
        >
          {closeIcon}{' '}
        </span>

        <form
          onSubmit={handleSubmitOfUserAddress}
          action=""
          className="user-addresses-form"
        >
          {/* Choose Country using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={'country'} className="select-label">
                Country:
              </label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your country </option>
                {Country &&
                  Country.getAllCountries().map((country) => (
                    <option
                      className="option"
                      key={country.isoCode}
                      value={country.isoCode}
                    >
                      {country.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Choose State using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={'state'} className="select-label">
                State:
              </label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your state </option>
                {State &&
                  State.getStatesOfCountry(country).map((state) => (
                    <option
                      className="option"
                      key={state.isoCode}
                      value={state.isoCode}
                    >
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Choose City using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={'city'} className="select-label">
                City:
              </label>
              <select
                name="city"
                id="city"
                value={city}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your city </option>
                {City &&
                  City.getCitiesOfCountry(country).map((city) => (
                    <option
                      className="option"
                      key={city.isoCode}
                      value={city.isoCode}
                    >
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Street */}
          <div className="input-container">
            <span className="icon"> {addressIcon} </span>

            <input
              type="text"
              name={'street'}
              id={'street'}
              autoComplete="street"
              value={street}
              onChange={updateChange}
              placeholder="Street Name"
              className="input-field"
            />

            <label htmlFor={'street'} className="input-label">
              Street Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Zip Code */}
          <div className="input-container">
            <span className="icon"> {zipCodeIcon} </span>
            <input
              type="number"
              name={'zipCode'}
              id={'zipCode'}
              autoComplete="zipCode"
              value={zipCode}
              onChange={updateChange}
              placeholder="Enter Zip Code"
              className="input-field"
            />

            <label htmlFor={'zipCode'} className="input-label">
              Zip Code
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Phone Number */}
          <div className="input-container">
            <span className="icon"> {phoneIcon} </span>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="phoneNumber"
              value={phoneNumber}
              onChange={updateChange}
              placeholder="Enter Phone Number"
              className="input-field"
            />
            <label htmlFor="phoneNumber" className="input-label">
              Phone Number
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* employer email address */}
          <div className="input-container">
            <span className="icon"> {phoneIcon} </span>
            <input
              type="text"
              name="employerWebsite"
              id="employerWebsite"
              autoComplete="employerWebsite"
              value={employerWebsite}
              onChange={updateChange}
              placeholder="Enter Employer Website"
              className="input-field"
            />
            <label htmlFor="employerWebsite" className="input-label">
              Employer Website
            </label>
            <span className="input-highlight"></span>
          </div>

          <button className="user-address-btn">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default UpdateEmployerAddress