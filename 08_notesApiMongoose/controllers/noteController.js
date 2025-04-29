const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllNotes = async (req, res) => {
  const { pinned } = req.query;
  const filter = pinned ? { pinned: pinned === 'true' } : {};

  const notes = await Note.find(filter).sort({ createdAt: -1 });
  res.status(200).json(notes);
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.status(200).json(note);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.status(204).send();
};
