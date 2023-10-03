// eslint-disable-next-line react/prop-types
export default function GenderCard({ gender, setGender }) {

    const onChange = (e) => {
        e.preventDefault();
        setGender(document.querySelector('#age').value)
    }

    return (
        <div className="bg-white rounded-lg  p-6 border min-w-[300px]" >
            <form >
                <h3 className='text-lg font-semibold text-gray-500'>Gender</h3>
                <select name="age" id="age" onChange={onChange} required>
                    <option>---</option>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                </select>
                {/* <button>Submit</button> */}


                <h2>Gender : {
                    gender
                }</h2>
            </form>
        </div>

    );
}