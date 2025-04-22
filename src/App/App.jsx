import './App.scss';
import {NavLink, Routes, Route} from 'react-router';
import AddTask from "../Pages/AddTask/AddTask.jsx";
import TasksList from "../Pages/TaskList/TasksList.jsx";

function App() {

    return (
        <>
            <header className='container'>
                <nav className='nav_links'>
                <NavLink to='/'>AddTask</NavLink>
                <NavLink to='/all-tasks'>TasksList</NavLink>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<AddTask/>}/>
                    <Route path={'/all-tasks'} element={<TasksList/>}/>
                </Routes>
            </main>
            <footer className='container'/>
        </>
    )
}

export default App
