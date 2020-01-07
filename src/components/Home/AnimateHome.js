import React from 'react';
import { Slide } from 'react-slideshow-image';
import yoga from '../../images/yoga.jpg';
import i1 from '../../images/i1.jpeg';
import i2 from '../../images/i2.jpeg';
import i3 from '../../images/i3.jpeg';
import i4 from '../../images/i4.jpeg';
import i5 from '../../images/i5.jpeg';
import i6 from '../../images/i6.jpeg';
import i7 from '../../images/i7.jpeg';
import i8 from '../../images/i8.jpeg';
import i9 from '../../images/i9.jpeg';
import i10 from '../../images/i10.jpeg';

import './slideshow.css';

const I1style = {
	backgroundImage : 'url(' + i1 + ')'
};
const I2style = {
	backgroundImage : 'url(' + i2 + ')'
};
const I3style = {
	backgroundImage : 'url(' + i3 + ')'
};
const I4style = {
	backgroundImage : 'url(' + i4 + ')'
};
const I5style = {
	backgroundImage : 'url(' + i5 + ')'
};
const I6style = {
	backgroundImage : 'url(' + i6 + ')'
};
const I7style = {
	backgroundImage : 'url(' + i7 + ')'
};
const I8style = {
	backgroundImage : 'url(' + i8 + ')'
};
const I9style = {
	backgroundImage : 'url(' + i9 + ')'
};
const I10style = {
	backgroundImage : 'url(' + i10 + ')'
};
const properties = {
	duration           : 2000,
	transitionDuration : 500,
	infinite           : true,
	indicators         : true,
	arrows             : true,
	onChange           : (oldIndex, newIndex) => {
		/* console.log(`slide transition from ${oldIndex} to ${newIndex}`); */
	}
};

const AnimateHome = () => {
	return (
		<div className="slideshow">
			<Slide {...properties}>
				<div className="each-slide">
					<div style={I1style}>{/* 	<a href="#">
							<span>Slide 1</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I2style}>{/* 	<a href="#">
							<span>Slide 2</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I3style}>{/* 	<a href="#">
							<span>Slide 3</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I4style}>{/* <a href="#">
							<span>Slide 4</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I5style}>{/* 	<a href="#">
							<span>Slide 5</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I6style}>{/* 	<a href="#">
							<span>Slide 6</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I7style}>{/* 	<a href="#">
							<span>Slide 7</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I8style}>{/* <a href="#">
							<span>Slide 8</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I9style}>{/* 	<a href="#">
							<span>Slide 9</span>
						</a> */}</div>
				</div>
				<div className="each-slide">
					<div style={I10style}>{/* <a href="#">
							<span>Slide 10</span>
						</a> */}</div>
				</div>
			</Slide>
		</div>
	);
};

export default AnimateHome;
