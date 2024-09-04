document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.timetable');
    table.addEventListener('mouseover', (event) => {
        const cell = event.target.closest('td');
        if (cell) {
            const row = cell.parentElement;
            const columnIndex = Array.from(row.children).indexOf(cell);
            const rowIndex = Array.from(table.querySelectorAll('tbody tr')).indexOf(row);
            table.querySelectorAll('td').forEach(cell => {
                cell.classList.remove('highlight-cell', 'highlight-row', 'highlight-column');
            });
            table.querySelectorAll('tbody tr').forEach((r, rIndex) => {
                Array.from(r.children).forEach((c, cIndex) => {
                    if (rIndex === rowIndex && cIndex <= columnIndex) {
                        c.classList.add('highlight-cell');
                    }
                    if (cIndex === columnIndex && rIndex <= rowIndex) {
                        c.classList.add('highlight-cell');
                    }
                });
            });
            cell.classList.add('highlight-cell');
        }
    });
    table.addEventListener('mouseout', () => {
        table.querySelectorAll('td').forEach(cell => {
            cell.classList.remove('highlight-cell', 'highlight-row', 'highlight-column');
        });
    });
});
