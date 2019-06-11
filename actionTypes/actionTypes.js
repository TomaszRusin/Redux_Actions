
// ADD_COMMENT

const ADD_COMMENT = 'ADD_COMMENT'
import uuid from 'uuid'

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

export function boundAddComment()

// EDIT_COMMENT

const EDIT_COMMENT = 'EDIT_COMMENT'

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

const boundeditComment = text => dispatch(editComment(text));

export function boundeditComment()

// REMOVE_COMMENT

const REMOVE_COMMENT = 'REMOVE_COMMENT'

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

const boundRemoveComment = text => dispatch(removeComment(text));

export function boundRemoveComment()

// THUMB_DOWN_COMMENT

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

function downComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        thumb_down: thumb_down + 1
    }
}

const boundDownComment = text => dispatch(downComment(text));

export function boundDownComment()

// THUMB_UP_COMMENT

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

function upComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        thumb_up: thumb_up + 1
    }
}

const boundUpComment = text => dispatch(upComment(text));

export function boundUpComment()
