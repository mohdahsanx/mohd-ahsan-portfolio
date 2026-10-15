// Privacy-conscious Google Analytics 4 integration
// Respects Do-Not-Track and requires VITE_GA_MEASUREMENT_ID environment variable

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Don't track if DNT is set or no measurement ID provided
  if (!measurementId || typeof window === 'undefined') return;
  if (navigator.doNotTrack === '1' || (window as any).doNotTrack === '1') {
    return;
  }

  // Inject GA script asynchronously if not already present
  if (!document.getElementById('google-analytics-script')) {
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: true,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      transport_type: 'beacon',
    });
  }
};

export const trackCvDownload = (source: string) => {
  trackEvent('cv_download', 'Engagement', `Downloaded via ${source}`);
};
