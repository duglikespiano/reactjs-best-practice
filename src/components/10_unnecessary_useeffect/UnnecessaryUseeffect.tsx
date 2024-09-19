import { useEffect, useState } from 'react';

export default function UnnecessaryUseeffect() {
	const [courses, setCourses] = useState([]);
	const [selectedCourse, setSelectedCourse] = useState(null);

	useEffect(() => {
		fetch('/get/courses').then((res: any) => {
			setCourses(res.formData.courses);
		});
	}, []);

	// Code below will cause unnecessary re-rendering
	// useEffect(() => {
	// 	const defaultCourse = courses.find((course: any) => course.isDefault);
	// 	setSelectedCourse(defaultCourse as any);
	// }, [courses, setSelectedCourse]);

	// Solution
	// Give condition to variables and functions to prevent unnecessary re-rendering
	if (selectedCourse === null) {
		const defaultCourse = courses.find((course: any) => course.isDefault);
		setSelectedCourse(defaultCourse as any);
	}

	const selectCourseHandler = (course: any) => {
		setSelectedCourse(course);
	};

	return (
		<ul>
			{courses?.map((course: any) => {
				return <Course key={course.id} onSelectCourse={selectCourseHandler} course={course} />;
			})}
		</ul>
	);
}

const Course = (props: { onSelectCourse: any; course: any }) => {
	//lots of stuff here...
	return <>display some stuff about the course</>;
};
