import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesjs-config.json';

const App = () => {
	return (
		<div>
			<Particles
				style={{ height: '100vh', width: '100vw', backgroundColor: 'purple' }}
				params={particlesConfig}
			/>
		</div>
	);
};

export default App;
