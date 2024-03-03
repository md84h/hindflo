export { isActivePath }

const isActivePath = (pathName) => {
    let currentPath = window.location.pathname;
    return currentPath === pathName;
} 