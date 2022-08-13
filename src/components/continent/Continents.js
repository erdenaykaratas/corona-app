import { useState, useEffect } from "react";
import axios from "axios";
import { API_TOKEN, API_URL } from "/Users/erdenaykaratas/Desktop/Project/corona-app/src/consts";

const Continents = () => {
    const [header] = useState([
        {
            title: "Kıtalar",
            value: "continent"
        },
        {
            title: "Aktif Vakalar",
            value: "activeCases"
        },
        {
            title: "Yeni Vakalar",
            value: "newCases"
        },
        {
            title: "Toplam Vaka",
            value: "totalCases"
        },
        {
            title: "Toplam Ölüm",
            value: "totalDeaths"
        },
        {
            title: "Yeni Ölümler",
            value: "newDeaths"
        },
        {
            title: "Toplam İyileşme",
            value: "totalRecovered"
        }
    ])
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])

    const fetchData=async()=>{
        setLoading(true)
        const response=await axios.get(`${API_URL}continentData`,{
            headers:{
                authorization:API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(()=>{
       fetchData()
    },[])
    return(
        <div className="flex flex-col">
            <div className="inline-block min-w-full">
                <h1 className="text-2xl mb-4 font-bold text-gray-900">Korona Tablosu</h1>
                <div className="overflow-hidden shadow-md">
                    {loading? <p>Loading...</p>:<table className="min-w-full">
                        <thead className="bg-gray-600">
                                    <tr>
                                        {header.map((item)=>{
                                            return(
                                                <th key={item.title} className="py-3 px-6 text-xs font-medium text-gray-300 uppercase text-left">
                                                    {item.title}
                                                </th>
                                            )
                                        })}
                                    </tr>
                        </thead>
                        <tbody>
                        {data.map((item)=>{
                            return(
                                <tr key={item.continent} className="bg-gray-600 border-b">
                                    {header.map((subItem)=>{
                                        return(
                                            <td key={subItem.value} className="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">
                                                {item[subItem.value]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}
export default Continents