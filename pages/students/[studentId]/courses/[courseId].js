import { useRouter } from "next/router";
import React from "react";

const Course = () => {
    const router = useRouter();
    const {studentId, courseId} = router.query
   return <p>Course {courseId} for student {studentId}</p>;
};

export default Course;



