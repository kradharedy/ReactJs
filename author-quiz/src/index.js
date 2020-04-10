import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from './AuthorQuiz';
import {shuffle,sample} from 'underscore';

const authors = [
  {
    name: 'ArundhathiRoy',
    imageUrl: 'images/authors/ArundhatiRoy.jpg',
    imageSource:"wikimedia commons",
    books: ['The God of small things',
  'The End of imagination',
'Man booker prize']
  },
  {
    name: 'Mahatma Gandhi',
    imageUrl: 'images/authors/MahatmaGandhi.jpg',
    imageSource:"wikimedia commons",
    books: ['Pathway to God',
  'Mahatma Gandhi',
'The Essential Gandhi']
  },
  {
    name: 'APJ Abdul Kalam',
    imageUrl: 'images/authors/APJAbdulKalam.jpg',
    imageSource:"wikimedia commons",
    books: ['Turning Points',
  'Ignited Minds',
'India 2020']
  },
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/MarkTwain.jpg',
    imageSource:"wikimedia commons",
    books: ['The Innocents Abroad',
  'Life On the Mississippe',
'The adventure of Tom Sawyer']
  }
];

function  getTurnData(authors)
{
const allBooks = authors.reduce(function (p,c,i)
{
  return p.concat(c.books);
},[]);
const fourRandonBooks = shuffle(allBooks).slice(0,4);
const answer = sample(fourRandonBooks);
return{
  books: fourRandonBooks,
  author: authors.find((author) => 
  author.books.some((title) => title === answer)
  )
}
}

const state ={
  turnData: getTurnData(authors)
  //author:authors[0],
  //books:authors[0].books
};

ReactDOM.render(
    < AuthorQuiz {...state}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
