
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('gridForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input values
        const maxWidth = parseInt(document.getElementById('maxWidth').value);
        const columns = parseInt(document.getElementById('columns').value);
        const gutterWidth = parseInt(document.getElementById('gutterWidth').value);
        const marginWidth = parseInt(document.getElementById('marginWidth').value);

        // Calculate column width
        const availableWidth = maxWidth - 2 * marginWidth - (columns - 1) * gutterWidth;
        const columnWidth = availableWidth / columns;

        // Display results
        document.getElementById('pageWidth').textContent = maxWidth;
        document.getElementById('columnWidth').textContent = columnWidth.toFixed(2);

        // Update grid preview styles
        const gridPreview = document.querySelector('.grid-preview');
        gridPreview.style.gridTemplateColumns = `repeat(${columns}, ${columnWidth}px)`;
        gridPreview.style.gap = `${gutterWidth}px`;
        gridPreview.innerHTML = ''; // Clear previous preview

        // Add columns to preview
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.textContent = `Col ${i + 1}`;
            gridPreview.appendChild(column);
        }
    });
});