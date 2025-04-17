import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LottieReact = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Fetch the Lottie animation JSON
        const fetchAnimation = async () => {
            try {
                const response = await fetch('https://lottie.host/9383ba67-8238-4b35-bf00-a198c46de3ef/XCRUqUwK8c.json');
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error('Error fetching animation data:', error);
            }
        };

        fetchAnimation();
    }, []);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        backgroundColor: '#fff',
        marginTop: '100px', // Corrected this line
    };

    const animationStyle = {
        width: 400,
        height: 400,
    };

    return (
        <div style={containerStyle}>
            {animationData ? (
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoPlay
                    style={animationStyle}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LottieReact;
