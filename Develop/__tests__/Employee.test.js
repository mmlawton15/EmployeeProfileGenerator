//must have the following properties and methods: name, id, email, getName(), getID(), getEmail(), getRole() this last one returns "Employee"

const checkIfEqual = require('../lib/Employee.js');

test('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});