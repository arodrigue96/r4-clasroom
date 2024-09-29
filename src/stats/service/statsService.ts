import { courses, grades, students } from "../../index.js";
import { CourseStats } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats

export const getCourseStats = (courseId: number): CourseStats => {
  const passingGrade = 5;
  const percentageMultiplier = 100;
  const initialSum = 0;
  const position = 0;

  const totalStudentsInCourse = grades.filter(
    (grade) => grade.courseId === courseId
  ).length;

  const studentsPassedCount = grades.filter(
    (grade) => grade.value >= passingGrade && courseId === grade.courseId
  ).length;

  const studentsFailedCount = grades.filter(
    (grade) => grade.value < passingGrade && courseId === grade.courseId
  ).length;

  const coursesGrades = grades.filter((grade) => grade.courseId === courseId);

  const averageGrade =
    coursesGrades.reduce((sum, grade) => sum + grade.value, initialSum) /
    totalStudentsInCourse;

  const sortedGrades = coursesGrades
    .map((grade) => grade.value)
    .sort((gradeA, gradeB) => gradeB - gradeA);

  const highestGrade = sortedGrades[position];

  const highestGradeObject = coursesGrades.find(
    (grade) => grade.value === highestGrade
  );
  const highestGradeStudentId = highestGradeObject!.studentId;

  const courseStatsData: CourseStats = {
    courseId: courseId,
    studentsCount: totalStudentsInCourse,
    passedCount: studentsPassedCount,
    passedCountPercentage:
      (studentsPassedCount * percentageMultiplier) / totalStudentsInCourse,
    failedCount: studentsFailedCount,
    failedCountPercentage:
      (studentsFailedCount * percentageMultiplier) / totalStudentsInCourse,
    averageGrade: averageGrade,
    highestGrade: highestGrade,
    highestGradeStudentId: highestGradeStudentId,
  };

  return courseStatsData;
};
