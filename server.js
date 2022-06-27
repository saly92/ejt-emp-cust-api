import express from "express";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.send(`
        <style>
        li {
            font-size: 1.5rem;
        }
        </style>
        <h1>Employee/Customer API</h1>
        <ul>
            <li><a href="http://localhost:${port}/employees">http://localhost:${port}/employees</a> = all employees</li>
            <li><a href="http://localhost:${port}/employees/23">http://localhost:${port}/employees/23</a> = employee with ID 23</li>
            <li><a href="http://localhost:${port}/employees-territories/23">http://localhost:${port}/employees-territories/23</a> = territories of employee with ID 23</li>
        </ul>
    `);
});
app.get('/employees',(req, res)=>{
    const employees=[
    {name: 'Employee'},
    {name: 'Customer'}
]
res.send(employees)})
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
