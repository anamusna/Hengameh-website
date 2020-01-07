import React from 'react';
import { Link } from 'react-router-dom';

import './books.css';

const Items = [
	{
		subUrl      : '/book1',
		title       : 'book 1',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book2',
		title       : 'book 2',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book3',
		title       : 'book 3',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book4',
		title       : 'book 4',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book5',
		title       : 'book 5',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book6',
		title       : 'book 6',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book7',
		title       : 'book 7',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book8',
		title       : 'book 8',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	},
	{
		subUrl      : '/book9',
		title       : 'book 9',
		description : 'about the books',
		image       :
			'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
	}
];

class BookCards extends React.Component {
	render() {
		let book = this.props.book;
		return (
			<div className="card-folder">
				<div className="cardContent animated zoomIn">
					<div className="">
						<img className="card-img-top" src={book.image} alt="cardImg" />
						<div className="card-body text-dark">
							<p className="card-title">{book.title}</p>
							<p className="card-text">{book.description}</p>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<Link className="card-bottom" to={book.subUrl}>
										read more about {book.title}
									</Link>
								</div>
								{/* <Route path="/contact/:id" component={Contact} /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Books extends React.Component {
	render() {
		let books = Items;
		return (
			<div className=" bookLists text-white center">
				{/* <div style={{ textAlign: 'center' }}>
					<h2>LIST OF BOOKS</h2>
				</div> */}
				<div className="bookList">
					{books.map((book, index) => {
						return <BookCards book={book} key={index} />;
					})}
				</div>
			</div>
		);
	}
}

export default Books;
