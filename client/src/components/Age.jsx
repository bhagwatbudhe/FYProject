
// eslint-disable-next-line react/prop-types
export default function AgeCard({ age, setAge }) {
    // const onChange = (e) => {
    //     e.preventDefault();
    //     setAge(document.querySelector('#age').value)
    // }

    return (
        <div className="bg-white rounded-lg  p-6 border min-w-[300px]" >
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(age)
                if(age < 1 || age >150)
                {
                    alert("Age must be between 1 to 150");
                }
                setAge(document.querySelector('input').value)
            }}>
                <h3 className='text-lg font-semibold text-gray-500'>Age</h3>
                <input type="text" value={age} onChange={(e) => {
                    setAge(e.target.value)
                }} placeholder='Enter age' required />
                <br />

                <h2 className='text-2xl mt-3'>Age : {age}</h2>
            </form>
        </div>

    );
}