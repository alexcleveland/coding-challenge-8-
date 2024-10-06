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
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
    // Task 4: Handle Bonuses for Managers. I had to put task 4 into task 2. that was the only way it worked for me.
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, emp) => {
            if (emp instanceof Manager) {
                return total + emp.salary + emp.bonus;
            }
            return total + emp.salary;
        }, 0);
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


// Task 5 Create and Manage Departments and Employees

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);