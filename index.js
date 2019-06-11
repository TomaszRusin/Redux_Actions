
import {boundAddComment, boundRemoveComment, boundeditComment, boundUpComment, boundDownComment} from './actionTypes/actionTypes'

boundAddComment('nowy komentarz!');
boundRemoveComment(id);
boundeditComment(text, id);
boundUpComment(id);
boundDownComment(id);
