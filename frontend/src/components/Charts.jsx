import { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { chartsCoin } from "../features/API/fetchAPI";
import Spinner from "./Spinner";
import { useParams } from 'react-router-dom';
import Trade from "./Trade";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Charts = () => {
    const params = useParams();
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const chartCoinsData = async () => {
            try {
                const data = await chartsCoin(params.id);
                setChartData({
                    labels: data.map(price => price[0]),
                    datasets: [
                        {
                            label: params.id,
                            data: data.map(price => price),
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }
                    ]
                });
                setChartOptions({
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    }
                });
            } catch (error) {
                setError("API error");
            }
            setIsLoading(false);
        }
        chartCoinsData();
    }, [params.id]);
    console.log(params.id)
    console.log(chartData)

    if (isLoading) {
        return (
            <div className="mt-64">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{error}</p>
            <p>Something not ideal might be happening.</p>
        </div>
    }

    return (
        <div className="p-5">
            <div>
                <Line className="h-96" data={chartData} options={chartOptions} />
            </div>
            <Trade />
        </div>
    )
}

export default Charts