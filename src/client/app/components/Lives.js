var React = require('react');

const Lives = (props)=>{
	var lives = [];

	// Pushes lives if any indicated by parent
	for(let i=0; i<props.amount;i++){
		lives.push(<img key={i} src="public/images/live.png" />);
	}
	return <aside className="lives">{lives}</aside>;
};

Lives.porpTypes = {
	lives: React.PropTypes.number.isRequired
};

export default Lives;