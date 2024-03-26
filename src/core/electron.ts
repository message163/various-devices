/**
 * 
 * @returns true if the current environment is a electron false if the current environment is not a electron
 * @returns 是否是electron环境
 */
export const isElectron = () => {
    if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
        console.log(process.versions.electron);
        return true
    } else {
        return false
    }
}