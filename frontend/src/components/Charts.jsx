import { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { chartsCoin, getCoin } from "../features/API/fetchAPI";
import { useParams } from 'react-router-dom';
import Trade from "./Trade";
import TradeTable from "./TradeTable"
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
    const [coin, setCoin] = useState({});
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Price",
                data: [],
            },
        ],
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const singleCoinData = async () => {
            try {
                const data = await getCoin(params.id);
                setCoin(data);
            } catch (error) {
                setError("API error");
            }
        }
        singleCoinData();
    }, [params.id]);


    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() - i);
        days.unshift(day.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    }

    useEffect(() => {
        const chartCoinsData = async () => {
            try {
                const data = await chartsCoin(params.id);
                setChartData({
                    labels: days.map(dayy => dayy),
                    datasets: [
                        {
                            label: params.id,
                            data: data.prices.map(price => price),
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }
                    ]
                });
            } catch (error) {
                setError("API error");
            }
        }
        chartCoinsData();
    }, [params.id, days]);

    if (error) {
        return <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{error}</p>
            <p>Something not ideal might be happening.</p>
        </div>
    }

    return (
        <div className="p-5">
            <div>
                <Line
                    className="h-96"
                    data={chartData}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>
            <div className="flex gap-4">
                <Trade coin={coin} />
                <TradeTable />
            </div>
        </div>
    )
}

export default Charts