
import {boundAddComment, boundRemoveComment, boundEditComment, boundUpComment, boundDownComment} from './actionTypes/actions'

boundAddComment('nowy komentarz!');
boundRemoveComment(id);
boundEditComment(text, id);
boundUpComment(id);
boundDownComment(id);
