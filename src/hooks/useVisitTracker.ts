import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useVisitTracker = () => {
    const location = useLocation();

    useEffect(() => {
        const trackVisit = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                await fetch(`${apiUrl}/api/analytics/track`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        path: location.pathname,
                        referrer: document.referrer || 'direct',
                        device: window.innerWidth < 768 ? 'mobile' : 'desktop'
                    }),
                });
            } catch (err) {
                // Silently fail if server is down
                console.warn('Analytics tracking failed');
            }
        };

        trackVisit();
    }, [location.pathname]);
};
