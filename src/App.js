import './App.css'
import Book from './Component/Book';
function App() {
  return (
     <div className='App'>
      <Book name="Harry Potter" author="J.K.Rowling"/>
      <Book name="Anna Karenina" author="Leo Tolstoy"/>
      <Book name="Madame Bovary" author="Gustave Flaubert"/>
      <Book name="War and Peace" author="Leo Tolstoy"/>
      <Book name="Lolita" author="Vladimir Nabokov"/>
     </div>
  );
}
export default App;