import { pool } from "../db.js"


export const getEmployees = async (request, response) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    response.json(rows)
}

export const getEmploye = async (request, response) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id =?', [request.params.id])
    response.json(rows)
}


export const createEmployees = async (request, response) => {
    const { name, salary } = request.body
    const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)', [name, salary])
    response.send({
        rows: rows.insertId,
        name: name,
        salary: salary,
    })
}


export const updateEmployees = async (request, response) => {
    const { id } = request.params
    const { name, salary } = request.body

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?,salary) WHERE id = ?', [name, salary, id])
    console.log(result);

    if (result.affectedRows === 0) {
        return response.status(404).json({
            message: "Not Upadated"

        })
    } else {
        const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        return response.json(row[0])
    }

}


export const deleteEmployees = async (request, response) => {
    const [row] = await pool.query('DELETE FROM employee WHERE id =?', [request.params.id])

    if (row.affectedRows <= 0) {
        return response.status(400).json({ "Message:": "ERROR NOT FOUND ROW AFFECTED" })
    } else {
        return response.status(200).json({ "Message": "VERY WELL" })
    }

}