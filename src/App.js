import logo from './logo.svg';
import './App.css';
import List from './List';
import Stats from './Stats';

function App() {
  return (
    <div class=""> 
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pt-10">
        حملة أحباء النجم الساحلي بالساحلين
      </h2>   
      <Stats />
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-10">
        قائمة المساهمين
      </h2>    
      <List />
    </div>
  );
}

export default App;
