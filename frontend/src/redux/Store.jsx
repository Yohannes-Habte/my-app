import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import courseReducer from './reducers/courseReducer';
import cartReducer from './reducers/cartReducer';
import categoryReducer from './reducers/categoryReducer';
import contactReducer from './reducers/contactReducer';
import depReducer from './reducers/depReducer';
import eventReducer from './reducers/eventReducer';
import feedbackReducer from './reducers/feedbackReducer';
import jobReducer from './reducers/jobReducer';
import orderReducer from './reducers/orderReducer';
import orderStepsReducer from './reducers/orderStepsReducer';
import projectReducer from './reducers/projectReducer';
import requestReducer from './reducers/requestReducer';
import todoReducer from './reducers/todoReducer';
import wishlistReducer from './reducers/wishlistReducer';
import employeeRoleReducer from './reducers/employeeRoleReducer';
import employeeReducer from './reducers/employeeReducer';

const Store = configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
    product: productReducer,
    course: courseReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    category: categoryReducer,
    contact: contactReducer,
    department: depReducer,
    event: eventReducer,
    feedback: feedbackReducer,
    job: jobReducer,
    order: orderReducer,
    orderProcess: orderStepsReducer,
    project: projectReducer,
    request: requestReducer,
    todo: todoReducer,
    employeeRole: employeeRoleReducer,
  },
});

export default Store;
