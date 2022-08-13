import propTypes from 'prop-types';
const countryImage = 'https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1488000/virus-aa-1489735_2.jpg';

const Cards = ({country, totalCase, totalRecovered, totalDeaths}) => {
    return (
        <div className="xl:max-w-xs sm:max-w-full rounded overflow-hidden shadow-md cursor-pointer xl:hover:shadow-lg xl:hover:scale-105 transition-all">
            <img className="w-full" src={countryImage} alt="Country" />
            <div className="px-6 py-4">
                <div className="font-bold tet-xl mb-3">{country}</div>
                <p className="text-gray-700 text-base">
                    Toplam Vaka : {totalCase}
                </p>
                <p className="text-gray-700 text-base">
                    Toplam Ölüm : {totalDeaths}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{totalRecovered}</span>
            </div>
        </div>
    )
}

Cards.prototype = {
    country : propTypes.string,
    totalRecovered : propTypes.string,
    totalCase : propTypes.string, 
    totalDeaths : propTypes.string, 
}

Cards.defaultProps = {
    country : "",
    totalRecovered : "",
    totalCase : "",
    totalDeaths : "",
}

export default Cards