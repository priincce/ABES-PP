import React from 'react'
import "./SearchPage.css";
import Card from '../components/Card';

const cards = [
  {
    title:"hi",
    text:"djk"
  },
  {
    title:"hello",
    text:"djk"
  },
  {
    title:"bye",
    text:"djk"
  },
  {
    title:"out",
    text:"djk"
  }
];



const SearchPage = () => {
  return (
    <div className='search-page'>
      <header>logo</header>
      <main>
        <h2>Search here.</h2>
        <div>
         {cards.map((elem)=> (<Card key={elem.title} title={elem.title} text={elem.text}/>)
          )}
        </div>
      </main>
    </div>
  )
}

export default SearchPage
