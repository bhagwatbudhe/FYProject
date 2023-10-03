import { useEffect } from 'react';
import { getP1EKG } from "../services/ubidots";
import { getLatestValue } from '../utils/formatData';

// eslint-disable-next-line react/prop-types
export default function EKGCard({ ekg, setEkg }) {

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            const res = await getP1EKG();
            setEkg(getLatestValue(res));
            // setLoading(false);
            console.log(getLatestValue(res));
        };

        fetchData()
    }, []);

    return (
        <div className="bg-white rounded-lg  p-6 border min-w-[300px]" >
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-500">Heart Rate</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-xl font-bold">{ekg}</span>
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