const jobList = Array.from(jobs);

document.getElementById('search-input')
    .addEventListener('keyup', (e) => {
        const searchInput = e.target.value.toLowerCase();

        const filterData = jobList.filter((item) => item.title.toLowerCase().includes(searchInput));
        displayItem(filterData);
    });

const displayItem = (items) => {
    const jobContainer = document.querySelector('.job-lists');

    jobContainer.innerHTML = '';

    items.forEach(item => {
        const {index, icon, title, rate, type} = item;
        const jobCardDiv = document.createElement('div');
        jobCardDiv.className = 'job-card';
        jobCardDiv.innerHTML = `
            <img src="${icon}">
            <h4>${title}</h4>
            <p>${rate}</p>
            <p>${type}</p>
        `;

        jobCardDiv.addEventListener('click', () => {
            window.location.href = `job-details.html?id=${index}`;
        });

        jobContainer.appendChild(jobCardDiv);
    });
};

displayItem(jobList);
