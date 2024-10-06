class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    rollNumber;
    courses;
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = [];
    }
    registerForCourses(Course) {
        this.courses.push(Course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(Course) {
        this.courses.push(Course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.instructors = [];
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(inst) {
        this.instructors.push(inst);
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourses(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Umm e Habiba", 20, "123");
const std2 = new Student("Laiba", 17, "456");
const std3 = new Student("Muhammad Umar", 19, "789");
const Instructor1 = new Instructor("Hamzah Syed", 25, "$10000");
const Instructor2 = new Instructor("Isfhan Ahmed", 27, "$10000");
const Instructor3 = new Instructor("Miss Hira", 33, "$10000");
const course1 = new Course(1, "Machine Learning");
const course2 = new Course(2, "Data Scientist");
const course3 = new Course(3, "Calculus");
const department1 = new Department("Computer Science");
const department2 = new Department("Science");
const department3 = new Department("Mathematics");
std1.registerForCourses(course1);
std1.registerForCourses(course2);
std2.registerForCourses(course1);
std3.registerForCourses(course3);
department1.addCourses(course1);
department2.addCourses(course2);
department3.addCourses(course3);
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course3.addStudent(std3);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
course3.setInstructor(Instructor3);
console.log(std1.courses[0]);
console.log(Instructor1.courses);
console.log(department2.courses[0]);
console.log(course3.students);
console.log(course1.students);
console.log(department3.courses);
console.log(std2.courses);
console.log(course2.students);
console.log(std3.courses);
console.log(Instructor3.courses);
console.log(department1.courses);
export {};
