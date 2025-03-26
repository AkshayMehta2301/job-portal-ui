const filters = document.querySelectorAll('.job-types > *');
const jobItems = document.querySelectorAll('.job-lists > *');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        filters.forEach((fil) => {
            fil.classList.remove('active');
        });
        filter.classList.add('active');

        const targetData = filter.getAttribute('data-target');

        console.log('TargetData: ' + targetData)

        jobItems.forEach((item) => {
            console.log('ItemData: ' + item.getAttribute('data-item'));
            item.classList.add('hide');
            if (item.getAttribute('data-item') === targetData || 'all' === targetData) {
                item.classList.remove('hide');
            }
        });
    })
})