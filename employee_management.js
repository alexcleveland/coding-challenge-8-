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

// Task 4 Handle Bonuses for Managers

class Department {
    constructor(name) {
        this.name = name;
        this.employees=[];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, emp)=> total + emp.salary, 0);
    }
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, emp) => {
            if (emp instanceof Manager){
                return total + emp.salary + emp.bonus;   
            }
            return total + emp.salary;
        }, 0); 
    }
}