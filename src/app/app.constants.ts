// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
let _VERSION = '0.0.1-SNAPSHOT'; // This value will be overwritten by webpack
let _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
/* @toreplace VERSION */
/* @toreplace DEBUG_INFO_ENABLED */
/* tslint:enable */
let _size = 20;
let size = 30;
let _page = 0;
let _maxSize = 5;
let _currentPageNumber = 1;
let _tempAttente = 60000;
let _timeout = 5000;
let _serverUrl: string = '';
let _langs: string = 'fr';

export const _SIZE = size;
export const SIZE = _size;
export const ITEMS_PER_PAGE = _size;
export const PAGE = _page;
export const MAX_SIZE = _maxSize;
export const CURRENT_PAGE_NUMBER = _currentPageNumber;
export const TEMPS_ATTENTE = _tempAttente;
export const TIMEOUT = _timeout;
export const SERVER_URL = _serverUrl;
export const LANGS = _langs;