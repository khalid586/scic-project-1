export default function truncate(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}