const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

// конфигурация подключения к БД
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// эндпоинт для поиска продуктов
app.post('/products', async (req, res) => {
  try {
    const { title, filter_items, order, filter, offset, limit } = req.body;

    // создание условий для запроса
    let conditions = [];
    let params = [];

    // условие для поиска по названию
    if (title) {
      conditions.push("title ILIKE $1");
      params.push(`%${title}%`);
    }

    // условие для поиска по массиву id
    if (filter_items && filter_items.length > 0) {
      conditions.push("id IN ($2)");
      params.push(`(${filter_items.join(',')})`);
    }

    // условие для сортировки
    let orderBy = '';
    if (filter && order) {
      orderBy = `ORDER BY ${filter} ${order}`;
    }

    // условие для пагинации
    let pagination = '';
    if (offset && limit) {
      pagination = `LIMIT ${limit} OFFSET ${offset}`;
    }

    // объединение условий
    const conditionString = conditions.join(' AND ');

    // запрос к БД
    const query = {
      text: `SELECT * FROM products ${conditionString ? `WHERE ${conditionString}` : ''}
             ${orderBy} ${pagination}`,
      values: params
    };

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// запуск сервера
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
