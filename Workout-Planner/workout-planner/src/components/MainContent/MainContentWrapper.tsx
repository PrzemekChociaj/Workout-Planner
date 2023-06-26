import Timer from '../Features/Timer';
import Navbar from '../Navbar/Navbar';

const Wrapper = () => {
	return (
		<div className=' h-screen bg-slate-300'>
			<Navbar />
			<Timer />
		</div>
	);
};

export default Wrapper;
