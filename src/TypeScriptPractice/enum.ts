enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const currentDay: DaysOfWeek = DaysOfWeek.Tuesday;

console.log(currentDay);
console.log(DaysOfWeek[currentDay]);