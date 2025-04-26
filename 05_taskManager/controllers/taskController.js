
let tasks = [];

const createTask = (req, res) => {
    console.log(req.body);
    
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const getTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = title;
  res.json(task);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.status(204).send();
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
