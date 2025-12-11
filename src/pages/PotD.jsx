import { Button, Container, Row } from "react-bootstrap";
import "./missions.css";
import { useEffect, useState } from "react";
import APODCard from "../components/APODcard";
import Starfield from "../components/Starfield";


export default function PotD(props) {
    function getLocalYYYYMMDD(date = new Date()) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    const earliest = "1995-06-16";

    function handleDateChange(e) {
        const value = e.target.value;
        if (!value) return;
        const today = getLocalYYYYMMDD();
        if (value > today) {
            setSelectedDate(today);
            return;
        }
        if (value < earliest) {
            setSelectedDate(earliest);
            return;
        }
        setSelectedDate(value);
    }
    const todayStr = getLocalYYYYMMDD();
    const [selectedDate, setSelectedDate] = useState(todayStr);
    const [data, setData] = useState([]);
    const today = new Date().toISOString().split("T")[0];
    const NASA_API_KEY = "VlAchuDUJFHVMOUfx2tyurVdTqPeFtuXg9jllDrp";
    

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [selectedDate]);

    return (
        <Container fluid className="mission-wall">
            <Starfield/>
            <div style={{ padding: "2rem", 
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",     
                justifyContent: "center"
            }}>
                <h1 style={{ color: "white", paddingBottom:"1rem"}}>Astronomy Picture of the Day</h1>
                <input type="date" value={selectedDate} onChange={handleDateChange} max={todayStr} min={earliest} style={{
                    backgroundColor: "#db00dbff",
                    padding: "0.6rem 1rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    marginBottom:"1rem"
                }}/>
                
                {!data || !data.url ? (
                    <div style={{
                        color: "white",
                        textAlign: "center",
                        padding: "2rem",
                        fontStyle: "italic"
                    }}>
                        No picture available for this date. Please select another day.
                    </div>
                ) : <APODCard data={data}/>}
            </div>
        </Container>
    );
}