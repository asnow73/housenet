export const SHOW_NEW_POSTER_POPUP = 'SHOW_NEW_POSTER_POPUP';
export const HIDE_NEW_POSTER_POPUP = 'HIDE_NEW_POSTER_POPUP';
export const CREATE_POSTER = 'CREATE_POSTER';

export function showNewPosterPopup() {
    return {
        type: SHOW_NEW_POSTER_POPUP
    }
}

export function hideNewPosterPopup() {
    return {
        type: HIDE_NEW_POSTER_POPUP
    }
}

export function createPoster(content, author, date) {
    return {
        type: CREATE_POSTER,
        content: content,
        author: author,
        date: date
    }
}
