const db = require('../config/db');

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;

  const sql = 'UPDATE user1 SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'User updated successfully' });
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM user1 WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ user: result[0] });
  });
};
