export function lzLog(type, message, color = 'gray') {
    const styles = {
        info: 'color: blue; font-weight: bold;',
        success: 'color: green; font-weight: bold;',
        warn: 'color: orange; font-weight: bold;',
        error: 'color: red; font-weight: bold;',
        debug: 'color: purple;'
    };

    console.log(`%c ${type.toUpperCase()}: ${message}`, styles[type] || `color: ${color};`);
}

export function lzErrorLog(message) {
    console.log(`%c ERROR: ${message}`, 
           'background: red; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;');
}

export function lzSuccessLog(message, data2) {
    console.log(`%c ${message}`, 
           'background: green; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;', data2);
}

export function lzWarningLog(message) {
    console.log(`%c WARNING: ${message}`, 
           'background: orange; color: white; padding: 2px 6px; border-radius: 3px;');
}