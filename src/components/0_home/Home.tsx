import { Link } from 'react-router-dom';
import { componentsInfo as components } from './componentsInfo';
import { updateHexColor } from './componentsInfo';
import './Home.scss';

export default function Home() {
	return (
		<div id="home">
			<ul className="components">
				{components.map((component) => (
					<li className="component" key={component.id} style={{ backgroundColor: updateHexColor() }}>
						<Link to={component.path}>{component.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
