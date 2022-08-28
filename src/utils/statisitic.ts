import { collection, addDoc } from 'firebase/firestore';
import { db } from './fb';

export const sendStatistics = async () => {
    const response = await fetch('https://api.ipify.org/?format=json').then(x => x.json())
    try {
        const docRef = await addDoc(collection(db, 'sniff'), {
            os: getOS(),
            lang: navigator.language,
            maxTouchPoints: navigator.maxTouchPoints,
            hardwareConcurrency: navigator.hardwareConcurrency,
            ip: response.ip,
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth,
            orientation: screen.orientation.angle
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'Windows';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else if (!os && /Linux/.test(platform)) {
        return 'Linux';
    }
    return 'Unknown'
}