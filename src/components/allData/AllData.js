import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../../consts";

const AllData = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchdata = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}totalData`, {
            headers : {
                authorization : API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {loading ? <p>Yükleniyor...</p> : <>
                <h1 className="text-6xl text-gray-900 mb-5">Toplam Vaka : {data?.totalCases}</h1>
                <h1 className="text-6xl text-gray-800 mb-5">Toplam Ölüm : {data?.totalDeaths}</h1>
                <h1 className="text-6xl text-gray-700">Toplam İyileşme : {data?.totalRecovered}</h1>
            </>
            }
        </div>
    )
}

export default AllData;