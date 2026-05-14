export const useTheme = () => {
    const dataTheme = document.querySelector('[data-theme]');
    const themeSwitcher = document.querySelector('[data-theme-switcher]');

    const theme = localStorage.getItem('theme') || 'light';
    dataTheme.dataset.theme = theme;

    if (theme === 'dark') {
        themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener('click', () => {
        if (dataTheme.dataset.theme === 'light') {
            dataTheme.dataset.theme = 'dark';
            localStorage.setItem('theme', 'dark');
        } else {
            dataTheme.dataset.theme = 'light';
            localStorage.setItem('theme', 'light');
        }
    });
};
