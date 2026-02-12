import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiDayCloudy } from 'react-icons/wi';

const Iconos = ({ descripcion, size = "6rem" }) => {
    const desc = descripcion?.toLowerCase() || "";

    const getIcono = () => {
        if (desc.includes('despejado') || desc.includes('sol')) return <WiDaySunny color="#f6d32d" />;
        if (desc.includes('poco nuboso') || desc.includes('intervalos')) return <WiDayCloudy color="#ff9800" />;
        if (desc.includes('nuboso') || desc.includes('cubierto') || desc.includes('nubes')) return <WiCloudy color="#dcdcdc" />;
        if (desc.includes('lluvia') || desc.includes('chubasco')) return <WiRain color="#4facfe" />;
        if (desc.includes('nieve')) return <WiSnow color="#e0f7fa" />;
        if (desc.includes('tormenta')) return <WiThunderstorm color="#616161" />;
        if (desc.includes('niebla') || desc.includes('bruma')) return <WiFog color="#b0bec5" />;
        return <WiDaySunny color="#f6d32d" />;
    };

    return (
        <div style={{ fontSize: size, display: 'inline-flex', alignItems: 'center' }}>
            {getIcono()}
        </div>
    );
};

export default Iconos;