import React, { useEffect, useState } from 'react';
import './FinanceWithdrawMoney.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactIcons from '../../reactIcons/ReactIcons';

// Initial values
const initialState = {
  bankHolderName: '',
  bankName: '',
  bankCountry: '',
  bankSwiftCode: null,
  bankAccountNumber: null,
  bankAddress: '',
};

const WithdrawMoney = () => {
  // Global state variables
  const {
    bankIcon,
    bankCardIcon,
    swiftIcon,
    userIcon,
    closeIcon,
    locationIcon,
    addressIcon,
  } = ReactIcons();

  // Local state variables
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(50);
  const [bankInfo, setBankInfo] = useState(initialState);
  const [shopOrders, setShopOrders] = useState([]);

  // Get seller details
  useEffect(() => {
    const shopInfo = async () => {
      try {
        const { data } = await axios.get(`/shops/shop/`);
      } catch (error) {}
    };
    shopInfo();
  }, []);

  // Display all orders of a shop
  useEffect(() => {
    const fetchAllShopOrders = async () => {
      try {
        const { data } = await axios.get(`/orders/shop/`);

        setShopOrders(data.orders);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchAllShopOrders();
  }, []);

  // Destructure bankInfo variables
  const {
    bankHolderName,
    bankAccountNumber,
    bankName,
    bankCountry,
    bankSwiftCode,
    bankAddress,
  } = bankInfo;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setBankInfo({
      bankHolderName: '',
      bankAccountNumber: null,
      bankName: '',
      bankCountry: '',
      bankSwiftCode: null,
      bankAddress: '',
    });
  };

  // Update shop money withdraw method
  const updateShopPaymentMethods = async (e) => {
    e.preventDefault();

    try {
      const withdrawMethod = {
        bankHolderName: bankHolderName,
        bankAccountNumber: bankAccountNumber,
        bankName: bankName,
        bankCountry: bankCountry,
        bankSwiftCode: bankSwiftCode,
        bankAddress: bankAddress,
      };

      const { data } = await axios.put(`/shops/update-payment-methods`, {
        withdrawMethod,
      });
      setPaymentMethod(false);

      toast.success('Withdraw method added successfully!');

      reset();
    } catch (error) {}
  };

  // Delete shop payment method
  const deleteShopPaymentMethod = async () => {
    try {
      const { data } = await axios.delete(`/shops/delete-payment-method`);

      toast.success('Withdraw method deleted successfully!');
    } catch (error) {
      toast.error('You not have enough balance to withdraw!');
    }
  };

  // Error
  const error = () => {};

  // Create withdraw request handler
  const createWithdrawRequestHandler = async () => {
    try {
      if (withdrawAmount < 50) {
        toast.error("Sorry, you can't withdraw less than 50.00€!");
      } else if (withdrawAmount > 'availableBalance') {
        toast.error('Sorry, available balance is less than withdraw amount!');
      } else {
        const newWithdraw = {
          amount: withdrawAmount,
          seller: 'currentSeller',
        };
        const { data } = await axios.post(
          `/wthdraws/create-withdraw-request`,
          newWithdraw
        );

        toast.success('Withdraw money request is successful!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Shop available total balance
  // const availableBalance = currentSeller?.availableBalance;

  return (
    <section className="withdraw-money-container">
      <h1 className="title"> Withdraw Money</h1>

      {/* Shop balance and withdraw button */}
      <article className="shop-balance-and-withdraw-wrapper">
        <h5 className="shop-balance">
          Available Balance: ${'availableBalance'}
        </h5>
        <p
          className={`withdraw`}
          onClick={() => ('availableBalance' < 50 ? error() : setOpen(true))}
        >
          Withdraw
        </p>
      </article>

      {/* When open is true, you can see: available withdraw methods and add new */}
      {open && (
        <article
          className={paymentMethod ? 'withdraw-methods' : 'no-withdraw-methods'}
        >
          <h3
            onClick={() => setOpen(false) || setPaymentMethod(false)}
            className="close-icon"
          >
            {closeIcon}
          </h3>

          {/* When paymentMethod is true, then you can see the following*/}
          {paymentMethod && (
            <section className="form-wrapper">
              <h3 className="form-title">Add new Withdraw Method</h3>
              <form onSubmit={updateShopPaymentMethods} className="form">
                {/* Bank Holder Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name="bankHolderName"
                    id="bankHolderName"
                    autoComplete="bankHolderName"
                    value={bankHolderName}
                    onChange={handleChange}
                    placeholder="Enter Bank Holder Name!"
                    className="input-field"
                  />
                  <label htmlFor="bankHolderName" className="input-label">
                    Bank Holder Name
                  </label>
                  <span className="input-highlight"></span>
                </div>
                {/* Bank Account Number*/}
                <div className="input-container">
                  <span className="icon"> {bankCardIcon} </span>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    id="bankAccountNumber"
                    autoComplete="bankAccountNumber"
                    required
                    value={bankAccountNumber}
                    onChange={handleChange}
                    placeholder="Enter Your Bank Account Number!"
                    className="input-field"
                  />
                  <label htmlFor="bankAccountNumber" className="input-label">
                    Bank Account Number
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/*  Bank Name */}
                <div className="input-container">
                  <span className="icon"> {bankIcon} </span>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    autoComplete="bankName"
                    value={bankName}
                    onChange={handleChange}
                    placeholder="Enter Bank Name"
                    className="input-field"
                  />
                  <label htmlFor="bankName" className="input-label">
                    Bank Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/*   Bank Country */}
                <div className="input-container">
                  <span className="icon"> {locationIcon} </span>
                  <input
                    type="text"
                    name="bankCountry"
                    id="bankCountry"
                    autoComplete="bankCountry"
                    value={bankCountry}
                    onChange={handleChange}
                    placeholder="Enter Bank Country Location"
                    className="input-field"
                  />
                  <label htmlFor="bankCountry" className="input-label">
                    Country
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/*   Bank Swift Code */}
                <div className="input-container">
                  <span className="icon"> {swiftIcon} </span>
                  <input
                    type="text"
                    name="bankSwiftCode"
                    id="bankSwiftCode"
                    autoComplete="bankSwiftCode"
                    value={bankSwiftCode}
                    onChange={handleChange}
                    placeholder="Enter Bank Swift Code!"
                    className="input-field"
                  />
                  <label htmlFor="bankSwiftCode" className="input-label">
                    Bank Swift Code
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/*  Bank Address */}
                <div className="input-container">
                  <span className="icon"> {addressIcon} </span>
                  <input
                    type="text"
                    name="bankAddress"
                    id="bankAddress"
                    autoComplete="bankAddress"
                    value={bankAddress}
                    onChange={handleChange}
                    placeholder="Enter your bank address!"
                    className="input-field"
                  />
                  <label htmlFor="bankAddress" className="input-label">
                    Bank Address
                  </label>
                  <span className="input-highlight"></span>
                </div>

                <button type="submit" className={`add-btn`}>
                  Add
                </button>
              </form>
            </section>
          )}

          {/* When paymentMethod is false, then you can see the following*/}
          {paymentMethod === false && (
            <section className="available-withdraw-methods-wrapper">
              <h3 className="available-withdraw-methods-title">
                Available Withdraw Methods
              </h3>

              {'currentSeller && currentSeller?.withdrawMethod' ? (
                <section className="available-withdraw-method">
                  <h4 className="shop-details-title">
                    {'currentSeller.name'} Bank Details
                  </h4>

                  <article className="bank-details-container">
                    <aside className="bank-info-wrapper">
                      <h5 className="acount-number">
                        Account Number:{' '}
                        {'*'.repeat(
                          ' currentSeller?.withdrawMethod?.bankAccountNumber'
                            ?.length - 3
                        ) +
                          'currentSeller?.withdrawMethod?.bankAccountNumber'?.slice(
                            -3
                          )}
                      </h5>
                      <p className="bank-name">
                        Bank Name: {'currentSeller?.withdrawMethod?.bankName'}
                      </p>
                    </aside>

                    <h3
                      className="delete-bank-icon"
                      onClick={() => deleteShopPaymentMethod()}
                    >
                      {closeIcon}
                    </h3>
                  </article>

                  <aside className="shop-balance-and-withdraw-form">
                    <h3 className="balance">
                      Available Balance: ${'availableBalance'}
                    </h3>
                    {/* Create Money Withdraw Request form */}
                    <form className="form-create-withdraw-request">
                      <input
                        type="number"
                        placeholder="Amount..."
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="input-field"
                      />
                      <button
                        type="submit"
                        className={`submit-btn`}
                        onClick={createWithdrawRequestHandler}
                      >
                        Submit
                      </button>
                    </form>
                  </aside>
                </section>
              ) : (
                <section className="unavailable-withdraw-methods-wrapper">
                  <h3 className="unavailable-withdraw-methods-title">
                    Withdraw Methods Unavailable!
                  </h3>

                  <span
                    className={`add-new`}
                    onClick={() => setPaymentMethod(true)}
                  >
                    Add new
                  </span>
                </section>
              )}
            </section>
          )}
        </article>
      )}
    </section>
  );
};
export default WithdrawMoney;
