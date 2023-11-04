//import Button from './Components/Button';
import Button from'./Components/Button';

const App = ()=> {
    return <div>
        <h1>Use full website</h1>
        <h3>Which Website do you want to open ?</h3>
       <div className='hero'>
        {/* re-callable button call in here */}
       <Button name="google" link="https://www.google.com"/>
        <Button name="edge" link="https://www.edge.com"/>
        <Button name="safari" link="https://safari.com"/>
        <Button name="lorem" link="https://www.lipsum.com"/>
       </div>
    </div>
}
export default App;