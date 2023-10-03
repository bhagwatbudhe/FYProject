import { useEffect } from 'react';
import { getP1Temp } from "../services/ubidots";
import { getLatestValue } from '../utils/formatData';

// eslint-disable-next-line react/prop-types
export default function TempCard({ temp, setTemp }) {
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            const res = await getP1Temp();
            setTemp(getLatestValue(res));
            // setLoading(false);
            console.log(getLatestValue(res));
        };

        fetchData()
    }, []);

    return (

        <div className="bg-white rounded-lg  p-6 border min-w-[300px]" >
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-500">tempreture</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-xl font-bold">{temp}</span>
            </div>

            <span className="text-xs text-muted">Since last last update</span>

            <br />
            {/* <button className='bg-green-400 px-5 py-1s' onClick={() => {
                    setLoading(true)
                    console.log("refresh")
                }}>Poll</button> */}
        </div>

    );
}