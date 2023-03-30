import { Students } from "./Students";
import { students } from "../duomenys/data";

export const StudentsList = () => {
  const studentsArr = students.map((student) => {
    console.log("studentas", student);
    return <Students key={student.Id} student={student} />;
  });

  const studentListFiltered = students.filter((student) => {
    return student.age > 22;
  });

  const listFilteredStudets = studentListFiltered.map((item) => {
    return <Students key={item.Id} student={item} />;
  });

  const studentGroupFilter = students.filter((student) => {
    return student.team === "Studentai";
  });

  const studentsGroupOne = studentGroupFilter.map((team) => {
    return <Students key={team.Id} student={team} />;
  });

  const schoolGroupFilter = students.filter((student) => {
    return student.team === "Moksleiviai";
  });

  const studentsGroupSchool = schoolGroupFilter.map((team) => {
    return <Students key={team.Id} student={team} />;
  });

  console.log("Studentai ", studentListFiltered);
  console.log("Moksleiviai ", studentsGroupOne);

  return (
    <>
      <ul>{studentsArr}</ul>
      <p>
        <b>Isfiltruoti</b>
      </p>
      <ul>{listFilteredStudets}</ul>
      <h2>
        <b>Studentai</b>
      </h2>
      <ul>{studentsGroupOne}</ul>
      <h2>
        <b>Moksleiviai</b>
      </h2>
      <ul>{studentsGroupSchool}</ul>
    </>
  );
};
