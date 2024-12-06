const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.addAdmin = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = 'INSERT INTO admin1 (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Admin added successfully', data: result });
  });
};

exports.updateAdmin = (req, res) => {
  const { name, email, password } = req.body;
  const id = req.params.id;

  const sql = 'UPDATE admin1 SET name = ?, email = ?, password = ? WHERE id = ?';
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(sql, [name, email, hashedPassword, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Admin updated successfully' });
  });
};

exports.deleteAdmin = (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM admin1 WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Admin deleted successfully' });
  });
};

exports.getAdmins = (req, res) => {
  const sql = 'SELECT * FROM admin1';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ admins: results });
  });
};
