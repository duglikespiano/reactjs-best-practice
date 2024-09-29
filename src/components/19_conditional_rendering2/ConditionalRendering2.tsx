// If a conditional state has more than 3 options, nested ternary operator can be easily used
// but actually it make code's readibility worse
// So instead of it, separate nested ternary by making variables and simple ternary like below

type Role = {
	role: 'ADMIN' | 'TEACHER' | 'STUDENT';
};

const AdminView = () => <div>Admin</div>;
const TeacherView = () => <div>Teacher</div>;
const StudentView = () => <div>Student</div>;
const GuestView = () => <div>Guest</div>;

const RolesViews = {
	ADMIN: AdminView,
	TEACHER: TeacherView,
	STUDENT: StudentView,
};

export default function ConditionalRendering2(props: Role) {
	const View = RolesViews[props.role] ?? GuestView;
	return (
		<div>
			<View />
		</div>
	);
}
