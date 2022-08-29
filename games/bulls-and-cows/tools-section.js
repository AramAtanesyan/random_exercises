document.querySelectorAll('.tools-container div').forEach(div => {
    div.addEventListener('click', (handleClickOnNumbers))
})
/**
 * changes number status: (empty, cow, bull, not-exist)
 * @param e
 */
function handleClickOnNumbers(e) {
    e.stopPropagation();
    let {target} = e;
    target.querySelector('i')?.remove();
    let [icon, nextStatus] = getNextStatusIcon(target.dataset['status']);
    target.appendChild(icon)
    target.dataset['status'] = nextStatus;
}

/**
 * returns the icon element, which should be inserted to div,
 * and status, which should be set to div
 * @param status
 * @returns {(HTMLElement|string)[]}
 */
function getNextStatusIcon(status) {
    let icon = document.createElement('i');
    let nextStatus = '';
    switch (status) {
        case '' :
            icon.classList.add('fa-solid', 'fa-check', 'pointer-events-none');
            nextStatus = 'cow';
            break;
        case 'cow' :
            icon.classList.add('fa', 'fa-check-double');
            nextStatus = 'bull';
            break;
        case 'bull' :
            icon.classList.add('fa-solid', 'fa-xmark', 'pointer-events-none');
            nextStatus = 'not-exist';
            break;
        case 'not-exist' :
            nextStatus = '';
            break;
    }
    return [icon, nextStatus];
}