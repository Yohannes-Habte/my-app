import createError from 'http-errors';
import Todo from '../../models/todo/index.js';

//===========================================================
// Create Todo
//===========================================================
export const createTodo = async (req, res, next) => {
  try {
    const todo = new Todo(req.body);

    // Save it
    try {
      await todo.save();
    } catch (error) {
      console.log(error);
      return next(createError(500, 'Todo could not be saved'));
    }

    // Response will be
    res.status(201).json({
      success: true,
      todo: todo,
      message: 'Todo is successfully created!',
    });
  } catch (error) {
    return next(createError(500, 'Todo could not be created'));
  }
};

//===========================================================
// Update Todo
//===========================================================
export const updateTodo = async (req, res, next) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findById(todoId);

    console.log('current todo=', todoId);

    if (!todo) {
      return next(createError(400, 'Todo not found! Please try again!'));
    }

    // update todo
    todo.status = req.body.status;
    todo.agree = req.body.agree;

    // Save it
    try {
      await todo.save();
    } catch (error) {
      return next(createError(500, 'Updated Todo could not be saved'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      update: todo,
      message: 'Todo is successfully updated!',
    });
  } catch (error) {
    return next(createError(500, 'Todo could not be updated'));
  }
};

//===========================================================
// Get Single Todo
//===========================================================
export const getSingleTodo = async (req, res, next) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return next(createError(400, 'Todo not found! Please try again!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      todo: todo,
    });
  } catch (error) {
    return next(createError(500, 'Todo could not be accessed'));
  }
};

//===========================================================
// Get All Todos
//===========================================================
export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    if (!todos) {
      return next(createError(400, 'Todos not found! Please try again!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      todos: todos,
    });
  } catch (error) {
    return next(createError(500, 'Todos could not be accessed!'));
  }
};

//===========================================================
// Delete Single Todo
//===========================================================
export const deleteSingleTodo = async (req, res, next) => {};
