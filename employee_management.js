// Task 1 Create an Employee Class
class Employee{
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position =position;
        this.department = department;
    }
    getdetails() {
        return `${this.name} - ${this.position}: $${this.salary}`;
    }
}

// Task 2 Create a Department Class

class Department {
    constructor(name) {
        this.name = name;
        this.employees= [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
}

// Task 3 Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus){
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getdetails(){
        return`${this.name} - ${this.position}: $${this.salary} + Bonus: $${this.bonus}`;
    }
}
